import Innovating from "@/Components/About/Innovating";
import MissionVision from "@/Components/About/MissionVision";
import TeamAdvisors from "@/Components/About/TeamAdvisors";
import ThePlatform from "@/Components/About/ThePlatform";


const About = () => {
  return (
    <div className=" space-y-32">
      <div className="bg-[#003F7D]  rounded-bl-[50px]">
        <ThePlatform />
      </div>
      <Innovating />
      {/* mission */}
      <div className="bg-[#003F7D]  ">
       <MissionVision/>
      </div>
      <TeamAdvisors/>
    
    </div>
  );
};

export default About;
