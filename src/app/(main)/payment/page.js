"use client";

import PaymentStripeForm from "@/Components/Payment/PaymentStripeForm";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PaymentPage() {
  const amount = 49.99;
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-20">
      <h3 className="text-secondary text-5xl font-bold px-3 mb-10 capitalize">
        payment
      </h3>
      <div className="max-w-[500px] w-full p-4 rounded-lg bg-[#F3F4F6] shadow-xl">
        <h5 className="text-2xl text-center text-primary font-bold pb-2 mb-4 border-b-2 border-primary capitalize">
          order summary
        </h5>
        <div className="flex justify-between items-center font-semibold text-lg">
          <p>Course Name:</p>
          <p>react.js</p>
        </div>
        <div className="flex justify-between items-center font-semibold text-lg">
          <p>Course Price:</p>
          <p>{amount}</p>
        </div>
        <div className="flex justify-between items-center font-semibold text-lg">
          <p>Discount:</p>
          <p>0</p>
        </div>
        <div className="w-full h-[2px] bg-blue-300 my-2"></div>
        <div className="flex justify-between items-center font-bold text-primary text-lg mb-6">
          <p>Total:</p>
          <p>{amount}</p>
        </div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "usd",
          }}
        >
          <PaymentStripeForm amount={amount} />
        </Elements>
      </div>
    </div>
  );
}
