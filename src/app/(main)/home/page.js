import SkillDevelopment from "@/Components/Home/SkillDevelopment";
import SkillYourWay from "@/Components/Home/SkillYourWay";
import WorldsFirstAI from "@/Components/Home/WorldsFirstAI";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto space-y-32">
      <SkillYourWay />
      <WorldsFirstAI />
      <SkillDevelopment />
    </div>
  );
};

export default HomePage;
