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
        if (userInfo.role !== "admin") {
          throw new Error("Only admin can see their students!");
        }
        
        const result = await PurchasedCourse.aggregate([
            {
                $lookup: {
                    from: "courses",
                    localField: "course",
                    foreignField: "_id",
                    as: "courseInfo"
                }
            },
            {
                $unwind: "$courseInfo"
            },
            {
                $match: {
                    "courseInfo.addedBy": "robin@gmail.com"
                }
            }, 
            {
                $lookup: {
                       from: "users",
                       localField: "userEmail",
                       foreignField: "email",
                       as: "student"
                     }
            },
            {
                $unwind: "$student"
            },
            {
                $project: {student: {
                    name: 1, email: 1
                }}
            }
        ]);
    
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