import { Course } from "@/Models/Course";
import { PurchasedCourse } from "@/Models/PurchasedCourse";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

const fieldsThatShouldBeWithBody = ["courseId"];

export async function POST(req) {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await UserInfo.findOne({ email: decoded.email });

    if (!userInfo) {
      throw new Error("You are not authorized!");
    }
    if (userInfo.role !== "user") {
      throw new Error("You are not authorized to purchase courses!");
    }
    const body = await req.json();
    if (body.userEmail) {
      throw new Error("You can't pass the userEmail field with body!");
    }
    const fieldsFromBody = Object.keys(body);

    fieldsThatShouldBeWithBody.map((field) => {
      const condition = fieldsFromBody.includes(field);
      if (!condition) {
        throw new Error(`${field} is required to purchase a course!`);
      }
    });
    const { courseId } = body;

    const course = await Course.findById(courseId);
    if (!course) {
      throw new Error("The course doesn't exist!");
    }
    // checking is the course already purchased or not
    const isAlreadyPurchased = await PurchasedCourse.findOne({
      userEmail: userInfo.email,
      courseId: course._id,
    });
    if (isAlreadyPurchased) {
      throw new Error("You already purchased this course!");
    }

    const payload = {
      userEmail: userInfo.email,
      courseId,
    };

    const result = await PurchasedCourse.create(payload);
    return Response.json({
      success: true,
      message: "Course is purchased successfully.",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
