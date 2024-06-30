import Image from "next/image";
import Heading from "../Shared/Heading";
import GroupDot from "../../assets/Home/GroupDot.png";
import SliderBody from "./Slider/SliderBody";

const WorldsFirstAI = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center relative  pb-20 ">
      <div>
        <Heading cssClass={`text-[#003F7D]`}>World’s</Heading>
        <Heading cssClass={`text-[#003F7D]`}>First AI Based </Heading>
        <Heading cssClass={`text-[#FF8B36] `}>Online Learning Platform</Heading>
      </div>
      <div> 
        <SliderBody />
      </div>
      <div className="absolute -bottom-10 -left-20 ">
        <Image alt="GroupDot" src={GroupDot} className="w-52 z-0" />
      </div>
    </div>
  );
};

export default WorldsFirstAI;
