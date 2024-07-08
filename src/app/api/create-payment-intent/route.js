import { Order } from "@/Models/Order";
import { UserInfo } from "@/Models/UserInfo";
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
      course: courseId,
    });

    if (!isCourseOrderExist) {
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

      return new NextResponse(
        JSON.stringify({
          message: "Client secret retrieved successfully",
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
    return new NextResponse(
      JSON.stringify({
        message: "client secret fetch failed",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
