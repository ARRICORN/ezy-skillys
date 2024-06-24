import { Course } from "@/Models/Course";
import { Order } from "@/Models/Order";
import { Product } from "@/Models/Product";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import { checkIsSeller } from "@/middlewares/checkIsSeller";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const decoded = checkIsLoggedIn();
    // Connect to the database
    await mongoose.connect(process.env.DATABASE_URL);

    // Find the user by email
    const user = await UserInfo.findOne({ email: decoded.email });
    if (!user) {
      return new Response(
        JSON.stringify({
          message: "User not found",
        }),
        { status: 404 }
      );
    }

    // Parse and validate the request body to get the product ID
    const { courseId } = await req.json();
    if (!courseId) {
      return new Response(
        JSON.stringify({
          message: "Course ID is required",
        }),
        { status: 400 }
      );
    }

    // Check if the product exists
    const course = await Course.findById(courseId);
    if (!course) {
      return new Response(
        JSON.stringify({
          message: "Course not found",
        }),
        { status: 404 }
      );
    }

    // Create a new order with the provided product ID and user's ID
    const order = await Order.create({
      course: courseId,
      user: user._id,
    });

    return new Response(
      JSON.stringify({
        status: "Success",
        message: "Order created successfully",
        data: order,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
      }),
      { status: 500 }
    );
  }
};

// get orders by user and seller
export const GET = async (req) => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.DATABASE_URL);

    // Parse email from the request URL
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return new NextResponse(
        JSON.stringify({
          message: "Email query parameter is required",
        }),
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await UserInfo.findOne({ email });
    if (user) {
      // Find orders for the user and populate the related fields
      const orders = await Order.find({ customer: user._id })
        .populate("product")
        .populate("customer");

      return new NextResponse(
        JSON.stringify({
          status: "Success",
          message: "User's orders retrieved successfully",
          data: orders,
        }),
        { status: 200 }
      );
    } else {
      // Check if the request is from a valid seller
      if (await checkIsSeller(req)) {
        // Retrieve the seller's products
        const sellerProducts = await Product.find({ sellerEmail: email });
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;
        const skip = (page - 1) * limit;
        // Retrieve all orders related to the seller's products
        const result = await Order.find({
          product: { $in: sellerProducts.map((p) => p._id) },
        })
          .populate("product")
          .populate("customer")
          .skip(skip)
          ?.limit(limit);

        return new NextResponse(
          JSON.stringify({
            status: "Success",
            message: "Seller's product orders retrieved successfully",
            data: result,
          }),
          { status: 200 }
        );
      } else {
        return new NextResponse(
          JSON.stringify({
            message: "Only the seller of this product can retrieve this data.",
          }),
          { status: 403 }
        );
      }
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong",
      }),
      { status: 500 }
    );
  }
};

// delete delivered orders
export const DELETE = async (req) => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.DATABASE_URL);

    // Check if the user is a valid seller
    if (await checkIsSeller(req)) {
      // Delete all delivered orders
      const result = await Order.deleteMany({ status: "delivered" });

      return new Response(
        JSON.stringify({
          status: "Success",
          message: "Delivered orders deleted successfully",
          data: result,
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          message: "You are not a seller of this product",
        }),
        { status: 403 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
      }),
      { status: 500 }
    );
  }
};
