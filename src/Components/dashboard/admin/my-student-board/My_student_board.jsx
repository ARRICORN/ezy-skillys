"use client"

;
import Table_body from "./Table_body";
import { authOptions } from "@/Components/Utils/AuthOptions";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const My_student_board = () => {
  
const[student_data,setStudentData] = useState([])

  const session = useSession();

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/myStudents`;



  const fetchStudentData = async () => {
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
      setStudentData(res);
    } catch (error) {
      console.error("Error fetching studentData:", error);
    }
  };
  useEffect(() => {
    if (session?.data?.token) {
      fetchStudentData();
    }
  }, [session]);
  return (
    <section className="">
      {/* === Table body === */}
      {student_data?.data?.length > 0 ? (
        <Table_body studentData={student_data.data} />
      ) : (
        <h1 className="mt-5 text-center text-orange-500">
          Student information was not found!
        </h1>
      )}
    </section>
  );
};

export default My_student_board;
