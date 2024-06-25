

import mongoose, { Schema } from "mongoose";
import { Course } from "./Course";

const ReviewSchema = new Schema(
  {
    courseId: { type: mongoose.Types.ObjectId, required: true, ref: Course },
    rating: { type: Number, required: true, },
    review: { type: String, required: true },
    user: { type: String, required: true },
    userEmail: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Review =
  mongoose.models.Review || mongoose.model("Review", ReviewSchema);
