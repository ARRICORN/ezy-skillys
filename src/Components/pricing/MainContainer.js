import Image from "next/image";
import beads from "/src/assets/beads2.png";
import wave from "/src/assets/Wave.svg"
import { Fragment } from "react";

const MainContainer = () => {
  return (
    <Fragment>
      <div className={` bg-[#003F7D] min-h-[80vh] flex flex-col justify-between pt-10 md:pt-12 lg:pt-24`}>
        <h1 className="text-3xl text-center font-bold text-white">Our <span className="text-[#FF8B36]">Pricing</span></h1>
        <div className="flex justify-around items-end w-full">
        <Image src={beads} alt="beads" className="w-20 h-36 z-10" />
        <div></div>
        <Image src={beads} alt="beads" className="w-20 h-36 z-10" />
        </div>
        
      </div>
      <div>
        <Image src={wave} alt="wave" className="w-full relative -top-12 md:-top-20 lg:-top-32"/>
     </div>
    </Fragment>
  );
};

export default MainContainer;
