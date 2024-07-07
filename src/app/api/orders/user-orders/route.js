import { isAdmin } from "@/middlewares/checkAdmin";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import { Course } from "@/Models/Course";
import { Order } from "@/Models/Order";
import { UserInfo } from "@/Models/UserInfo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

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
