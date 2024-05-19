import mongoose, { Schema } from "mongoose";

const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true },
    streetAddress: { type: String, default : '' },
    city: { type: String, default : "" },
    phone: { type: String, default : "" },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export const UserInfo = mongoose.models.UserInfo || mongoose.model('UserInfo', UserInfoSchema);

