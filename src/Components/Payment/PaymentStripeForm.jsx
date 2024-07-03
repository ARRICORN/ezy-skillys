"use client";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import axiosConfig from "/axiosConfig";
import React, { useEffect, useState } from "react";

const PaymentStripeForm = ({ amount, courseId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMsg, setErrorMsg] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosConfig.post("/orders", {
          amount: convertToSubcurrency(amount),
          courseId: courseId,
        });
        setClientSecret(data?.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    fetchData();
  }, [amount, courseId]);

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
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  };

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
        {!loading ? `Pay $${amount}` : "Loading..."}
      </button>
    </form>
  );
};

export default PaymentStripeForm;
