"use client"


import Course_template from "./Course_template";

import { authOptions } from "@/Components/Utils/AuthOptions";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// get all course for admin url
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses`;

// === my course component here ===
const My_courses_main =  () => {
  const session = useSession();
  const [userCourse,setUserCourse]=useState([])

  const fetchUserCourse = async () => {
    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization: session?.data?.token,
          "Content-type": "Application/json",
        },
      });
      console.log(response,"response");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      console.log(res,"res")
      setUserCourse(res);
    } catch (error) {
      console.error("Error fetching UserCourse:", error);
    }
  };

  useEffect(() => {
    if (session?.data?.token) {
      fetchUserCourse();
    }
  }, [session]);

  console.log(session, "session from user purchase");
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
