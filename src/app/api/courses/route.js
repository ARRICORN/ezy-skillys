import { Course } from "@/Models/Course";
import mongoose from "mongoose";

export async function GET(req) {
  const url = new URL(req.url);
  const searchTerm = url.searchParams.get("search_term");
  const tag = url.searchParams.get("tag");
  const categories = url.searchParams.getAll("categories");

  const filterConditions = { isDeleted: false };
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
