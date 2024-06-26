import { PurchasedCourse } from "@/Models/PurchasedCourse";
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
    if (userInfo.role !== "user") {
      throw new Error("Only user can see their purchased courses!");
    }

    const url = new URL(req.url);

    const sortingType = url.searchParams.get("sort") || "ascending";
    const sort = sortingType === "descending" ? -1 : 1;
    const pageValue = url.searchParams.get("page") || 1;
    const limitValue = url.searchParams.get("limit") || 10;
    const page = Number(pageValue);
    const limit = Number(limitValue);
    const skip = (Number(page) - 1) * limit;

    const result = await PurchasedCourse.find({
      userEmail: userInfo.email,
    })
      .sort({ price: sort })
      .skip(skip)
      .limit(limit)
      .populate("course")
      .select("-createdAt -updatedAt -__v");

    return Response.json({
      success: true,
      message: "My purchased courses are retrieved successfully",
      meta: {
        page,
        limit,
        skipped: skip,
        totalData: result.length,
      },
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
