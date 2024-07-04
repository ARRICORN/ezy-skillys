import Image from "next/image";
import { Fragment } from "react";
import monitor from "/src/assets/monitor-vector.png";
import pin from "/src/assets/enroll-vector.png";
<<<<<<< HEAD
import download from "/src/assets/download-vector.png"
=======
import download from "/src/assets/download-vector.png";
>>>>>>> 8a52d8f6f1af7cb8d993e7515a68bbf5a50bc2a9
import Link from "next/link";

const AllCourses = ({ data, setModalStatus, setPdfLink }) => {
  return (
    <Fragment>
<<<<<<< HEAD
      <div className="mx-auto bg-[#F3F3F3]">
        <div className="flex flex-wrap justify-center  min-h-screen py-12 gap-24 md:gap-12">
          {data.map((each) => (
            <div
              key={each._id}
              className="bg-[#003F7D] h-80 w-[16rem] flex flex-col rounded-2xl items-center p-2 pt-12 relative box-border"
            >
              <Link href={`/courses/${each._id}`}>
                <div>
=======
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center py-12 gap-y-28 lg:gap-x-10 px-6 lg:gap-y-32 sm:gap-x-8">
          {data?.data?.length > 0 ? (
            data?.data?.map((each) => (
              <div
                key={each._id}
                className="bg-[#003F7D] h-[300px] w-full flex flex-col rounded-2xl items-center p-4 box-border cols-span-1"
              >
                <div className="w-full h-full object-cover rounded-xl">
>>>>>>> 8a52d8f6f1af7cb8d993e7515a68bbf5a50bc2a9
                  <Image
                    src={each.image}
                    alt={`${each.title} image`}
                    width={120}
                    height={120}
<<<<<<< HEAD
                    className="h-20 w-full"
                  />
                </div>
                <div className="relative top-12 bg-white text-center py-4 px-2 rounded-2xl mt-4 box-border flex flex-col">
                  <h2 className="mb-2 font-semibold text-xl">{each.title}</h2>
                  <p className="text-[10.5px] font-medium mb-4 h-5/6">{each.desc}</p>
=======
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
>>>>>>> 8a52d8f6f1af7cb8d993e7515a68bbf5a50bc2a9
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center">
                      <Image className="w-3" src={monitor} alt="Monitor" />{" "}
                      <span>Live Demo</span>
                    </button>
<<<<<<< HEAD
                    <button className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center">
                      <Image className="w-3" src={pin} alt="Pin" />
                      <span>Enroll Now</span>
                    </button>
                  </div>
                  <button className="px-3 py-2 text-white text-xs bg-[#F98149] items-center gap-1 rounded-3xl flex justify-center w-3/4 absolute -bottom-7
              mx-auto left-0 right-0">
=======
                    <Link
                      href={`/payment/${each._id}`}
                      className="px-3 py-2 text-[10px] border-[#F98149] rounded-xl border flex gap-1 items-center"
                    >
                      <Image className="w-3" src={pin} alt="Pin" />
                      <span>Enroll Now</span>
                    </Link>
                  </div>
                  <button
                    onClick={() => {
                      setPdfLink(
                        "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_PDF.pdf"
                      );
                      setModalStatus(true);
                    }}
                    className="px-3 py-2 text-white text-xs bg-[#F98149] items-center gap-1 rounded-3xl flex justify-center w-full mb-[-30px] mt-3"
                  >
>>>>>>> 8a52d8f6f1af7cb8d993e7515a68bbf5a50bc2a9
                    <Image className="w-4" src={download} alt="Download" />
                    <span>Download Curriculum</span>
                  </button>
                </div>
<<<<<<< HEAD
              </Link>
            </div>
          ))}
=======
              </div>
            ))
          ) : (
            <div className="col-span-4 h-[300px] flex items-center justify-center">
              <p className="text-2xl font-bold">No Courses Found</p>
            </div>
          )}
>>>>>>> 8a52d8f6f1af7cb8d993e7515a68bbf5a50bc2a9
        </div>
      </div>
    </Fragment>
  );
};

export default AllCourses;
