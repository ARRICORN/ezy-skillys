
import { User } from "@/Models/User";
import { UserInfo } from "@/Models/UserInfo";
import { isAdmin } from "@/middlewares/checkAdmin";
import mongoose from "mongoose";

export async function DELETE(req,context) {

    try {
      mongoose.connect(process.env.DATABASE_URL);
      const url = new URL(req.url);
        const email = url.searchParams.get('email');
        const id = context?.params?.user;
      //console.log(id)
    //console.log(url)
      if (await isAdmin(email)) {
        
        const collectUserInfoById = await UserInfo.findById({_id:id});
        //console.log(collectUserInfoById, "collectUserInfoById ")
          if (!collectUserInfoById) {
            return Response.json({ success: false, message: 'User not found or maybe deleted' });
          }
          const deleteUser = await User.findOneAndDelete({ _id: id });
          const deleteUserInfo = await UserInfo.findOneAndDelete({ _id: id });
          return Response.json({ success: true, message: 'User deleted successfully ' });

    
      }
      return Response.json({ message: 'Only Admin can delete' });
    } catch (error) {
    //console.log(error)
    }
  
  }
  
  