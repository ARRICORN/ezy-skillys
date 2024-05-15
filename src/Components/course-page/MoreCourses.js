import Image from "next/image";
import { Fragment } from "react";
import download from "/src/Components/course-page/assets/download-vector.png";
import monitor from "/src/Components/course-page/assets/monitor-vector.png";
import enroll from "/src/Components/course-page/assets/enroll-vector.png";

const MoreCourses = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/eec1/d1c2/8e02832e4d498d9db2d38813d0bbbe3d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IXLgHC28q3BeJTOWdH9EWK3ymyT0tp0Zmj-sv4em~FC7wyTJ-gmES6ur4anvFf7q7DiSGc-AEyxca04iOz90uVwvM8IkqagYtQTrP2yeDSHXyrxHqDrSaNeda8Wl5iYDa1Olr4s1bkNse8-dAwdmN4ncazmEIMfqdTBVOmZYpTLtR2F~WEdsJhE9d3-go3H5DiRoAZL64EVo4SEdlll1xmaf400NjZEsJTXMrfK-g0osZjliJnvgXqXv1Pww-4qLMAC~yfqYoLtahBOx~GrcB1gVbgRLs3Fx2idvtCZoAC7fYHytBZV1GKhg6GRU4~ODILOySgSERoWNxtoA5R42AQ__")`,
          backgroundColor: "#003F7D",
          backgroundBlendMode: "multiply",
        }}
        className="min-h-[50vh] p-6 mx-auto w-5/6 bg-cover bg-center rounded-3xl flex flex-col lg:flex-row items-center
            justify-evenly font-poppins mb-12"
      >
        <div className="lg:w-1/3 text-center lg:text-start">
          <h2 className="text-white text-3xl font-semibold">
            Wanna check more about the course?
          </h2>
        </div>
        <div className="lg:w-1/3 text-white">
          <div className="flex justify-between w-full mb-2 gap-2">
            <button className="w-1/2 border-[#F98149] border-2 rounded-xl px-3 py-2 flex items-center gap-1 justify-center">
              <Image src={monitor} height={20} width={20}  alt="monitor vector" />
              <span>Demo</span>
            </button>
            <button className="w-1/2 border-[#F98149] border-2 rounded-xl px-3 py-2 flex items-center gap-1 justify-center">
              <Image src={enroll}  height={20} width={20} alt="enroll vector" />
              <span>Enroll Now</span>
            </button>
          </div>
          <div className="w-full">
            <button className="bg-[#F98149] px-5 py-3 rounded-xl flex items-center gap-1 w-full justify-center">
              <Image
                src={download}
                alt="download vector"
                height={24}
                width={24}
              />
              <span>Download the Curriculum</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MoreCourses;
