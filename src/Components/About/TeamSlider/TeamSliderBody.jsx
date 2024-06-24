"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TeamSlicerCard from "./TeamSlicerCard";
import Kishor from "../../../assets/About/Kishor.png";
import Suchitra from "../../../assets/About/Suchitra.png";
import Naren from "../../../assets/About/Naren.png";
import Anand from "../../../assets/About/Anand.png";

const TeamSliderBody = () => {
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
            image={Kishor}
            name={"KISHORE KUMAR"}
            title={"CEO & FOUNDER, CARAMEL IT SERVICES"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlicerCard
            image={Suchitra}
            name={"SUCHITRA"}
            title={"DIRECTOR - HR & OPERATIONS"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlicerCard image={Naren} name={"NAREN M"} title={"Co-Founder"} />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlicerCard
            image={Anand}
            name={"ANAND KUMAR"}
            title={"ANGEL INVESTOR"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TeamSliderBody;
