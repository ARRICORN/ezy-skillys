"use client";
import FORMAT_DATE from "@/utility/request_data/format_data";
import ReactStars from "react-rating-stars-component";
import style from "./review.module.css";

const Review_box = ({ product }) => {
  const rating = Math.round(product.rating);

  return (
    <div class="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-3 rounded-md mt-8 shadow-md">
      <div class="flex flex-row justify-between w-full">
        <div class="flex flex-row justify-between w-full">
          <p class="text-xs text-orange-300">
            {FORMAT_DATE(product?.createdAt)}
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-between w-full">
        <h3 class="text-xl font-bold">{product?.user}</h3>

        <div class="text-xs">
          <div class="flex flex-row">
            <ReactStars count={rating} size={20} value={rating} />
          </div>
        </div>
      </div>

      <div class="text-sm">{product?.review}</div>
    </div>
  );
};

export default Review_box;
