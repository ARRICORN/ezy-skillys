"use client";

import logo from "../../../assets/image1.png";
import men from "../../../assets/image22.png";
import job from "../../../assets/image23.png";
import it from "../../../assets/image28.png";
import it2 from "../../../assets/image29.png";
import notCoding from "../../../assets/image24.png";
import frontEnd from "../../../assets/image25.png";
import backend from "../../../assets/image27.png";
import fullstack from "../../../assets/image26.png";
import group1 from "../../../assets/Group1.png";
import group2 from "../../../assets/Group2.png";
import ornaments from "../../../assets/Ornament3.png";
import elipse from "../../../assets/Ellipse1.png";
import Image from "next/image";
import styles from "./courseSelector.module.css";
import { useEffect, useState } from "react";
import ItCourses from "@/Components/ItCourses/ItCourses";
import Upskill from "@/Components/Upskill/Upskill";
import Link from "next/link";
import NonItCourses from "@/Components/ItCourses/NonItCourses/nonItCourses";

const Course = () => {
  const [isLookingJob, setIsLookingJob] = useState(false);
  const [isGreet, setIsGreet] = useState(false);
  const [isDiscoverCourse, setIsDiscoverCourse] = useState(false);
  const [isItField, setIsItField] = useState(false);
  const [isCoding, setIsCoding] = useState(false);
  const [choosedPath, setChoosedPath] = useState({});
  const [isIt, setIsIt] = useState(false);
  const [isNonIt, setIsNonIt] = useState(false);
  const [isUpSkill, setIsUpSkill] = useState(false);

  const lookingJobClicked = () => {
    setIsIt(false);
    setIsNonIt(false);
    setIsLookingJob(true);
    setIsGreet(true);
    setIsUpSkill(false);
  };
  const nonItJobFind = () => {
    setIsNonIt(true);
    setIsLookingJob(false);
    setIsUpSkill(false);
  };
  const itJobFind = () => {
    setIsIt(true);
    setIsNonIt(false);
    setIsLookingJob(false);
    setIsUpSkill(false);
  };
  const upSkill = () => {
    setIsUpSkill(true);
    setIsNonIt(false);
    setIsIt(false);
    setIsLookingJob(false);
  };

  return (
    <div className="w-full px-6 relative">
      <div className="w-full lg:w-10/12 mx-auto my-8 px-5 relative">
        <Image src={group1} alt="" className="absolute top-32 left-[-20px] " />
        <Image
          src={ornaments}
          alt=""
          className="w-[30px] absolute top-80 right-[-50px] "
        />
        <Image
          src={ornaments}
          alt=""
          className="w-[30px] absolute left-[-20px] bottom-16  "
        />
        <Image
          src={group1}
          alt=""
          className="absolute top-32 left-[-20px] -z-10"
        />
        <Image
          src={group2}
          alt=""
          className="w-[30px] absolute bottom-1/3 right-[-56px] "
        />
        <Image
          src={elipse}
          alt=""
          className="w-36 absolute bottom-[-56px] right-[-2px] md:right-0 "
        />
        <div>
          <h1 className="text-[#003F7D] text-5xl pb-5 font-extrabold text-center">
            Choose The <span className="text-[#f98149]">Course</span>
          </h1>
          {/* main section */}
          <main className="bg-[#003F7D] rounded-xl p-6 lg:p-16 relative">
            <div className="grid grid-cols-8">
              <div className="col-span-8 md:col-span-5 relative">
                {/* Welcome part */}

                <div>
                  <div className="flex flex-col md:flex-row items-center">
                    <Image className="mr-1" src={logo} alt="" />
                    <div className="flex mt-3 md:0 ">
                      <div
                        className={styles.triangle}
                        class="triangle-left"
                      ></div>
                      <div className="bg-white px-5 w-full lg:w-[457px] py-3 rounded-lg rounded-tl-none">
                        <p className="font-semibold text-xl">
                          Welcome, Prasad. <br />
                          Let us know your current status?
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* icons */}
                  <div className="flex justify-center gap-2 lg:gap-7  ml-5 lg:ml-24 pt-5 ">
                    <div>
                      <button
                        onClick={lookingJobClicked}
                        className={`border-2 bg-white  border-white  p-5 rounded-3xl`}
                      >
                        <Image src={men} alt="job" />
                      </button>
                      <p className="text-white mt-1 text-center">
                        Looking for <br /> job
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={nonItJobFind}
                        className="border-2 border-white p-5 rounded-3xl"
                      >
                        <Image src={it} alt="job" />
                      </button>
                      {/* <button
                                                className="border-2 border-white p-5 rounded-3xl"><Image src={it} alt="job" /></button> */}

                      <p className="text-white mt-1 text-center">
                        IT to Non IT
                        <br />
                        Job Shift
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={upSkill}
                        className="border-2 border-white p-5 rounded-3xl"
                      >
                        <Image src={job} alt="job" />
                      </button>
                      <p className="text-white mt-1 text-center">Upskill It</p>
                    </div>
                  </div>
                </div>
                {isLookingJob && (
                  <>
                    {/* Great part */}

                    <div className={`${isGreet ? "block" : "hidden"}`}>
                      <div className="flex flex-col md:flex-row items-center    my-5 relative">
                        <Image className="mr-8 " src={logo} alt="" />

                        <div className="flex  relative ">
                          <div
                            className={`${styles.triangle} absolute triangle-left -ml-5  md:-ml-10 top-8 `}
                          ></div>

                          <div className=" w-full md:w-[470px] ml-5 md:ml-0">
                            <div className="bg-white px-4 mt-8 text-xl font-semibold  rounded-xl rounded-tl-none py-4">
                              <p className="bg-yellow-500">
                                Great ! Let me help you
                              </p>
                            </div>

                            <div className="flex  justify-between md:justify-start ">
                              <button
                                onClick={() => setIsDiscoverCourse(true)}
                                className="px-3 md:px-8 mt-4 py-4 rounded-lg text-white bg-[#f98149]"
                              >
                                Discover Course
                              </button>
                              <button className="px-4 md:px-8 ml-4 py-4 md:py-0 mt-4 rounded-lg text-white border-2">
                                <Link href="/course">Suggest Course</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* selecct field part */}
                    <div className={`${isDiscoverCourse ? "block" : "hidden"}`}>
                      <div className="flex flex-col md:flex-row gap-8 items-center  mb-5">
                        <Image className=" " src={logo} alt="" />
                        <div>
                          <div>
                            <div className="bg-white mt-0 md:mt-6  text-xl font-semibold pe-5 md:pe-28 rounded-xl py-4 ">
                              <p className="bg-yellow-500 px-5">
                                Select the field you’re interested
                              </p>
                            </div>

                            <div className="w-full flex px-3 md:px-0">
                              <button
                                onClick={() => setIsItField(true)}
                                className="px-4  md:px-16 mt-4 py-4 rounded-lg text-white bg-[#f98149]"
                              >
                                IT Field
                              </button>
                              <button
                                onClick={itJobFind}
                                className="px-4 md:px-12 ml-4 py-0 mt-4 md:py-3 rounded-lg text-white border-2"
                              >
                                Non IT Field
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* it field part */}
                    <div className={`${isItField ? "block" : "hidden"}`}>
                      <div className="mt-7 relative">
                        <div className="flex flex-col md:flex-row  justify-start gap-8 items-center">
                          <Image className=" " src={logo} alt="" />

                          <div className="ml-1 ">
                            <div
                              className={`${styles.triangle} absolute top-[126px] md:top-[7px] -ml-10`}
                            >
                              {" "}
                            </div>

                            <div className="bg-white px-8 w-full md:w-[460px] py-3 rounded-lg rounded-tl-none">
                              <p className="font-semibold text-xl">
                                IT Field, then what do you <br />
                                prefer now?
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* icons */}
                        <div className="flex justify-start ml-3 md:ml-32 gap-8 py-5">
                          <div>
                            <button
                              onClick={() => setIsCoding(true)}
                              className="border-2 bg-white border-white p-5 rounded-3xl"
                            >
                              <Image src={it2} alt="job" />
                            </button>
                            <p className="text-white mt-1 text-center">
                              Coding
                            </p>
                          </div>
                          <div>
                            <button className="border-2 border-white p-5 rounded-3xl">
                              <Image src={notCoding} alt="job" />
                            </button>
                            <p className="text-white mt-1 text-center">
                              Not Coding
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* choose coding part */}
                    <div className={`${isCoding ? "block" : "hidden"}`}>
                      <div className="flex gap-9 flex-col md:flex-row mt-3  items-center relative">
                        <Image className="mb-0 md:mb-32 " src={logo} alt="" />
                        <div className="">
                          <div
                            className={`${styles.triangle} absolute triangle-left -ml-10 top-[130px]  md:top-0`}
                          ></div>
                          <div className="bg-white px-5  py-3 w-full md:w-[457px] rounded-lg rounded-tl-none">
                            <p className="font-semibold text-xl">
                              Wow, you chose coding. <br />
                              What’s next??
                            </p>
                          </div>

                          {/* icons */}
                          <div className="flex justify-start ml-2 gap-5 md:gap-11 pt-5 ">
                            <div>
                              <button
                                onClick={() =>
                                  setChoosedPath({
                                    status: true,
                                    course: "front-end",
                                  })
                                }
                                className="border-2 border-white bg-white p-5 rounded-3xl"
                              >
                                <Image src={frontEnd} alt="job" />
                              </button>
                              <p className="text-white mt-1 text-center">
                                Front-End
                              </p>
                            </div>
                            <div>
                              <button className="border-2 border-white p-5 rounded-3xl">
                                <Image src={backend} alt="job" />
                              </button>
                              <p className="text-white mt-1 text-center">
                                Backend
                              </p>
                            </div>
                            <div>
                              <button className="border-2 border-white p-5 rounded-3xl">
                                <Image src={fullstack} alt="job" />
                              </button>
                              <p className="text-white mt-1 text-center">
                                Full Stack
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* click next to part */}
                    <div
                      className={`${choosedPath.status ? "block" : "hidden"}`}
                    >
                      <div className="relative">
                        <div className="flex gap-9 flex-col md:flex-row my-5  items-center relative">
                          <Image className="mb-0 md:mb-4 " src={logo} alt="" />

                          <div>
                            <div
                              className={`${styles.triangle} absolute triangle-left -ml-10 md:-ml-10 top-18 md:top-0`}
                            ></div>
                            <div>
                              <div className="bg-white  px-4 text-xl font-semibold pe-42 rounded-xl w-full rounded-tl-none py-4">
                                <p className="bg-yellow-500 w-full md:w-[440px]">
                                  Excellent! Click next to get into
                                </p>
                              </div>

                              <Link href="/ItCourses/categories=it&categories=coding&categories=forntend">
                                <button className="px-6 mt-4 py-2 rounded-lg text-white bg-[#f98149]">
                                  Next
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* if select  it */}
                {/* {
                                    isIt && <ItCourses></ItCourses>
                                } */}
                {/* if select  nonit */}
                {isNonIt && <NonItCourses></NonItCourses>}

                {/* if select Upskill */}
                {isUpSkill && <Upskill></Upskill>}
              </div>

              <div className="col-span-8 md:col-span-3"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Course;
