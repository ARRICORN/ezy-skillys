import { Course } from "@/Models/Course";
import { PurchasedCourse } from "@/Models/PurchasedCourse";
import { User } from "@/Models/User";
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
    if (userInfo.role !== "admin") {
      throw new Error("Only admin can see sales summary!");
    }

    const totalCourses = await Course.find().countDocuments();

    const salesData = await PurchasedCourse.aggregate([
      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseInfo",
        },
      },
      {
        $addFields: { totalPrice: { $sum: "$courseInfo.price" } },
      },
      {
        $group: {
          _id: null,
          totalSales: {
            $sum: "$totalPrice",
          },
        },
      },
      {
        $project: { _id: 0 },
      },
    ]);

    const totalUsers = await User.find().countDocuments();
    const studentsData = await PurchasedCourse.aggregate([
      {
        $group: {
          _id: "$userEmail",
          student: { $first: "$userEmail" },
        },
      },
      {
        $count: "student",
      },
      {
        $addFields: { totalStudents: "$student" },
      },
      {
        $project: { student: 0 },
      },
    ]);
    const coursesSold = await PurchasedCourse.find().countDocuments();

    const result = {
      totalCourses,
      coursesSold,
      ...salesData[0],
      totalUsers,
      ...studentsData[0]
    };
    return Response.json({
      success: true,
      message: "My students are retrieved successfully",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
