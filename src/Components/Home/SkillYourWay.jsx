import React from "react";
import Heading from "../Shared/Heading";
import Button from "../Shared/Button";
import Image from "next/image";
import HomeBg from "../../assets/Home/HomeBg.png";
import HomeBgCircle from "../../assets/Home/HomeBgCircle.png";
import HomeBgMan from "../../assets/Home/HomeBgMan.png";

const SkillYourWay = () => {
  return (
    <div className="md:grid md:grid-cols-2 flex flex-col-reverse   gap-10 mt-14   ">
      {/* left cols  */}
      <div className="space-y-5">
        <Heading cssClass={"text-[#003F7D]"}>
          Skill your way up to success with us
        </Heading>
        <h3 className="lg:text-4xl md:text-2xl text-xl text-[#A1A1A1] text-balance">
          Get the skills you need for <br /> the future of work.
        </h3>
        <div className="flex  items-center gap-5">
          <input
            className="bg-[#F2F4F8] lg:py-4 md:py-3 py-2  px-5  rounded-md w-8/12"
            placeholder="Search the course you want"
            type="text"
          />
          <button className="bg-[#003F7D] text-white lg:py-4 md:py-3 py-2 px-2  rounded-md">
            <div className="scale-50">Search</div>
          </button>
        </div>
        <div className="gap-5 flex items-center flex-wrap">
          <Button cssClass={"text-white bg-[#FF914C] px-8"}>
            Cloud Computing
          </Button>
          <Button cssClass={"text-[#B9B5B2] bg-[#F2F4F8] px-8"}>
            Cyber Security
          </Button>
          <Button cssClass={"text-[#B9B5B2] bg-[#F2F4F8] px-8"}>DevOps</Button>
          <Button cssClass={"text-[#B9B5B2] bg-[#F2F4F8] px-8"}>
            Data Science
          </Button>
          <Button cssClass={"text-[#B9B5B2] bg-[#F2F4F8] px-8"}>
            Software Testing
          </Button>
        </div>
      </div>
      {/* right cols  */}
      <div >
        <div className="flex justify-center lg:items-center items-center md:items-start w-full lg:h-full relative mt-10  sm:scale-110 md:scale-100">
          <Image src={HomeBg} alt="Image" className="lg:w-[420px] w-[400px] md:w-80" />

          <div className="absolute lg:-translate-y-44 -translate-y-40 md:-translate-y-16  md:translate-x-12 translate-x-9">
            <Image
              src={HomeBgCircle}
              alt="Image"
              className="lg:w-[270px] w-52 md:w-48  "
            />
          </div>
          <div className="absolute bottom-0 md:translate-x-8 translate-x-5 ">
            <Image src={HomeBgMan} alt="Image" className="lg:w-[350px] md:w-60 w-72 "  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillYourWay;
