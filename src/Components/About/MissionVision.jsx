import React from "react";
import HeadingColor from "../Shared/HeadingColor";
import Image from "next/image";
import TargetBoard from "../../assets/About/TargetBord.png";
import Binoculars from "../../assets/About/Binoculars.png";

import SubTitle from "../Shared/SubTitle";

const MissionVision = () => {
  return (
    <div className="w-11/12 mx-auto relative md:py-20 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="text-center space-y-6">
          <Image
            src={TargetBoard}
            alt="TargetBoard"
            className="md:w-3/12 w-2/12 mx-auto"
          />
          <HeadingColor first={"text-white"} second={"text-[#F98149]"}>
            Mission
          </HeadingColor>
          <SubTitle cssClass={"text-[#FDFDFD]"}>
            Provide practice based skill trainings using an unique teaching
            methodologies & skill platform to enhance right skills required in
            an industry for working professionals, Non-Tech professionals,
            College students & Start-ups through new skilling, up skilling &
            re-skilling.
          </SubTitle>
        </div>
        <div className="text-center space-y-6">
          <Image
            src={Binoculars}
            alt="Binoculars"
            className="md:w-3/12 w-2/12 mx-auto"
          />
          <HeadingColor first={"text-white"} second={"text-[#F98149]"}>
            Vision
          </HeadingColor>
          <SubTitle cssClass={"text-[#FDFDFD]"}>
          To transform into a right employee by imparting industry suited IT skills in a corporate office working environment with Holistic approach.
          </SubTitle>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
