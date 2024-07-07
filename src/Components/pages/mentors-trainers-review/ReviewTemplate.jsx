import Image from "next/image";
import star from "../../../assets/favorite.png";
import award from "../../../assets/trophy.png";
import styles from "./style.module.css";
import Starrating from "@/Components/ReviewCardDetailsPage/Starrating";
import ReviewTime from "@/Components/ReviewCardDetailsPage/ReviewTime";

const ReviewTemplate = ({ review }) => {
  return (
    <div className="max-w-[900px] m-auto font-poppins">
      {" "}
      <div
        className={`${styles.card_shadow} min-h-[277px] p-6 bg-[#ecbaba45] mx-3 my-16 md:mx-4 relative flex flex-col justify-between`}
      >
        {/* rating, review and date */}
        <div>
          <div className="flex justify-between  mb-2 gap-3">
            <div className="flex  ">
              <Starrating rate={review?.rating} />
            </div>
            <div className="text-[15px] inline-block font-mono">
              <ReviewTime time={review?.createdAt} />
            </div>
          </div>
          <div>
            <span className="text-[14px] text-justify ">
              {review?.review.length > 200
                ? `${review?.review.slice(0, 200)}...`
                : review?.review}
            </span>
          </div>
          <div></div>
        </div>
        <div className="flex mt-3 items-center justify-start gap-2 md:gap-3">
          {/* === details === */}
          <div>
            <div>
              <div className="text-[18px] block font-bold">{review?.user}</div>
              <div className="text-[#52525be2] text-[14px] font-medium">
                {review?.userEmail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTemplate;
