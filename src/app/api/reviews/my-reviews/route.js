import { Review } from "@/Models/Review";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

export async function GET() {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await UserInfo.findOne({ email: decoded.email });
    if (!userInfo) {
      throw new Error("You are not authorized!");
    }
    if (userInfo.role !== "user") {
      throw new Error("You are not authorized!");
    }
    const result = await Review.find({
      addedBy: decoded.email,
    }).populate("courseId");

    if (result.length < 1) {
      throw new Error("You haven't reviewed any courses!");
    }

    return Response.json({
      success: true,
      message: "Here is your added reviews",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
