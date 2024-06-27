import React from "react";
import HeadingColor from "../Shared/HeadingColor";
import TeamSliderBody from "./TeamSlider/TeamSliderBody";
import AdvisorSliderBody from "./TeamSlider/Advisor";

const TeamAdvisors = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="space-y-10">
        <div className="text-center">
          <HeadingColor first={"text-[#003F7D]"} second={"text-[#F98149]"}>
            Team
          </HeadingColor>
        </div>
        <div>
          <TeamSliderBody />
        </div>
        <div className="text-center">
          <HeadingColor first={"text-[#003F7D]"} second={"text-[#F98149]"}>
            Team
          </HeadingColor>
        </div>
        <div>
          <AdvisorSliderBody/>
        </div>
      </div>
    </div>
  );
};

export default TeamAdvisors;
