import { Course } from "@/Models/Course";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  try {
    mongoose.connect(process.env.DATABASE_URL);

    const courseID = params.courseID;
    const result = await Course.findById(courseID);
    if (!result) {
      throw new Error("Course not found!");
    }
    if (result.isDeleted) {
      throw new Error("This course is deleted!");
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
