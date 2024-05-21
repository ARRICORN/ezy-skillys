import Innovating from "@/Components/About/Innovating";
import MissionVision from "@/Components/About/MissionVision";
import ThePlatform from "@/Components/About/ThePlatform";

const AboutPage = () => {
  return (
    <div className=" space-y-32">
      <div className="bg-[#003F7D]  rounded-bl-[50px]">
        <ThePlatform />
      </div>
      <Innovating />
      <div className="bg-[#003F7D]  ">
       <MissionVision/>
      </div>
    </div>
  );
};

export default AboutPage;
