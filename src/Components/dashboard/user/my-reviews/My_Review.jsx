import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import { getServerSession } from "next-auth";
import React from "react";
import Review_template from "./Review_template";
import { authOptions } from "@/Components/Utils/AuthOptions";
import style from "./review.module.css";
const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/my-reviews`;

const My_Review = async () => {
  const session = await getServerSession(authOptions);
  const reviews = await API_REQUEST_BY_URL(url, session.token);

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
