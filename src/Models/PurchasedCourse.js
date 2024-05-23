import mongoose, { Schema } from "mongoose";

const PurchasedCourseSchema = new Schema(
  {
    userEmail: { type: String, required: true },
    courseId: { type: String, required: true },
  },
  { timestamps: true }
);

export const PurchasedCourse =
  mongoose.models.PurchasedCourse ||
  mongoose.model("PurchasedCourse", PurchasedCourseSchema);
