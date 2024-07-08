import { Course } from "@/Models/Course";
import { Order } from "@/Models/Order";
import { PurchasedCourse } from "@/Models/PurchasedCourse";
import { User } from "@/Models/User";
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
    await mongoose.connect(process.env.DATABASE_URL);

    const { courseId, amount } = await req.json(); // Parse the request body
    const user = await UserInfo.findOne({ email: decoded.email });
    
    const isCourseOrderExist = await Order.findOne({
      user: user._id,
      course:courseId,
      
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
      // const newOrder = await Order.create(
      //   [
      //     {
      //       course: courseId,
      //       user: user._id,
      //       status: "confirmed",
      //       transactionId: paymentIntent.id,
      //     },
      //   ],
      //   { session }
      // );

      // await PurchasedCourse.create(
      //   [
      //     {
      //       userEmail: decoded.email,
      //       course: courseId,
      //     },
      //   ],
      //   { session }
      // );

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
