import Link from "next/link";

export default function PaymentSuccess({ searchParams: { amount } }) {
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center m-10 rounded-md flex justify-center items-center">
      <div className="mb-10 font-poppins bg-gray-900 rounded-lg px-10 pt-5 pb-10 w-fit">
        <h4 className="text-3xl font-extrabold mb-2">Payment Success!</h4>
        <p className="mb-3">Your payment has been successfully done.</p>
        <div className="h-[2px] w-full bg-primary mb-5"></div>
        <p className="text-xl font-semibold">Total Payment</p>
        <p className="text-2xl font-bold">${amount}</p>
        <p className="mt-3 mb-10">
          An automated payment receipt will be sent to your registered email.
        </p>
        <Link href={"/"} className="p-3 rounded-lg border border-white">
          Back to home
        </Link>
      </div>
    </main>
  );
}
