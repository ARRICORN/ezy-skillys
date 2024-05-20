import Innovating from "@/Components/About/Innovating";
import ThePlatform from "@/Components/About/ThePlatform";

const AboutPage = () => {
  return (
    <div className=" space-y-32">
      <div className="bg-[#003F7D]  rounded-bl-[50px]">
        <ThePlatform />
      </div>
      <Innovating />
    </div>
  );
};

export default AboutPage;
