import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import Course_template from "./Course_template";
import { getServerSession } from "next-auth";
import { authOptions } from "@/Components/Utils/AuthOptions";

// get all course for admin url
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses`;

const My_courses_main = async () => {
  const session = await getServerSession(authOptions);
  const userCourse = await API_REQUEST_BY_URL(url, session.token);

  // data sorting for last-in fast-out
  let userSort = [];
  userSort = userCourse?.data?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div>
      {/* course length */}
      <div>
        <h1 className="block text-xl p-2">
          Total course is :
          <span className="text-orange-500 px-1 font-bold inline-block">
            {userCourse?.data?.length || "0"}
          </span>
          <hr className="block py-1" />
        </h1>
      </div>

      {/* === course template === */}
      {userSort?.length > 0 ? (
        <div className="h-[80vh] no-scrollbar overflow-auto">
          <Course_template courses={userSort} />
        </div>
      ) : (
        <h1 className="mt-5 text-center text-orange-500">
          Course information was not found!
        </h1>
      )}
    </div>
  );
};

export default My_courses_main;
