import mongoose, { Schema } from "mongoose";

const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true },
    streetAddress: { type: String },
    city: { type: String },
    phone: { type: String },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export const UserInfo = mongoose.models.UserInfo || mongoose.model('UserInfo', UserInfoSchema);

