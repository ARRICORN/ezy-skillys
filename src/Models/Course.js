import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    tag: { type: String, required: true, default: "opened" },
    categories: { type: [String], required: true },
    addedBy: { type: String, required: true },
    liveDemo: { type: String, required: true },
  },
  { timestamps: true }
);

export const Course =
  mongoose.models.Course || mongoose.model("Course", CourseSchema);
