import { Order } from "@/Models/Order";
import { checkIsSeller } from "@/middlewares/checkIsSeller";
import { checkIsUser } from "@/middlewares/checkIsUser";
import mongoose, { Types } from "mongoose";

// Get single order
export const GET = async (req, context) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    const id = context?.params?.order;

    if (!id || !Types.ObjectId.isValid(id)) {
      return Response.json({ message: "Order ID is missing" }, { status: 400 });
    }

    // Check if the user is a seller
    if (await checkIsSeller(req)) {
      const result = await Order.findById(id)
        .populate("product")
        .populate("customer");

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
          message: "You are not a seller of this product",
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

    const isSeller = await checkIsSeller(req);
    const isUser = await checkIsUser(req);

    if (isSeller) {
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
      } else if ("isCancelled" in data) {
        const result = await Order.findByIdAndUpdate(
          id,
          { $set: { ...data, cancelledBy: "cancelledBySeller" } },
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
    } else if (isUser && "isCancelled" in data) {
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
// export const PUT = async (req, context) => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URL);

//     const data = await req?.json();
//     const id = context?.params?.order;

//     if (!id || !Types.ObjectId.isValid(id)) {
//       return Response.json({ message: "Order ID is missing" }, { status: 400 });
//     }

//     const isSeller = await checkIsSeller(req);
//     const isUser = await checkIsUser(req);

//     if (isSeller) {
//       if ("status" in data) {
//         const result = await Order.findByIdAndUpdate(
//           id,
//           {
//             $set: data,
//           },
//           { new: true }
//         );
//         return Response.json(
//           {
//             status: "Success",
//             message: "Order status updated successfully",
//             data: result,
//           },
//           { status: 200 }
//         );
//       } else if (isSeller && "isCancelled" in data) {
//         const result = await Order.findByIdAndUpdate(
//           id,
//           {
//             $set: { ...data, cancelledBy: "cancelledBySeller" },
//           },
//           { new: true }
//         );
//         return Response.json(
//           {
//             status: "Success",
//             message: "Order cancelled successfully",
//             data: result,
//           },
//           { status: 200 }
//         );
//       }
//     } else if (isUser && "isCancelled" in data) {
//       const result = await Order.findByIdAndUpdate(
//         id,
//         {
//           $set: { ...data, cancelledBy: "cancelledByUser" },
//         },
//         { new: true }
//       );
//       return Response.json(
//         {
//           status: "Success",
//           message: "Order cancelled successfully",
//           data: result,
//         },
//         { status: 200 }
//       );
//     } else {
//       return Response.json(
//         {
//           status: "Error",
//           message: "Please provide a valid data field",
//         },
//         { status: 400 }
//       );
//     }

//     return Response.json(
//       {
//         message: "You are not authorized to update this order",
//       },
//       { status: 403 }
//     );
//   } catch (error) {
//     console.log(error);
//     return Response.json(
//       {
//         status: "Error",
//         message: "An error occurred while updating the order",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// };
