import mongoose, { Schema } from "mongoose";

const MentorSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },
        categories: { type: Number, required: true },
    },
    { timestamps: true }
);

export const Mentor = mongoose.models.Mentor || mongoose.model("Mentor", MentorSchema);
