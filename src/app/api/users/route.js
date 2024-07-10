

export const dynamic = 'force-dynamic';



import { User } from "@/Models/User";
import { UserInfo } from "@/Models/UserInfo";
import { isAdmin } from "@/middlewares/checkAdmin";

import mongoose from "mongoose";





export async function GET(req) {
    try {
      mongoose.connect(process.env.DATABASE_URL);
      const url = new URL(req.url);
      const email = url.searchParams.get('email');
    
  
      if (await isAdmin(email)) {
        // Fetch all users and user info for admin
        const Users = await User.find();
        const UserInfos = await UserInfo.find();
        const UsersData = Users.map((User) => {
          const UserInfo = UserInfos.find((info) => info.email === User.email);
          return { ...User.toObject(), UserInfo: UserInfo ? UserInfo.toObject() : null };
        });
        return Response.json(UsersData);
      } else if (email) {
        // Find user details by email
        const user = await User.findOne({ email });
        const userInfo = await UserInfo.findOne({ email });
        if (user && userInfo) {
          return Response.json({ ...user.toObject(), UserInfo: userInfo.toObject() });
        } else {
          return Response.json({ message: "User not found" });
        }
      } else {
        return Response.json({ message: "Only admin can see all users. Please provide an email to see your details." });
      }
    } catch (error) {
      console.log(error);
      return Response.json({ error: error.message });
    }
  }



export async function PUT(req) {
  try {
    
    await mongoose.connect(process.env.DATABASE_URL);

    // Get the user email from the request (assuming you have authentication set up)
    const url = new URL(req.url);
    const email = url.searchParams.get('email');

 console.log(email,"email");
    const { name, image, streetAddress, city, phone } = await req.json();

    
    const user = await User.findOne({ email: email });
    const userInfo = await UserInfo.findOne({ email: email });

    if (!user || !userInfo) {
      return Response.json({
        success: false,
        message: 'user not found',
      });
    }

   
    if (name) user.name = name;
    if (image) user.image = image;
    await user.save();

    // Update the userInfo document
    if (streetAddress) userInfo.streetAddress = streetAddress;
    if (city) userInfo.city = city;
    if (phone) userInfo.phone = phone;
    await userInfo.save();

   return Response.json({
          success: true,
          message: 'Information updated  successfully',
        });
  } catch (error) {
    console.error(error);
   
  }
}

