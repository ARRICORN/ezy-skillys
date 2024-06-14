import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import Course_template from "./Course_template";

// get all course for admin url
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses`;

const My_courses_main = async () => {
  const userCourse = await API_REQUEST_BY_URL(url);

  return (
    <div>
      {/* course length */}
      <div>
        <h1 className="block text-xl">
          Total course is :
          <span className="text-orange-500 px-1 font-bold inline-block">
            {userCourse?.data?.length || "0"}
          </span>
          <hr className="block py-1" />
        </h1>
      </div>

      {/* === course template === */}
      <div className="h-[80vh] no-scrollbar overflow-auto">
        {userCourse?.data ? (
          <Course_template courses={userCourse?.data} />
        ) : (
          "Courses is not found"
        )}
      </div>
    </div>
  );
};

export default My_courses_main;
