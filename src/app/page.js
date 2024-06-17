import SkillDevelopment from "@/Components/Home/SkillDevelopment";
import SkillYourWay from "@/Components/Home/SkillYourWay";
import WorldsFirstAI from "@/Components/Home/WorldsFirstAI";

export default function Home() {
  return (
    <main>
      <div className="w-11/12 mx-auto space-y-32">
        <SkillYourWay />
        <WorldsFirstAI />
        <SkillDevelopment />
      </div>
    </main>
  );
}
