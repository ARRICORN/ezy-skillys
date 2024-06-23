import { Mentor } from "@/Models/Mentor";
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