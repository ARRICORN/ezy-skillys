import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
 
}, { timestamps: true });



export const User = mongoose.models.User || mongoose.model('User', UserSchema);