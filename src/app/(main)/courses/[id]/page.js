"use client";
import Image from "next/image";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "/axiosConfig";
import bgImage from "@/assets/single_course_page_hero_bg.png";
import wannaCheckBgImage from "@/assets/wanna_check_more_bg.png";
import download from "@/assets/download-vector.png";
import monitor from "@/assets/monitor-vector.png";
import enroll from "@/assets/enroll-vector.png";
import Link from "next/link";
import Loading from "@/Components/Ui/Loading";
import Review from "@/Components/achivepages/review/Review";


const CourseDetails = ({ params }) => {
  const id = params?.id;
  // fetch single course function
  const fetchCourse = async () => {
    try {
      const { data } = await axiosConfig.get(`/courses/getCourse/${id}`);
      return data;
    } catch (error) {
      console.log("error from course details page", error);
    }
  };

  //fetches all reviews for the course
  const fetchCourseReviews = async () => {
    try {
      const { data } = await axiosConfig.get(
        `/reviews/all-reviews?course=${id}`
      );
      return data;
    } catch (error) {
      console.log("error from course details page", error);
    }
  };

  // fetches single course
  const {
    data: courseData,
    isLoading: isCourseDataLoading,
    isError: isCourseDataError,
    isSuccess: isCourseDataSuccess,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: fetchCourse,
  });

  //fetches all reviews
  const {
    data: reviewsData,
    isLoading: isReviewsDataLoading,
    isError: isReviewsDataError,
    isSuccess: isReviewsDataSuccess,
  } = useQuery({
    queryKey: ["reviews", id],
    queryFn: fetchCourseReviews,
  });

  return (
    <>
      {isCourseDataLoading && <Loading />}
      {isCourseDataSuccess && (
        <div className="font-poppins pt-5 px-6">
          {/* background image */}
          <div className="absolute -top-[40px] max-h-[835px] left-0 -z-20 w-full h-screen bg-primary rounded-b-[30px] md:rounded-b-[60px] lg:rounded-b-[100px]">
            <Image
              src={bgImage}
              alt="background blue vector image"
              width={1980}
              height={500}
              className="w-full h-full object-cover rounded-b-[30px] md:rounded-b-[60px] lg:rounded-b-[100px]"
            />
          </div>
          {/* course image, course title and description container */}
          <div className="h-screen max-h-[835px]">
            <div className="w-full -mt-[25px] md:-mt-[50px] xl:mt-0 h-4/5 max-h-[835px] flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-0 md:justify-around ">
              {/* course image */}
              <div className="">
                <Image
                  src={courseData?.data?.image}
                  alt={courseData?.data?.title}
                  width={300}
                  height={300}
                  className="w-[150px] md:w-[200px] xl:w-[300px] h-[150px] md:h-[200px] xl:h-[300px]"
                />
              </div>
              {/* course title */}
              <div className="px-10 md:px-0 md:w-1/2">
                <h3 className="text-2xl md:text-[40px] lg:text-[60px] xl:text-[104px] font-bold text-secondary">
                  {courseData?.data?.title}
                </h3>
                {/* course description */}
                <p className="lg:text-xl xl:text-2xl text-white pt-2 md:pt-4 lg:pt-6 xl:pt-16">
                  {courseData?.data?.desc}
                </p>
              </div>
            </div>
          </div>
          {/* mentors details container */}
          <div className="-mt-20 md:-mt-10 mb-4">
            <h5 className="text-xl md:text-3xl xl:text-[44px] text-secondary font-semibold capitalize">
              Mentor Details:
            </h5>
            <p className="md:text-xl xl:text-[28px] pt-3 xl:pt-6">
              <span className="text-primary font-semibold">Email:</span>{" "}
              {courseData?.data?.addedBy}
            </p>
          </div>
          {/* course categories container */}
          <div className="my-5 md:my-10 lg:my-16">
            <h5 className="pb-1 md:pb-3 lg:pb-5 flex items-center justify-start text-xl md:text-3xl xl:text-[44px] text-secondary font-semibold capitalize">
              categories
              <span className="w-full h-[4px] bg-secondary mx-5"></span>
            </h5>
            <div className="flex flex-wrap gap-[41px] justify-start items-start mt-4">
              {courseData?.data?.categories?.map((category) => (
                <div
                  key={category}
                  className="py-[8px] md:py-[20px] lg:py-[28px] xl:py-[34px] px-[12px] md:px-[28px] lg:px-[32px] xl:px-[40px] rounded-lg md:rounded-[18px] lg:rounded-[27px] bg-white drop-shadow-lg"
                >
                  <p className="md:text-xl xl:text-[28px] text-primary font-semibold uppercase text-nowrap">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* course enroll, curriculum download and demo container */}
          <div className="relative my-16 bg-primary py-[40px] lg:py-[64px] px-[16px] lg:px-[40px] xl:px-[100px] rounded-[24px] md:rounded-[46px] flex flex-col md:flex-row items-center justify-center gap-[16px] lg:gap-[32px] bg-opacity-90">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <Image
                src={wannaCheckBgImage}
                alt="wanna check more bg image"
                width={1000}
                height={300}
                className="object-cover w-full h-full rounded-[46px]"
              />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/2">
              <p className="text-white text-[30px] lg:leading-[56px] lg:text-[44px] xl:text-[56px] text-center md:text-left font-semibold">
                Wanna check more about the course?
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 grid grid-cols-2 gap-x-[12px] lg:gap-x-[35px] gap-y-[16px] lg:gap-y-[29px] text-white">
              {/* demo */}
              <Link
                href={"#"}
                className="border-[#F98149] border-2 rounded-xl px-3 py-2 flex items-center gap-1 justify-center"
              >
                <Image
                  src={monitor}
                  height={20}
                  width={20}
                  alt="monitor vector"
                />
                <span>Demo</span>
              </Link>
              {/* enroll now */}
              <Link
                href={`/payment/${courseData?.data?._id}`}
                className="border-[#F98149] border-2 rounded-xl px-3 py-2 flex flex-nowrap items-center gap-1 justify-center"
              >
                <Image
                  src={enroll}
                  height={20}
                  width={20}
                  alt="enroll vector"
                />
                <span className="text-nowrap">Enroll Now</span>
              </Link>
              {/* download curriculum */}
              <Link
                href={"#"}
                className="col-span-2 bg-[#F98149] px-5 py-3 rounded-xl flex flex-nowrap items-center gap-1 w-full justify-center"
              >
                <Image
                  src={download}
                  alt="download vector"
                  height={24}
                  width={24}
                />
                <span className="text-nowrap">Download the Curriculum</span>
              </Link>
            </div>
          </div>
          {/* reviews */}
          {reviewsData?.data && <Review reviewsData={reviewsData?.data} />}
        </div>
      )}
    </>
  );
};

export default CourseDetails;
