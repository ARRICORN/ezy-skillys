import Image from "next/image";
import SubHeading from "../Shared/SubHeading";
import SubTitle from "../Shared/SubTitle";
import Title from "../Shared/Title";
import Office from "../../assets/About/Office.png";
import Plush from "../../assets/About/Plush.png";
import UpArrow from "../../assets/About/UpArrow.png";
import CircleBg from "../../assets/CircleBg.png";

const Innovating = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="grid md:grid-cols-2 gap-10 ">
        {/* left  */}

        <div className="relative md:h-full h-72 ">
          <Image src={Office} alt="BookReading" className="w-6/12 z-10 absolute" />
          <Image
            src={CircleBg}
            alt="CircleBg"
            className="w-4/12 top-36 absolute left-0 translate-x-3/4 translate-y-1-4"
          />
          <Image
            src={UpArrow}
            alt="CircleBg"
            className="w-8 top-16 absolute right-10 "
          />
          <Image
            src={Plush}
            alt="CircleBg"
            className="w-10  absolute left-0 bottom-0 "
          />
          
        </div>

        {/* right  */}
        <div className="space-y-7">
          <Title cssClass={"text-[#003F7D]"}>O U R S T O R Y</Title>
          <SubHeading cssClass={"text-[#F98149]"}>
            Innovating new ways to train students
          </SubHeading>
          <div className="space-y-2">
            <SubTitle cssClass={"text-[#575757]"}>
              We see no limits to what we can achieve by harnessing our
              individual and collective strengths. We are changing the world
              with our ideas, insights, and unique perspectives.
            </SubTitle>
            <SubTitle cssClass={"text-[#575757]"}>
              Our innovation is led by data, curiosity and the occasional happy
              accident. We create an uplifting environment where we learn from
              our failures and celebrate our success.
            </SubTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovating;
