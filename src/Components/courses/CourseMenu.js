"use client";
import { Fragment } from "react";
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
    ]
  return (
    <Fragment>
      <div className="p-6 flex justify-between items-start">
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
          <button>All</button>
          <button>Completed</button>
          <button>Coming Soon</button>
          <button>Archived</button>
        </div>
        <div className="w-1/5 border">
        <CoursesSort options={options}/>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseMenu;
