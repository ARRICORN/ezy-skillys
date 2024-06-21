import Image from "next/image";

import EZY from "../../../assets/Home/EZY.png";
const SliderCard = ({ image, alt, title }) => {
  return (
    <div className="grid grid-cols-2 gap-10 bg-[#FFF2EA] rounded-md px-5 py-16 items-center relative xl:h-72 lg:h-64  md:h-56 sm:h-60 h-44">
      <div className="absolute top-5 left-5 ">
        <Image src={EZY} alt="EZY" className="lg:w-20 w-10 md:w-16 sm:w-12" />
      </div>
      <div>
        <h2 className="xl:text-5xl lg:text-4xl sm:text-2xl text-xl">
          AI Based
        </h2>
        <h2 className="xl:text-5xl lg:text-4xl sm:text-2xl text-xl font-bold text-[#FF8B36]">
          {title}
        </h2>
      </div>
      <div>
        <Image alt={alt} className="w-10/12 mx-auto" src={image} />
      </div>
    </div>
  );
};

export default SliderCard;
