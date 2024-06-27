import { PurchasedCourse } from "@/Models/PurchasedCourse";
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
      throw new Error("Only user can see their purchased courses!");
    }
    const result = await PurchasedCourse.find({
      userEmail: userInfo.email,
    }).populate("course").select("-createdAt -updatedAt -__v");

    return Response.json({
      success: true,
      message: "My purchased courses are retrieved successfully",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
