import { Course } from "@/Models/Course";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await UserInfo.findOne({ email: decoded.email });
    if (!userInfo) {
      throw new Error("You are not authorized!");
    }
    if (userInfo.role !== "admin") {
      throw new Error("You are not authorized!");
    }

    const courseID = params.courseID;
    const result = await Course.findOne({
      _id: courseID,
      addedBy: userInfo.email,
    });
    if (!result) {
      throw new Error("Course not found!");
    }
    if (result.isDeleted) {
      throw new Error("The course is deleted!");
    }
    return Response.json({
      success: true,
      message: "Course details are retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Error during course retrieving", error);

    return Response.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}


