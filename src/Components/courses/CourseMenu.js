"use client";
import { Fragment, useState } from "react";
import CoursesSort from "./CoursesSort";
import Search from "/src/assets/ic_Plus.png";
import Image from "next/image";

const CourseMenu = ({ setSort, setSearch, setCourseStatus }) => {
  const options = [
    // {
    //   id: 1,
    //   name: "Popular",
    //   value: "",
    // },
    {
      id: 2,
      name: "Newest",
      value: "ascending",
    },
    {
      id: 3,
      name: "Oldest",
      value: "descending",
    },
    // {
    //   id: 4,
    //   name: "Price low to high",
    //   value: "price",
    // },
    // {
    //   id: 5,
    //   name: "Price high to low",
    //   value: "-price",
    // },
  ];

  const coursesPresentArray = [
    {
      id: 1,
      name: "all",
      courseStatus: "all",
    },
    {
      id: 2,
      name: "opened",
      courseStatus: "opened",
    },
    {
      id: 3,
      name: "coming soon",
      courseStatus: "comingSoon",
    },
    {
      id: 4,
      name: "archived",
      courseStatus: "archived",
    },
  ];

  const [coursesPresent, setCoursesPresent] = useState(coursesPresentArray[0]);

  return (
    <Fragment>
      <div className="p-6 flex flex-wrap md:flex-nowrap justify-between items-start text-[#44444F] h-max">
        {/* search functionality */}
        <div className="order-1 max-w-[250px] xl:w-1/5 bg-[#F1F1F5] py-2 px-3 rounded-md flex gap-5">
          <Image src={Search} alt="Search icon" className="w-5" />
          <input
            type="search"
            name=""
            id=""
            className="bg-[#F1F1F5] outline-none text-xs w-full"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder={"Search the Course Here"}
          />
        </div>
        <div className="order-3 md:order-2 flex justify-between max-w-[400px] w-full mt-4 md:mt-0 xl:w-1/3 mx-auto">
          {coursesPresentArray.map((each) => (
            <button
              key={each.id}
              className={`capitalize ${
                coursesPresent.id === each.id
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 h-full"
                  : "text-black h-full"
              }`}
              onClick={() => {
                setCoursesPresent(each);
                setCourseStatus(each.courseStatus);
              }}
            >
              {each.name}
            </button>
          ))}
        </div>
        <div className="order-2 md:order-3 max-w-[250px] xl:w-1/5 border rounded-md text-sm">
          <CoursesSort setSort={setSort} options={options} />
        </div>
      </div>
    </Fragment>
  );
};

export default CourseMenu;
