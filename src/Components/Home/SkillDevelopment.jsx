
"use client"

import Image from "next/image";
import Learn from "../../assets/Home/Learn.png";
import Collages from "../../assets/Home/Colleges.png";
import Startups from "../../assets/Home/Startups.png";
import Invdividuals from "../../assets/Home/Invdividuals.png";
import Corporates from "../../assets/Home/Corporates.png";

const SkillDevelopment = () => {
  return (
    <div>
      <p className="text-[#F98149] font-semibold  pb-8">WHO CAN JOIN</p>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-bold md:text-balance text-heading text-wrap text-[#003F7D]">
            Skill Development Schemes For All
          </h2>
          <div className="grid grid-cols-2 gap-4  ">
            <div className="space-y-2">
              <div className="flex gap-4">
                <div>
                  <h2 className="translate-y-1/4 h-full text-[#003F7D] font-bold">
                    01
                  </h2>
                </div>
                <div>
                  <Image src={Collages} alt="Collages" className="md:w-20 w-16" />
                </div>
              </div>
              <p className="font-bold text-[#303030]">Colleges/Universities</p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-4">
                <div>
                  <h2 className="translate-y-1/4 h-full text-[#003F7D] font-bold">
                    02
                  </h2>
                </div>
                <div>
                  <Image
                    src={Invdividuals}
                    alt="Invdividuals"
                    className="md:w-16 w-14"
                  />
                </div>
              </div>
              <p className="font-bold text-[#303030]">
                Individuals/Working Professionals
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-4">
                <div>
                  <h2 className="translate-y-1/4 h-full text-[#003F7D] font-bold">
                    03
                  </h2>
                </div>
                <div>
                  <Image src={Startups} alt="Startups" className="md:w-16 w-14" />
                </div>
              </div>
              <p className="font-bold text-[#303030]">Startups</p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-4">
                <div>
                  <h2 className="translate-y-1/4 h-full text-[#003F7D] font-bold">
                    04
                  </h2>
                </div>
                <div>
                  <Image src={Corporates} alt="Corporates" className="md:w-16 w-14" />
                </div>
              </div>
              <p className="font-bold text-[#303030]">Corporates</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={Learn} alt="Learn" className="w-4/5 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default SkillDevelopment;
