"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axiosConfig from "/axiosConfig";
import { useSession } from "next-auth/react";
import Loading from "@/Components/Ui/Loading";

export default function PaymentSuccess({
  searchParams: { amount, payment_intent, courseId },
}) {
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const token = session?.data?.user?.token;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosConfig.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/create-order`,
          {
            transactionId: payment_intent,
            courseId: courseId,
          },
          {
            headers: {
              Authorization: token,
              "Content-type": "Application/json",
            },
          }
        );
        console.log("/orders/create-order", data);
        if (data?.message === "Order placed successfully") setLoading(false);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    fetchData();
  }, [courseId, payment_intent, token]);

  return (
    <main className="max-w-6xl mx-auto p-10 text-black text-center m-10 rounded-md flex justify-center items-center">
      {loading ? (
        <div className="animate-pulse w-[450px] h-[350px] mb-10 font-poppins bg-gray-100 rounded-lg px-10 pt-5 pb-10 flex flex-col justify-center items-center shadow-lg">
          <h4 className="text-3xl font-extrabold mb-2 w-1/2 max-w-[350px] h-[30px] rounded-sm bg-gray-200"></h4>
          <p className="mb-3 w-3/4 max-w-[400px] h-[20px] bg-gray-200 rounded-sm"></p>
          <div className="h-[2px] w-full bg-secondary mb-5"></div>
          <p className="text-xl font-semibold w-1/4 max-w-[130px] h-[20px] bg-gray-200 rounded-sm mb-3"></p>
          <p className="text-2xl font-bold w-1/5 max-w-[100px] h-[24px] bg-gray-200 rounded-sm"></p>
          <p className="mt-3 mb-10 w-5/6 h-[16px] max-w-[400px] bg-gray-200 rounded-sm"></p>
          <div className="p-3 rounded-lg border border-white uppercase w-[120px] h-[50px] bg-gray-200 "></div>
        </div>
      ) : (
        <div className="mb-10 font-poppins bg-gray-100 shadow-lg rounded-lg px-10 pt-5 pb-10 w-fit">
          <h4 className="text-3xl font-extrabold mb-2 text-primary">
            Payment Success!
          </h4>
          <p className="mb-3">Your payment has been successfully done.</p>
          <div className="h-[2px] w-full bg-secondary mb-5"></div>
          <p className="text-xl font-semibold text-primary">Total Payment</p>
          <p className="text-2xl font-bold text-primary">${amount}</p>
          <p className="mt-3 mb-10 ">
            Go to dashboard to check your purchased course
          </p>
          <Link
            href={"/dashboard"}
            className="p-3 font-semibold rounded-lg border border-white uppercase bg-primary text-white"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
    </main>
  );
}
