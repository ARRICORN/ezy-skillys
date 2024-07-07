import { Course } from "@/Models/Course";
import { Order } from "@/Models/Order";
import { PurchasedCourse } from "@/Models/PurchasedCourse";
import { UserInfo } from "@/Models/UserInfo";
import { isAdmin } from "@/middlewares/checkAdmin";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req, res) => {
  const session = await mongoose.startSession();

  try {
    const decoded = checkIsLoggedIn();
    if (!decoded) {
      return new NextResponse(
        JSON.stringify({
          message: "You are not authorized",
        }),
        { status: 403 }
      );
    }

    // Connect to the database if not already connected
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { courseId, amount } = await req.json(); // Parse the request body

    const isCourseOrderExist = await Order.findOne({
      course: courseId,
    });

    if (!isCourseOrderExist) {
      session.startTransaction();

      // Create a payment intent with Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
      });

      const user = await UserInfo.findOne({ email: decoded.email });

      if (!user) {
        await session.abortTransaction();
        session.endSession();
        return new NextResponse(
          JSON.stringify({
            message: "User not found",
          }),
          { status: 404 }
        );
      }

      // Create a new order with status 'confirmed'
      const newOrder = await Order.create(
        [
          {
            course: courseId,
            user: user._id,
            status: "confirmed",
            transactionId: paymentIntent.id,
          },
        ],
        { session }
      );

      await PurchasedCourse.create(
        [
          {
            userEmail: decoded.email,
            course: courseId,
          },
        ],
        { session }
      );

      await session.commitTransaction();
      session.endSession();

      return new NextResponse(
        JSON.stringify({
          message: "Order placed successfully",
          data: newOrder,
          clientSecret: paymentIntent.client_secret,
        }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: "Course order already exists",
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return new NextResponse(
      JSON.stringify({
        message: "Order processing failed",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};

// get orders by user and admin
export const GET = async (req) => {
  try {
    const decoded = checkIsLoggedIn();

    // Connect to the database
    await mongoose.connect(process.env.DATABASE_URL);

    // Find the user by email
    const user = await UserInfo.findOne({ email: decoded.email });
    if (user.role === "user") {
      // Find orders for the user and populate the related fields
      const orders = await Order.find({ user: user._id })
        .populate("course")
        .populate("user");

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
      if (await isAdmin(decoded.email)) {
        // Retrieve the admin's courses
        const adminCourses = await Course.find({ addedBy: decoded.email });
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;
        const skip = (page - 1) * limit;
        // Retrieve all orders related to the admin's courses
        const result = await Order.find({
          course: { $in: adminCourses.map((c) => c._id) },
        })
          .populate("course")
          .populate("user")
          .skip(skip)
          ?.limit(limit);

        return new NextResponse(
          JSON.stringify({
            status: "Success",
            message: "Admin's course orders retrieved successfully",
            data: result,
          }),
          { status: 200 }
        );
      } else {
        return new NextResponse(
          JSON.stringify({
            message: "Only the admin of this course can retrieve this data.",
          }),
          { status: 403 }
        );
      }
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        message: "Invalid User",
      }),
      { status: 500 }
    );
  }
};
