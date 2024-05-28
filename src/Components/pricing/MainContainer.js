import Image from "next/image";
import beads from "/src/assets/beads2.png";
import wave from "/src/assets/Wave.svg"

const MainContainer = () => {
  return (
    <div className="min-h-screen">
      <div className={` bg-[#003F7D] flex justify-around min-h-[80vh] items-end`}>
        <Image src={beads} alt="beads" className="w-20 h-36 z-10" />
        <div></div>
        <Image src={beads} alt="beads" className="w-20 h-36 z-10" />
        
      </div>
      <div>
        <Image src={wave} alt="wave" className="w-full relative -top-32"/>
     </div>
    </div>
  );
};

export default MainContainer;
