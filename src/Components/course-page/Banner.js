import { Fragment } from "react";
// import banner from "/src/assets/banner.png";
import angular1 from "/src/assets/angular1.png"
import Image from "next/image";
const Banner = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/3592/cfff/b511973c4d918e11c8075c16c604b00e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXjxGIYZ6KnwdBlC3~dgrHYGS8e~k-pgoy1~obtXnFKG4plQtG-dQMJU~q2MOFEf7v0080QDm7MHJl1-rJrEYy~9mO-oCBv2iQekhbGLi1f0pfOfHH39LSN0rhzcG61T0gCpHePmEf3x-y8Lk46o3EoAAXp14VfycgLvup3GNJL7If-8ESG1SJaz~~yfn6zgUEqFfs7Ih1GQjuB9vRpvGZhQreyHHm1FktYt1dKBbOhL1JM1xPuQjPEawbAPj5X1l~snqSZgmrv6bm4e-hR2Fmb4iqSI0VnTDk5FfTe7N2IeIGFvIjv5-tBLoy~oVoPUGb7frzVDTCgP~jnhJdlMGw__")`,
        }}
        className="h-[90vh] bg-cover bg-center flex justify-evenly items-center px-12 rounded-b-[32px] mb-12 font-poppins"
      >
        <div className="flex flex-col lg:flex-row justify-center gap-12 items-center w-5/6 mx-auto relative lg:top-16">
          <div className="lg:w-1/4">
            <Image src={angular1} alt="" width={150} height={150} />
          </div>
          <div className="lg:w-1/2 text-center lg:text-start">
            <h1 className="font-bold text-[3rem] leading-tight">
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
