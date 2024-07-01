import { User } from "@/Models/User";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

export async function GET() {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await User.findOne({ email: decoded.email });
    if (!userInfo) {
      throw new Error("You are not authorized!");
    }
    const payload = {
      name: userInfo?.name,
      email: userInfo?.email,
      image: userInfo?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdfo4lewXJYT_2xPo_Xu2Lj6XPn78X9UJA&s",
    };
    return Response.json({
      success: true,
      message: "Here is your profile data",
      data: payload,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
