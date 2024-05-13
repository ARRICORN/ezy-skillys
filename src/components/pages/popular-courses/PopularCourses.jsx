import React from "react";
import PopularTemplate from "./PopularTemplate";
import style from "./popular.module.css";
import courseData from "../../../utility/temp/course_data.json";

const PopularCourses = () => {
  return (
    <div className="container bg-[#ffffff]">
      <div className="">
        {/* heading */}
        <h1 className="py-[10px] text-center text-[50px] text-[#003F7D] font-bold">
          Popular <span className="text-[#F98149] pb-1">Courses</span>
        </h1>

        {/* === course data will render === */}
        <div className={`${style.responsive}`}>
          {courseData &&
            courseData.map((item, index) => (
              <PopularTemplate item={item} key={index} />
            ))}
        </div>

        {/* === view all courses button === */}
        <div className="max-w-[35%] md:w-[20%] text-center py-1 rounded-md text-white mx-auto bg-[#183153] md:py-2">
          <button className="text-center inline-block">View all courses</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
