import PopularTemplate from "./PopularTemplate";
import styles from "./popular.module.css";
// import courseData from "../../../utility/temp/course_data.json";
import get_all_courses from "@/utility/request_data/getAllCourses";

const PopularCourses = async () => {
  const courseData = await get_all_courses();

  return (
    <div className="container bg-[#ffffff] py-8">
      <div className="">
        {/* heading */}
        <h1 className="py-[10px] text-center text-[50px] text-[#003F7D] font-bold">
          Popular <span className="text-[#F98149] pb-1">Courses</span>
        </h1>

        {/* === course data will render === */}
        <div className={`${styles.responsive} py-5`}>
          {courseData.data.length > 0 &&
            courseData.data.map((item) => (
              <PopularTemplate item={item} key={item._id} />
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
