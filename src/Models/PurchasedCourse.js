import { Course } from "@/Models/Course";
import mongoose, { Schema } from "mongoose";

const PurchasedCourseSchema = new Schema(
  {
    userEmail: { type: String, required: true },
    course: { type: String, required: true, ref: Course },
  },
  { timestamps: true }
);

export const PurchasedCourse =
  mongoose.models.PurchasedCourse ||
  mongoose.model("PurchasedCourse", PurchasedCourseSchema);
