
'use client'

import Link from "next/link";

const ErrorPage = ({
  error,
  reset,
  statusCode
}) => {

    return (
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p className="text-lg text-red-700">{error.message}</p>
      <p className="text-lg text-red-700">{error.digest === '1746192727' ? "Your Email is already exist.": "Sorry, something went wrong." }</p>
      <button
        onClick={() => reset()}
        className="py-4 px-8 bg-red-600 text-white rounded-lg my-5"
      >
        Try Again
      </button>
    </div>
    );
  };
  
  export default ErrorPage;
  