
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { User } from "@/Models/User";
import { UserInfo } from "@/Models/UserInfo";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);
    const { name, email, password,phone,image,city,streetAddress } = body;

    if (!name || !email || !password) {
      return Response.status(400).json({
        message: "Please fill all the fields"
      });
    }

    if (!password?.length || password.length < 5) {
      return Response.json({
        message: "Password must be at least 5 characters"
      });
    }

    mongoose.connect(process.env.DATABASE_URL);
    const isUserPresent = await User.findOne({ email });

    if (isUserPresent) {
      return Response.json({
        message: "User already exists."
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = { name, email, password: hashedPassword,image };

    const createdUser = await User.create(newUser);

    
    const newUserInfo = { email,phone,streetAddress,city }; 
    const createdUserInfo = await UserInfo.create(newUserInfo);

    // Set expiration time to 7 days ( 7 days * 24 hours * 60 mins * 60 secs)
    const expiresIn = 7 * 24 * 60 * 60;
    const token = jwt.sign({ name, email,image }, process.env.JWT_SECRET_KEY, { expiresIn });

    return Response.json({
      user: createdUser,
      userInfo: createdUserInfo,
      token
    });
  } catch (error) {
    console.error("Error during user creation:", error);

    return Response.json({
      message: "Internal server error"
    });
  }
}
