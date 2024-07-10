import { Course } from "@/Models/Course";
import mongoose from "mongoose";

export async function GET(req) {
  const url = new URL(req.url);
  const searchTerm = url.searchParams.get("search_term");
  const tag = url.searchParams.get("tag");
  const categories = url.searchParams.getAll("categories");

  const sortingType = url.searchParams.get("sort") || "ascending";
  const sort = sortingType === "descending" ? -1 : 1;
  const pageValue = url.searchParams.get("page") || 1;
  const limitValue = url.searchParams.get("limit") || 10;
  const page = Number(pageValue);
  const limit = Number(limitValue);
  const skip = (page - 1) * limit;
  console.log("pagevalue ", pageValue, limitValue);

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
  const result = await Course.find(!!filterConditions && filterConditions)
    .sort({ price: sort })
    .skip(skip)
    .limit(limit);
  console.log("backend ", result);
  const totalData = (await Course.find({ isDeleted: false })).length || 0;
  const retrievedData = result.length;
  const totalPages = Math.ceil(totalData / limit);
  return Response.json({
    success: true,
    message: "All Courses are retrieved successfully",
    meta: {
      page,
      limit,
      totalData,
      retrieved: retrievedData,
      totalPages,
    },
    data: result,
  });
}
