
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { User } from "@/Models/User";

export async function POST(req) {
  try {
    const body = await req.json();
    
    const { email, password} = body;
     console.log(body,"body")
    if (!email || !password ) {
        return Response.json({
        message: "Please fill all the fields"
      });
    }
    mongoose.connect(process.env.DATABASE_URL);
    const isUserPresent = await User.findOne({ email });

    if (!isUserPresent) {
      return Response.json({
        message: "User is not exist."
      });
    }
    const name = isUserPresent.name
      
    const isPasswordMatch = await bcrypt.compare(password,isUserPresent.password)
      if (!isPasswordMatch) { 
        return Response.json({
            message: "Password is incorrect"
          });
      }
      console.log(isPasswordMatch, "isPasswordMatch ")
      
    const token = jwt.sign({ name,email}, process.env.JWT_SECRET_KEY);

    return Response.json({
        message: "User logged in successfully",
        token
    });
      
  } catch (error) {
    console.error("Error during user creation:", error);
   
    return Response.json({
      message: "Internal server error"
    });
  }
}
