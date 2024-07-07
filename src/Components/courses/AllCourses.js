import Image from "next/image";
import { Fragment } from "react";
import monitor from "/src/assets/monitor-vector.png";
import pin from "/src/assets/enroll-vector.png";
import download from "/src/assets/download-vector.png";
import Link from "next/link";
import StyCourses from "./courses.module.css";

const AllCourses = ({ data, setModalStatus, setPdfLink }) => {
  return (
    <Fragment>
      <div className="mx-auto">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center py-12 gap-y-28 lg:gap-x-10 px-6 lg:gap-y-32 sm:gap-x-8"> */}
        <div className={`${StyCourses.responsive}`}>
          {data?.data?.length > 0 ? (
            data?.data?.map((each) => (
              <div
                key={each._id}
                className="bg-[#003F7D] flex flex-col rounded-2xl items-center p-4 box-border cols-span-1"
              >
                <div className="overflow-hidden h-[18vh]">
                  <Image
                    src={each.image}
                    alt={`${each.title} image`}
                    width={100}
                    height={100}
                    className="mx-auto rounded-xl aspect-auto"
                  />
                  {/* </Link> */}
                </div>

                <div className="bg-white text-center py-4 px-2 rounded-2xl mt-4 box-border flex flex-col w-full">
                  {/* <Link href={`/courses/${each._id}`}> */}
                  <h2 className="mb-2 font-semibold text-xl">{each.title}</h2>
                  <p className="text-sm text-center word-wrap mb-4 block h-[70px]">
                    {each.desc.length > 100
                      ? `${each.desc.slice(0, 100)}...`
                      : each.desc}
                  </p>
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/courses/${each._id}`}
                      className="px-3 py-2 w-full flex items-center justify-center text-[10px] border-primary rounded-xl border text-white text-base font-semibold mx-5 gap-1 mt-4 bg-primary hover:bg-opacity-95"
                    >
                      {/* <Image className="w-3" src={monitor} alt="Monitor" />{" "} */}
                      <span>See Details</span>
                    </Link>
                    {/* <Link
                        href={`/payment/${each._id}`}
                        className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center"
                      >
                        <Image className="w-3" src={pin} alt="Pin" />
                        <span>Enroll Now</span>
                      </Link> */}
                  </div>
                  {/* <button
                      onClick={() => {
                        setPdfLink(
                          "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf"
                        );
                        setModalStatus(true);
                      }}
                      className="px-3 py-2 text-white text-xs bg-[#F98149] items-center gap-1 rounded-3xl flex justify-center w-full mb-[-30px] mt-3"
                    >
                      <Image className="w-4" src={download} alt="Download" />
                      <span>Download Curriculum</span>
                    </button> */}
                  {/* </Link> */}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 h-[300px] flex items-center justify-center">
              <p className="text-2xl font-bold">No Courses Found</p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default AllCourses;
