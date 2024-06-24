import Image from "next/image";
import SubHeading from "../Shared/SubHeading";
import SubTitle from "../Shared/SubTitle";
import Title from "../Shared/Title";
import BookReading from "../../assets/About/BookReading.png";
import GroupWork from "../../assets/About/GroupWork.png";
import Work from "../../assets/About/Work.png";
import GroupDot from "../../assets/GroupDot.png";
import CircleBg from "../../assets/CircleBg.png";

const ThePlatform = () => {
  return (
    <div className="w-11/12 mx-auto relative ok md:py-20 py-10">
      <div className="md:grid md:grid-cols-9 flex flex-col-reverse gap-10 items-center">
        {/* left section  */}
        <div className="md:col-span-4 space-y-7">
          <Title cssClass={"text-[#F98149]"}>A B O U T U S</Title>
          <SubHeading cssClass={"text-white"}>
            The Platform For The Next Billion Learners
          </SubHeading>
          <SubTitle cssClass={"text-[#B0B6C3]"}>
            Transforming tech education for the next generation of students &
            employees
          </SubTitle>
          <Image
            src={GroupDot}
            alt="Group Dot"
            className="w-1/6 md:-bottom-6  absolute translate-x-3/4"
          />
        </div>
        {/* right section  */}
        <div className="md:col-span-5  lg:space-y-10 space-y-5  md:scale-100 scale-90">
          <div className="flex items-end lg:gap-10 gap-5 ">
            <Image src={BookReading} alt="BookReading" className="w-4/12" />
            <Image src={GroupWork} alt="GroupWork" className="w-6/12" />
          </div>
          <div className="flex justify-center">
            <Image src={Work} alt="Work" className="w-7/12" />
          </div>

          <Image
            src={CircleBg}
            alt="Group Dot"
            className="w-2/6 md:top-36 top-20  absolute right-2 -z-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default ThePlatform;
