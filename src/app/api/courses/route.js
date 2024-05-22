import { Course } from "@/Models/Course";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

export async function GET(req) {
  const url = new URL(req.url);
  const searchTerm = url.searchParams.get("search_term");
  const tag = url.searchParams.get("tag");
  const categories = url.searchParams.getAll("categories");

  const filterConditions = {isDeleted: false};
  if (searchTerm) {
    filterConditions["title"] = { $regex: searchTerm, $options: "i" };
  }
  if (tag) {
    filterConditions["tag"] = { $regex: tag, $options: "i" };
  }
  if (categories && categories.length > 0) {
    filterConditions["categories"] = {
      $in: categories.map((category) => new RegExp(category, "i")),
    };
  }
  mongoose.connect(process.env.DATABASE_URL);
  const result = await Course.find(!!filterConditions && filterConditions);
  return Response.json({
    success: true,
    message: "All Courses are retrieved successfully",
    data: result,
  });
}

export const fieldsThatShouldBeInCourse = [
  "image",
  "title",
  "desc",
  "price",
  "tag",
  "categories",
  "liveDemo"
];

export async function POST(req) {
  try {
     // Checking the user is logged in or not by checking the token;
     const decoded = checkIsLoggedIn();
     mongoose.connect(process.env.DATABASE_URL);
 
     const userInfo = await UserInfo.findOne({ email: decoded.email });
     if (!userInfo) {
       throw new Error("You are not authorized!");
     }
     if(userInfo.role !== "admin") {
      throw new Error("You are not authorized to create a course!");
     }
    const body = await req.json();
    if(body.isDeleted) {
      throw new Error("You can't set isDeleted when creating a course!");
    }

    const { title, categories } = body;

    const fieldsFromBody = Object.keys(body);

    fieldsThatShouldBeInCourse.map((field) => {
      const condition = fieldsFromBody.includes(field);
      if (!condition) {
        throw new Error(`${field} is required to create a course!`);
      }
    });

    if (!categories.length) {
      throw new Error("Categories must have atleast one value!");
    }
    // Checking if the course is already exists or not
    if (await Course.findOne({ title })) {
      throw new Error(`Course is already exists!`);
    }
    const payload = {
      ...body,
      addedBy: decoded.email
    }
    const result = await Course.create(payload);
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
