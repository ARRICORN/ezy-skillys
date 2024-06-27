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
      throw new Error("Only admin can see leaderboard data!");
    }
 
    const result = await User.aggregate([
        {
            $lookup: {
                from: "courses",
                localField: "email",
                foreignField: "addedBy",
                as: "course"
            }
        },
        {
            $addFields: {
                totalCourses: { $size: "$course" }
            }
        },
        {
            $match: { course: { $ne: [] } }
        },
        {
            $unwind: "$course"
        },
        {
            $lookup: {
                from: "purchasedcourses",
                localField: "course._id",
                foreignField: "course",
                as: "myPurchasedCourses"
            }
        },
        {
            $addFields: {
                student:
                {
                    $size: "$myPurchasedCourses"
                }
            }
        },
        {
            $group: {
                _id: "$email",
                instructor: { $first: "$name"},
                email: {$first: "$email"},
                totalCourses: { $first: "$totalCourses" },
                totalStudents: { $sum: "$student" }
            }
        },
        {
            $sort: { totalStudents: -1 }
        }
    ]);

    return Response.json({
      success: true,
      message: "Leaderboard data is retrieved successfully",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
