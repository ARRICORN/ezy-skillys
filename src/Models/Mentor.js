import mongoose, { Schema } from "mongoose";

const MentorSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        students: { type: [String] , default: [] }, // array will contain all the ids of trained students 
    },
    { timestamps: true }
);

export const Mentor = mongoose.models.Mentor || mongoose.model("Mentor", MentorSchema);