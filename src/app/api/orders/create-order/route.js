import { Order } from "@/Models/Order";
import { PurchasedCourse } from "@/Models/PurchasedCourse";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

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
    await mongoose.connect(process.env.DATABASE_URL);

    const { courseId, transactionId } = await req.json(); // Parse the request body
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
          transactionId: transactionId,
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
      }),
      { status: 200 }
    );
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
  } finally {
    session.endSession();
  }
};
