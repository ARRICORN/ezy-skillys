

export const dynamic = 'force-dynamic';


import { Course } from "@/Models/Course";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

export async function PATCH(req, { params }) {
    try {
      // Checking the user is logged in or not by checking the token;
      const decoded = checkIsLoggedIn();
      mongoose.connect(process.env.DATABASE_URL);
  
      const userInfo = await UserInfo.findOne({ email: decoded.email });
      if (!userInfo) {
        throw new Error("You are not authorized!");
      }
  
      if (userInfo.role !== "admin") {
        throw new Error("You are not authorized to updated course details!");
      }
  
      const body = await req.json();
      if (!body) {
        throw new Error("No data given!");
      }
      if (body.addedBy) {
        throw new Error("You can't edit addedBy field!");
      }
      const courseID = params.courseID;
      const course = await Course.findById(courseID);
      if (!course) {
        throw new Error("Course not found!");
      }
      if (course.isDeleted) {
        throw new Error("This Course is already deleted!");
      }
  
      // Updating the course details
      const result = await Course.findByIdAndUpdate(
        courseID,
        {
          ...body,
        },
        { new: true }
      );
  
      return Response.json({
        success: true,
        message: "Course details are updated successfully.",
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