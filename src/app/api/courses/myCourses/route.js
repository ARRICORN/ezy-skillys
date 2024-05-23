import { Course } from "@/Models/Course";
import { UserInfo } from "@/Models/UserInfo";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    // Checking the user is logged in or not by checking the token;
    const decoded = checkIsLoggedIn();
    mongoose.connect(process.env.DATABASE_URL);

    const userInfo = await UserInfo.findOne({ email: decoded.email });
    if (!userInfo) {
      throw new Error("You are not authorized!");
    }
    if (userInfo.role !== "admin") {
      throw new Error("You are not authorized to create a course!");
    }

    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("search_term");
    const tag = url.searchParams.get("tag");
    const categories = url.searchParams.getAll("categories");

    const filterConditions = { addedBy: decoded.email };
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
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
