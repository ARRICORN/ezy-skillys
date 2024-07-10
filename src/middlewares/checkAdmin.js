


import { UserInfo } from "@/Models/UserInfo";
import mongoose from "mongoose";

export async function isAdmin(email) {
    try {
      mongoose.connect(process.env.DATABASE_URL);
      console.log(email);
      const userInfo = await UserInfo.findOne({ email: email });
      if (userInfo && userInfo.role==="admin") {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error checking admin status:", error);
  
    }
  }