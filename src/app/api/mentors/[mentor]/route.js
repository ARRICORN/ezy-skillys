import { Mentor } from "@/Models/Mentor";
import { isAdmin } from "@/middlewares/checkAdmin";
import mongoose, { Types } from "mongoose";

// GET method for single mentor
export const GET = async (req, context) => {
    try {
        const id = context?.params?.mentor;

        // Checking if the id is valid or not
        if (!id || !Types.ObjectId.isValid(id)) {
            return new Response(JSON.stringify({
                message: "Invalid or missing mentor id"
            }), {
                status: 400
            });
        }
        await mongoose.connect(process.env.DATABASE_URL);
        const result = await Mentor.findById(id);

        if (result) {
            return new Response(JSON.stringify({
                status: "Success",
                message: "Mentor retrieved successfully",
                data: result,
            }), {
                status: 200 // OK
            });
        }

        return new Response(JSON.stringify({
            message: "No mentor available with this id",
        }), {
            status: 404 // Not Found
        });

    } catch (error) {
        console.error("Error in getting single mentor:", error);
        return new Response(JSON.stringify({
            message: "Error in getting single mentor",
            error: error.message,
        }), {
            status: 500
        });
    }
};

// Update method for existing mentors
export const PUT = async (req, context) => {
    try {
      
      const id = context?.params?.mentor;
      const { searchParams } = new URL(req.url);
      const email = searchParams.get("email");
  
      if (!id || !Types.ObjectId.isValid(id)) {
        return new Response(JSON.stringify({
          message: "Invalid or missing mentor id"
        }), {
          status: 400
        });
      }
  
      // checking if the user is admin or not
      if (await isAdmin(email)) {
        const data = await req?.json();
        await mongoose.connect(process.env.DATABASE_URL);
        const result = await Mentor?.findByIdAndUpdate(id,
          {
            $set: data,
          },
          {
            new: true
          }
        );
        return new Response(JSON.stringify(
          {
            status: "Success",
            message: "Mentor updated successfully",
            data: result,
          }
        ),
          { status: 201 }
        );
  
      } else {
        return new Response(JSON.stringify(
          {
            message: "Only admin can update mentor info",
          }
        ),
          { status: 500, }
        );
      }
    } catch (error) {
      return new Response(JSON.stringify(
        {
          message: "Error in updating mentor",
          error,
        }
      ),
        { status: 500 }
      );
    }
  };