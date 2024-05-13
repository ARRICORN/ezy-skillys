import { Course } from "@/Models/Course";
import mongoose from "mongoose";

export const fieldsThatShouldBeInCourse = [
  "title",
  "desc",
  "price",
  "tag",
  "categories",
  "addedBy",
];

export async function POST(req) {
  try {
    const body = await req.json();

    const { title, categories } = body;

    const fieldsFromBody = Object.keys(body);

    fieldsThatShouldBeInCourse.map((field) => {
      const condition = fieldsFromBody.includes(field);
      if (!condition) {
        throw new Error(`${field} is required to create a course!`);
      }
    });

    if(!categories.length) {
        throw new Error("Categories must have atleast one value!")
    }

    mongoose.connect(process.env.DATABASE_URL);

    if(await Course.findOne({title})) {
        throw new Error(`Course is already exists!`);
    }

    const result = await Course.create(body);
    return Response.json({
      success: true,
      message: "Course is created successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Error during course creation:", error);

    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}

export async function GET() {
  const result = await Course.find();
  return Response.json({
    success: true,
    message: "All Courses are retrieved successfully",
    data: result,
  });
}
