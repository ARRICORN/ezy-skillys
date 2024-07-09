"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./review.module.css";
import ReviewTemplate from "../mentors-trainers-review/ReviewTemplate";

const Review = ({ reviewsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };





  
  return (
    <div>
      {" "}
      <div className={`${styles.bgImage}`}>
        <div className={`container py-5 md:py-10`}>
          <div className="ml-2 md:ml-6">
            <span className="text-[#003F7D] text-[30px] font-bold text-center md:text-[50px] block">
              Student Review
            </span>
          </div>

          {/* all reviews */}
          <div className="my-4 ">
            {reviewsData.length > 1 ? (
              <Slider {...settings}>
                {reviewsData &&
                  reviewsData?.map((review) => (
                    <ReviewTemplate key={review._id} review={review} />
                  ))}
              </Slider>
            ) : (
              <>
                {reviewsData &&
                  reviewsData?.map((review) => (
                    <ReviewTemplate key={review._id} review={review} />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
