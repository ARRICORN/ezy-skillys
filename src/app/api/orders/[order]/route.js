import { Order } from "@/Models/Order";
import { UserInfo } from "@/Models/UserInfo";
import { isAdmin } from "@/middlewares/checkAdmin";
import checkIsLoggedIn from "@/middlewares/checkIsLoggedIn";
// import { checkIsUser } from "@/middlewares/checkIsUser";
import mongoose, { Types } from "mongoose";

// Get single order
export const GET = async (req, context) => {
  try {
    const decoded = checkIsLoggedIn();
    await mongoose.connect(process.env.DATABASE_URL);
    const id = context?.params?.order;

    if (!id || !Types.ObjectId.isValid(id)) {
      return Response.json({ message: "Order ID is missing" }, { status: 400 });
    }

    // Check if the user is a seller
    if (await isAdmin(decoded.email)) {
      const result = await Order.findById(id)
        .populate("course")
        .populate("user");

      return Response.json(
        {
          status: "Success",
          message: "Order retrieved successfully",
          data: result,
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          message: "You are not a admin of this course",
        },
        { status: 403 }
      );
    }
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        status: "Error",
        message: "An error occurred while retrieving the order",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

// Update an order
export const PUT = async (req, context) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    const data = await req?.json();
    const id = context?.params?.order;

    if (!id || !Types.ObjectId.isValid(id)) {
      return new Response(
        JSON.stringify({ message: "Order ID is missing or invalid" }),
        { status: 400 }
      );
    }
    const decoded = checkIsLoggedIn();
    const user = await UserInfo.findOne({ email: decoded.email });

    if (isAdmin(decoded.email)) {
      if ("status" in data) {
        const result = await Order.findByIdAndUpdate(
          id,
          { $set: data },
          { new: true }
        );
        return new Response(
          JSON.stringify({
            status: "Success",
            message: "Order status updated successfully",
            data: result,
          }),
          { status: 200 }
        );
      } else if (isAdmin(decoded.email) && "isCancelled" in data) {
        const result = await Order.findByIdAndUpdate(
          id,
          { $set: { ...data, cancelledBy: "cancelledByAdmin" } },
          { new: true }
        );
        return new Response(
          JSON.stringify({
            status: "Success",
            message: "Order cancelled successfully",
            data: result,
          }),
          { status: 200 }
        );
      } else {
        return new Response(
          JSON.stringify({
            status: "Error",
            message: "Invalid data fields provided",
          }),
          { status: 400 }
        );
      }
    } else if ((user.role = "user" && "isCancelled" in data)) {
      const result = await Order.findByIdAndUpdate(
        id,
        { $set: { ...data, cancelledBy: "cancelledByUser" } },
        { new: true }
      );
      return new Response(
        JSON.stringify({
          status: "Success",
          message: "Order cancelled successfully",
          data: result,
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          status: "Error",
          message: "You are not authorized to update this order",
        }),
        { status: 403 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        status: "Error",
        message: "An error occurred while updating the order",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
