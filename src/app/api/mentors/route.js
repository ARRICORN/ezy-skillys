import mongoose from "mongoose";
import { Mentor } from "@/Models/Mentor";
import { isAdmin } from "@/middlewares/checkAdmin";

// Create method for new mentors
export const POST = async (req) => {
    try {
        const { searchParams } = new URL(req?.url);
        const email = searchParams.get("email");
        // checking if the user is admin or not
        if (await isAdmin(email)) {
            await mongoose.connect(process.env.DATABASE_URL);
            const data = await req?.json();
            const result = await Mentor?.create(data);
            return new Response(JSON.stringify(
                {
                    status: "Success",
                    message: "Mentor created successful",
                    data: result,
                }),
                { status: 201 }
            );
        } else {
            return new Response(JSON.stringify(
                {
                    message: "Only admin can create new mentors",
                }),
                { status: 403 }
            );
        }
    } catch (error) {
        return new Response(JSON.stringify(
            {
                message: "Error in creating Mentor",
            }),
            { status: 500 }
        );
    }
};