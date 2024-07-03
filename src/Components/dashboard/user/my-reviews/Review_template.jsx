import Image from "next/image";
import style from "./review.module.css";
import Review_box from "./Review_box";

const Review_template = ({ product }) => {
  return (
    <div className={`${style.card}`}>
      {/* === review image === */}
      <div class="">
        <div class="w-[40%] h-[20%] px-3 pt-2">
          <Image
            alt="Card Image"
            width={100}
            height={100}
            priority={true}
            src={product?.courseId?.image}
          />
          <h2 class="text-lg font-semibold my-2">{product?.courseId?.title}</h2>
        </div>

        <div class="">
          {/* === review === */}
          <Review_box product={product} />
        </div>
      </div>
    </div>
  );
};

export default Review_template;
