import Image from "next/image";
import { Fragment } from "react";
import monitor from "/src/assets/monitor-vector.png";
import pin from "/src/assets/enroll-vector.png";
import download from "/src/assets/download-vector.png";

const AllCourses = ({ data, setModalStatus, setPdfLink }) => {
  return (
    <Fragment>
      <div className="mx-auto">
        <div className="grid grid-cols-4 justify-center py-12 lg:gap-x-10 px-6 lg:gap-y-32 md:gap-12">
          {data?.data?.map((each) => (
            <div
              key={each._id}
              className="bg-[#003F7D] h-[300px] w-full flex flex-col rounded-2xl items-center p-4 relative box-border cols-span-1"
            >
              <div className="w-full h-full object-cover rounded-xl">
                <Image
                  src={each.image}
                  alt={`${each.title} image`}
                  width={120}
                  height={120}
                  className="h-[140px] w-full rounded-xl"
                />
              </div>
              <div className="bg-white text-center py-4 px-2 rounded-2xl mt-4 box-border flex flex-col w-full">
                <h2 className="mb-2 font-semibold text-xl">{each.title}</h2>
                <p className="text-sm text-center word-wrap mb-4">
                  {each.desc.length > 100
                    ? `${each.desc.slice(0, 100)}...`
                    : each.desc}
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
                  className="px-3 py-2 text-white text-xs bg-[#F98149] items-center gap-1 rounded-3xl flex justify-center w-full mb-[-30px] mt-3"
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
