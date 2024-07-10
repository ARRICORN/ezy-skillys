import { Course } from "@/Models/Course";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";


export async function DELETE(req, { params }) {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await UserInfo.findOne({ email: decoded.email });
    if (!userInfo) {
      throw new Error("You are not authorized!");
    }

    if (userInfo.role !== "admin") {
      throw new Error("You are not authorized to delete this course!");
    }
    const courseID = params.courseID;

    const course = await Course.findById(courseID);
    if (!course) {
      throw new Error("Course not found!");
    }
    if (course.isDeleted) {
      throw new Error("The course is already deleted!");
    }

    const result = await Course.findByIdAndUpdate(
      courseID,
      {
        isDeleted: true,
      },
    );
    if (!result) {
      throw new Error("Course not found!");
    }
    return Response.json({
      success: true,
      message: "Course is deleted successfully.",
      data: {
        message: "Course is deleted successfully."
      },
    });
  } catch (error) {
    console.error("Error during course deletion", error);

    return Response.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

