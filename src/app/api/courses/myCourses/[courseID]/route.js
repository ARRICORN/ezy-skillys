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

// export async function DELETE(req, { params }) {
//   try {
//     // Checking the user is logged in or not by checking the token;
//     const decoded = checkIsLoggedIn();
//     mongoose.connect(process.env.DATABASE_URL);

//     const userInfo = await UserInfo.findOne({ email: decoded.email });
//     if (!userInfo) {
//       throw new Error("You are not authorized!");
//     }

//     if (userInfo.role !== "admin") {
//       throw new Error("You are not authorized to delete this course!");
//     }
//     const courseID = params.courseID;

//     const course = await Course.findById(courseID);
//     if (!course) {
//       throw new Error("Course not found!");
//     }
//     if (course.isDeleted) {
//       throw new Error("The course is already deleted!");
//     }

//     const result = await Course.findByIdAndUpdate(courseID, {
//       isDeleted: true,
//     });
//     if (!result) {
//       throw new Error("Course not found!");
//     }
//     return Response.json({
//       success: true,
//       message: "Course is deleted successfully.",
//       data: {
//         message: "Course is deleted successfully.",
//       },
//     });
//   } catch (error) {
//     console.error("Error during course deletion", error);

//     return Response.json({
//       success: false,
//       message: error.message || "Something went wrong",
//     });
//   }
// }
