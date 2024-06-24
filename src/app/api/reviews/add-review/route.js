import { Course } from "@/Models/Course";
import { PurchasedCourse } from "@/Models/PurchasedCourse";
import { Review } from "@/Models/Review";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const fieldsThatShouldBeInBodyData = ["courseId", "rating", "review"];

export async function POST(req) {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await UserInfo.findOne({ email: decoded.email });
    if (!userInfo) {
      throw new Error("You are not authorized!");
    }
    const body = await req.json();
    const fieldsFromBody = Object.keys(body);

    fieldsThatShouldBeInBodyData.map((field) => {
      const condition = fieldsFromBody.includes(field);
      if (!condition) {
        throw new Error(`${field} is required to add a review!`);
      }
    });

    const isCourseExist = await Course.findById(body?.courseId);
    if (!isCourseExist) {
      throw new Error("Course not found!");
    }

    if (body.rating < 1 || body.rating > 5) {
      throw new Error("rating must be a number from 1-5 (including)");
    }


    const courseId =  new ObjectId(body.courseId);

    const isCoursePurchasedByYou = await PurchasedCourse.findOne({
      userEmail: decoded?.email,
      course: courseId,
    });

    if (!isCoursePurchasedByYou) {
      throw new Error("Course not found!");
    }

    const isReviewGivenAlready = await Review.findOne({
        courseId: courseId,
        addedBy: decoded.email
    })
    if(isReviewGivenAlready) {
        throw new Error("You have reviewed this course before!");
    }

    const payload = {
      courseId: courseId,
      rating: body.rating,
      review: body.review,
      addedBy: decoded.email,
    };
    const result = await Review.create(payload);
    return Response.json({
      success: true,
      message: "Review added successfully.",
      data: result,
    });
  } catch (error) {
    if (error.message === "Unexpected end of JSON input") {
      return Response.json({
        success: false,
        message: "data is required to add a review!",
      });
    }
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
