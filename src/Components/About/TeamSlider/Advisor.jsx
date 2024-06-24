"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TeamSlicerCard from "./TeamSlicerCard";
import Naren from "../../../assets/About/Naren.png";
import Anand from "../../../assets/About/Anand.png";
import Prasad from "../../../assets/About/Prasad.png";
import Chitra from "../../../assets/About/Chitra.png";

const AdvisorSliderBody = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <TeamSlicerCard
            image={Prasad}
            name={"PRASAD"}
            title={"PHARMA INDUSTRIALIST"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlicerCard
            image={Anand}
            name={"ANAND KUMAR"}
            title={"ANGEL INVESTOR"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlicerCard
            image={Chitra}
            name={"CHITRA"}
            title={"SR.EXECUTIVE ADVISOR"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlicerCard image={Naren} name={"NAREN M"} title={"Co-Founder"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AdvisorSliderBody;
