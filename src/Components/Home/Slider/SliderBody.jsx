"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SliderCard from "./SliderCard";
import Frame from "../../../assets/Home/Frame.png";
import FrameCoding from "../../../assets/Home/FrameCoding.png";
import FramePage from "../../../assets/Home/FramePage.png";
import Group from "../../../assets/Home/Group.png";

const SliderBody = () => {
  return (
    <div className="sm:w-[500px]  md:w-full w-80 mx-auto ">
      <Swiper
        spaceBetween={30}
        className="mySwiper rounded-md "

      >
        <SwiperSlide>
          <SliderCard
            alt={"Course Selector"}
            image={Frame}
            title={"Course Selector"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard
            alt={"Scenarios"}
            image={FrameCoding}
            title={"Scenarios"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard
            alt={"Quizs/Tests"}
            image={FramePage}
            title={"Quizs/Tests"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard
            alt={"Gamification"}
            image={Group}
            title={"Gamification"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBody;
