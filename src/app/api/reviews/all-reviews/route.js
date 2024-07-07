import { Review } from "@/Models/Review";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    const url = new URL(req.url)

    const courseId = url.searchParams.get("course");
    
    const query = {};
    if(courseId) {
        query['courseId'] = new ObjectId(courseId);
    }

    const result = await Review.find(query).populate("courseId");

    if (result.length < 1) {
      throw new Error("No review found!");
    }

    return Response.json({
      success: true,
      message: "Here is all the given reviews by our user",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
