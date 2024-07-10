
"use client"

import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";

import React, { useEffect, useState } from "react";
import Review_template from "./Review_template";

import style from "./review.module.css";
import { useSession } from "next-auth/react";
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/my-reviews`;

const My_Review = () => {
  const [reviews,setReviews]  = useState([])
  const session = useSession();
  const fetchReviews = async () => {
    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization: session?.data?.token,
          "Content-type": "Application/json",
        },
      });
      console.log(response,"response");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      console.log(res,"res")
      setReviews(res);
    } catch (error) {
      console.error("Error fetching Reviews:", error);
    }
  };

  useEffect(() => {
    if (session?.data?.token) {
      fetchReviews();
    }
  }, [session]);

  console.log(session, "session from user reviews");

  return (
    <div className="h-[88vh] py-5 overflow-auto no-scrollbar bg-gray-100 p-2">
      <div className={style.responsive}>
        {reviews.data?.length > 0 ? (
          reviews?.data
            ?.reverse()
            .map((item) => <Review_template product={item} key={item._id} />)
        ) : (
          <h1 className="mt-5 text-center text-orange-500">
            Review information was not found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default My_Review;
