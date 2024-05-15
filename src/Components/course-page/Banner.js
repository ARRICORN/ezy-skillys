import { Fragment } from "react";
import banner from "./assets/banner.png";
import angular1 from "./assets/angular1.png";
import Image from "next/image";
const Banner = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/3592/cfff/b511973c4d918e11c8075c16c604b00e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYrS~yl4dNR6RWarKsFsGUkocrNo2MXKqnjrH9vnLDT3Oj2IDXkZT1ULN-Ye1kH14AagzsjRnquwZwXFY3AquzSaMvGwR1EMujqro6sYwAfTdFoNHp0b6bn1dKJuvMmhBmvrqu5djcTbjBPJCAzPZ7GtaFTs8YfTjmsd8jiV55VpAw4PyVVuqsdKmrBE~u3yyCKpqGbg1boUhurVfwK4f8gufdZS16eTv3uhqu7bB6Ju2TW-tUTTilsL65nomNY6XgnIZhCVRb5oPAhSOD4yljgR4NrYpg6CmAgNuwcCXsrT7Vn32fq84LYY0Gxb9SUmhrmnhvg7I3MzSc7dSVpFvw__")`,
        }}
        className="h-[90vh] bg-cover bg-center flex justify-evenly items-center px-12 rounded-b-[32px] mb-12"
      >
        <div className="flex flex-col lg:flex-row justify-center gap-12 items-center w-5/6 mx-auto relative lg:top-16">
          <div className="lg:w-1/4">
            <Image src={angular1} alt="" width={150} height={150} />
          </div>
          <div className="lg:w-1/2 text-center lg:text-start">
            <h1 className="font-bold text-[3.5rem] leading-tight">
              <span className="block text-[#F98149]">AngularJS:</span>
              <span className="text-[#FDFDFD]">
                Basic to Advance Level Coding
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
