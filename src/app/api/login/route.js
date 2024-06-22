import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "@/Models/User";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        {
          isOk: false,
          message: "Please fill all the fields",
        },
        { status: 400 }
      );
    }
    mongoose.connect(process.env.DATABASE_URL);
    const isUserPresent = await User.findOne({ email });

    if (!isUserPresent) {
      return Response.json(
        {
          isOk: false,
          message: "User is not exist.",
        },
        { status: 400 }
      );
    }
    const name = isUserPresent.name;

    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserPresent.password
    );
    if (!isPasswordMatch) {
      return Response.json(
        {
          isOk: false,
          message: "Password is incorrect",
        },
        { status: 400 }
      );
    }

    // Set expiration time to 7 days (7 days * 24 hours * 60 mins * 60 secs)
    const expiresIn = 7 * 24 * 60 * 60;
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_SECRET_KEY
    );

    const cookieOptions = {
      httpOnly: true,
      maxAge: expiresIn,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    };

    const cookie = cookies().set("token", token, cookieOptions);

    return Response.json(
      {
        isOk: true,
        message: "User logged in successfully",
        user: {
          name: isUserPresent.name,
          email: isUserPresent.email,
          image: isUserPresent.image,
        },
      },
      {
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Internal server error",
      },
      { status: 404 }
    );
  }
}
