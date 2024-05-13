
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { User } from "@/Models/User";
import { cookies } from "next/headers";

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
        // Set expiration time to 7 days (7 days * 24 hours * 60 mins * 60 secs)
        const expiresIn = 7 * 24 * 60 * 60;
    const token = jwt.sign({name, email,password}, process.env.JWT_SECRET_KEY);
    
    const cookieOptions = {
      httpOnly: true,
      maxAge: expiresIn,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    };
  console.log(cookieOptions, "cookies")
  
  const cookie = cookies().set('token', token, cookieOptions);
  console.log(cookie, "cookie")
  
  return Response.json(
    {message: "User logged in successfully"},
    {
      headers: {
        'Set-Cookie': cookie,
      },
    }
  );
  } catch (error) {
    console.error("Error during user creation:", error);
   
    return Response.json({
      message: "Internal server error"
    });
  }
}
