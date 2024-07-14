"use client";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import axiosConfig from "/axiosConfig";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const PaymentStripeForm = ({ amount, courseId, token }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMsg, setErrorMsg] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [courseAlreadyPurchased, setCourseAlreadyPurchased] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosConfig.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-payment-intent`,
          {
            amount: convertToSubcurrency(amount),
            courseId: courseId,
          },
          {
            headers: {
              Authorization: token,
              "Content-type": "Application/json",
            },
          }
        );
        console.log("/create-payment-intent", data);
        if (data?.clientSecret) setClientSecret(data?.clientSecret);
      } catch (error) {
        if (error?.response?.data?.message === "Course order already exists") {
          setCourseAlreadyPurchased(true);
        }
        console.error("Error fetching client secret:", error);
      }
    };
    fetchData();
  }, [amount, courseId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMsg(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/payment-success?amount=${amount}&courseId=${courseId}`,
      },
    });

    if (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  };

  if (courseAlreadyPurchased) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 mt-3">
        <p className="text-red-700 font-semibold text-lg">
          You have already purchased this course
        </p>
        <Link
          href={"/courses"}
          className="p-3 bg-primary font-semibold text-white rounded-lg uppercase"
        >
          Go to Courses
        </Link>
      </div>
    );
  }

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
      {clientSecret && <PaymentElement />}
      {errorMsg && <p>{errorMsg}</p>}
      <button
        disabled={loading || !stripe}
        className="bg-blue-700 font-semibold py-2 mt-4 w-full text-white rounded-lg"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default PaymentStripeForm;
