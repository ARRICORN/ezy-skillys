import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await UserInfo.findOne({ email: decoded.email });
    if (!userInfo) {
      throw new Error("You are not authorized!");
    }
    return Response.json({
      success: true,
      message: "Here is your role",
      data: {
        role: userInfo.role,
      },
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
