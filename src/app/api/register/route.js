import { User } from "@/Models/User";
import { UserInfo } from "@/Models/UserInfo";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, phone, image, city, streetAddress, } = body;
    console.log(body);
    if (!name || !email || !password) {
      return Response.json({ isOk: false, message: "Please fill all the fields" }, { status: 400 });
    }

    if (!password?.length || password.length < 5) {
      return Response.json({ isOk: false, message: "Password must be at least 5 characters" }, { status: 400 });
    }

    await mongoose.connect(process.env.DATABASE_URL);

    // Check if the user is already registered as a regular user
    const isUserRegistered = await UserInfo.findOne({ email });
    if (isUserRegistered) {
      return Response.json({ isOk: false, message: "You are already a user.you can't register again." }, { status: 400 });
    }

    const isUserPresent = await User.findOne({ email });


    if (isUserPresent) {
      return Response.json({ isOk: false, message: "You are already a user.you can't register again." }, { status: 400 });
    }

    const session = await mongoose.startSession();

    session.startTransaction();

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = { name, email, password: hashedPassword, image };
    const createdUser = await User.create([newUser], { session });

    const UserId = createdUser[0]._id;
    const newUserInfo = { email, phone, streetAddress, city, User: UserId };
    const createdUserInfo = await UserInfo.create([{ ...newUserInfo, _id: UserId }], { session });

    await session.commitTransaction();

    // Set expiration time to 7 days (7 days * 24 hours * 60 mins * 60 secs)
    const expiresIn = 7 * 24 * 60 * 60;
    const token = jwt.sign({ name, email, image }, process.env.JWT_SECRET_KEY, { expiresIn });

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
      { User: createdUser[0], UserInfo: createdUserInfo[0], isOk: true, message: 'Registration successfully' },
      {
        headers: {
          'Set-Cookie': cookie,
        },
      }
    );

  } catch (error) {
    console.error("Error during User creation:", error);
    return Response.json({ isOk: false, message: "Internal server error" }, { status: 404 });
  }
}