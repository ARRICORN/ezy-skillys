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
          "/orders/create-order",
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
        if (data?.response?.message) setLoading(false);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    fetchData();
  }, [courseId, payment_intent, token]);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center m-10 rounded-md flex justify-center items-center">
      {loading && <Loading />}
      {!loading && (
        <div className="mb-10 font-poppins bg-gray-900 rounded-lg px-10 pt-5 pb-10 w-fit">
          <h4 className="text-3xl font-extrabold mb-2">Payment Success!</h4>
          <p className="mb-3">Your payment has been successfully done.</p>
          <div className="h-[2px] w-full bg-primary mb-5"></div>
          <p className="text-xl font-semibold">Total Payment</p>
          <p className="text-2xl font-bold">${amount}</p>
          <p className="mt-3 mb-10">
            An automated payment receipt will be sent to your registered email.
            transectionId: {payment_intent} and courseId {courseId}
          </p>
          <Link href={"/"} className="p-3 rounded-lg border border-white">
            Back to home
          </Link>
        </div>
      )}
    </main>
  );
}
