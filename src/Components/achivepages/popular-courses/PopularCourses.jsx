import Link from "next/link";
import PopularTemplate from "./PopularTemplate";
import GET_GLOBAL_DATA from "@/utility/request_data/getAllCourses";
import courseCss from "./popular.module.css";

// === popular course component ===
const PopularCourses = async () => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses`;
  const courses = await GET_GLOBAL_DATA(url);

  let reduceCourse = [];
  if ((courses.success = true)) {
    reduceCourse = courses.data.slice(0, 8);
  }

  return (
    <div className="container bg-[#ffffff] py-8">
      {reduceCourse.length > 0 && (
        <div className="">
          {/* heading */}
          <h1 className="pb-4 text-center text-[50px] text-[#003F7D] font-bold">
            Popular <span className="text-[#F98149] pb-1">Courses</span>
          </h1>

          {/* === course data will render === */}
          <div className={`${courseCss.responsive}`}>
            {reduceCourse.length > 0 &&
              reduceCourse.map((item) => (
                <PopularTemplate course={item} key={item._id} />
              ))}
          </div>

          {/* === view all courses button === */}
          <div className="max-w-[50%] sm:max-w-[35%] md:w-[20%] text-center py-1 rounded-md text-white mx-auto bg-[#183153] md:py-2 mt-14">
            <Link href="/courses">
              <button className="text-center inline-block">
                View all courses
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularCourses;
