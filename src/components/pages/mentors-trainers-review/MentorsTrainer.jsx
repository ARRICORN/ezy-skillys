"use client";
import MentorsTemplate from "./MentorsTemplate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mentorsData from "@/utility/temp/trainer.json";
import styles from "./mentors.module.css";

const MentorsTrainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className={`${styles.bgImage}`}>
      <div className={`container py-5 md:py-10`}>
        <div className="ml-2 md:ml-6">
          <span className="text-[#003F7D] text-[30px] font-bold md:text-[50px] block">
            Meet Our Professional
          </span>
          <span className="text-[#FF8B36] text-[30px] font-bold md:text-[50px]">
            Mentors & Trainers
          </span>
        </div>

        {/* cart demo */}
        <div className="my-10">
          <Slider {...settings}>
            {mentorsData &&
              mentorsData?.map((user, index) => (
                <MentorsTemplate key={index} user={user} />
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MentorsTrainer;
