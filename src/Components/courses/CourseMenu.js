"use client";
import { Fragment, useState } from "react";
import CoursesSort from "./CoursesSort";

const CourseMenu = () => {
  const options = [
    {
      id: 1,
      name: "Popular",
    },
    {
      id: 2,
      name: "Newest",
    },
    {
      id: 3,
      name: "Oldest",
    },
  ];

  const coursesPresentArray = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Completed",
    },
    {
      id: 3,
      name: "Coming Soon",
    },
    {
      id: 4,
      name: "Archived",
    },
  ];

  const [coursesPresent, setCoursesPresent] = useState(coursesPresentArray[0]);

  return (
    <Fragment>
      <div className="p-6 flex justify-between items-start text-[#44444F]">
        <div className="w-1/5">
          <input
            type="search"
            name=""
            id=""
            className="bg-gray-200 py-2 px-3 outline-none rounded-md text-xs w-full"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                alert(event.target.value);
              }
            }}
            placeholder={"Search the Course Here"}
          />
        </div>
        <div className="flex justify-between w-1/3 mx-auto">
          {coursesPresentArray.map((each) => (
            <button
              key={each.id}
              className={
                coursesPresent.id === each.id ? "text-orange-500 font-semibold border-b-2 border-orange-500 h-full" : "text-black h-full"
              }
              onClick={() => {
                setCoursesPresent(each);
              }}
            >
              {each.name}
            </button>
          ))}
        </div>
        <div className="w-1/5 border rounded-md text-sm">
          <CoursesSort options={options} />
        </div>
      </div>
    </Fragment>
  );
};

export default CourseMenu;
