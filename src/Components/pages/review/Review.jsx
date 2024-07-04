"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mentorsData from "@/utility/temp/trainer.json";
import styles from "./review.module.css";
import MentorsTemplate from "../mentors-trainers-review/MentorsTemplate";
import ReviewTemplate from "../mentors-trainers-review/ReviewTemplate";

const review = () => {
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
              Client Review
            </span>
          </div>

          {/* cart demo */}
          <div className="my-4 ">
            <Slider {...settings}>
              {mentorsData &&
                mentorsData?.map((user, index) => (
                  <ReviewTemplate key={index} user={user} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default review;
