import Image from "next/image";
import beads from "/src/assets/beads2.png";
import wave from "/src/assets/Wave.svg";
import { Fragment } from "react";
import Card from "./Card";
import individuals from "/src/assets/individuals.png";
import calender from "/src/assets/calender.png";
import colleges from "/src/assets/college.png";

const MainContainer = () => {
  const programDetails = [
    {
      id: 1,
      programType: "College Program",
      price: "$100",
      perks: [
        {
          id: 1,
          img: colleges,
          text: "For Colleges, Universities & Group Of Students",
        },
        {
          id: 2,
          img: calender,
          text: "Common Timings",
        },
      ],
    },
    {
      id: 2,
      programType: "Employee Program",
      price: "$250",
      perks: [
        {
          id: 1,
          img: individuals,
          text: "1-1 Individuals",
        },
        {
          id: 2,
          img: calender,
          text: "Common Timings",
        },
      ],
    },
    {
      id: 3,
      programType: "Complete Transformation Program",
      price: "$400",
      perks: [
        {
          id: 1,
          img: individuals,
          text: "1-1 Individuals",
        },
        {
          id: 2,
          img: calender,
          text: "Flexible Timings",
        },
      ],
    },
  ];
  return (
    <Fragment>
      <div
        className={` bg-[#003F7D] min-h-[100vh] flex flex-col justify-between pt-10 md:pt-12 lg:pt-24`}
      >
        <h1 className="text-3xl text-center font-bold text-white">
          Our <span className="text-[#FF8B36]">Pricing</span>
        </h1>
        <div className="flex justify-around items-end w-full">
          <Image src={beads} alt="beads" className="w-20 h-36 z-10" />
          <div className="flex justify-center z-50 gap-10">
            {programDetails.map((each) => (
              <div key={each.id}>
                <Card
                  programType={each.programType}
                  price={each.price}
                  perks={each.perks}
                />
              </div>
            ))}
          </div>
          <Image src={beads} alt="beads" className="w-20 h-36 z-10" />
        </div>
      </div>
      <div>
        <Image
          src={wave}
          alt="wave"
          className="w-full relative -top-12 md:-top-20 lg:-top-24"
        />
      </div>
    </Fragment>
  );
};

export default MainContainer;
