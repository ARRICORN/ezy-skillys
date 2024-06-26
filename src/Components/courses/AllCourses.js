import Image from "next/image";
import { Fragment } from "react";
import monitor from "/src/assets/monitor-vector.png";
import pin from "/src/assets/enroll-vector.png";
import download from "/src/assets/download-vector.png";

const AllCourses = ({ data, setModalStatus, setPdfLink }) => {
  return (
    <Fragment>
      <div className="mx-auto">
        <div className="flex flex-wrap justify-center py-12 gap-24 md:gap-12">
          {data?.data?.map((each) => (
            <div
              key={each._id}
              className="bg-[#003F7D] h-80 w-[16rem] flex flex-col rounded-2xl items-center p-2 pt-12 relative box-border"
            >
              <div>
                <Image
                  src={each.image}
                  alt={`${each.title} image`}
                  width={120}
                  height={120}
                  className="h-20 w-full"
                />
              </div>
              <div className="relative top-12 bg-white text-center py-4 px-2 rounded-2xl mt-4 box-border h-5/6 flex flex-col">
                <h2 className="mb-2 font-semibold text-xl">{each.title}</h2>
                <p className="text-[10.5px] font-medium mb-4 h-5/6">
                  {each.desc}
                </p>
                <div className="flex justify-center gap-2">
                  <button className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center">
                    <Image className="w-3" src={monitor} alt="Monitor" />{" "}
                    <span>Live Demo</span>
                  </button>
                  <button className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center">
                    <Image className="w-3" src={pin} alt="Pin" />
                    <span>Enroll Now</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setPdfLink(each.curriculum);
                    setModalStatus(true);
                  }}
                  className="px-3 py-2 text-white text-xs bg-[#F98149] items-center gap-1 rounded-3xl flex justify-center w-3/4 absolute -bottom-7
              mx-auto left-0 right-0"
                >
                  <Image className="w-4" src={download} alt="Download" />
                  <span>Download Curriculum</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AllCourses;
