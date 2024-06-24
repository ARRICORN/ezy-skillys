import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    course: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "UserInfo",
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "confirmed"],
    },
    cancelledBy: {
      type: String,
      default: "notCancelled",
      enum: ["cancelledByUser", "cancelledByAdmin", "notCancelled"],
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Order =
  mongoose.models?.Order || mongoose?.model("Order", orderSchema);
