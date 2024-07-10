"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ItCourses = () => {
  const [itCourses, setItCourses] = useState([]);

  const searchParams = useSearchParams();

  const categories = searchParams.getAll("categories");
  const apiUrl = `http://localhost:3000/api/courses?${categories
    .map((cat) => `categories=${cat}`)
    .join("&")}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setItCourses(data.data);
        if (data.success) {
          return Swal.fire({
            text: data.message,
            icon: "success",
          });
        }
      });
  }, [apiUrl]);

  return (
    <div className="mx-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {itCourses?.map((course) => {
          return (
            <div
              className="border border-primary p-7 pb-0 rounded-md"
              key={course._id}
            >
              <div className="flex justify-center">
                <Image
                  style={{ width: "200px", height: "150px" }}
                  src={course?.image}
                  className="rounded-lg"
                  width="300"
                  height="200"
                  alt={course.title}
                />
              </div>
              <div className="my-3">
                <h4 className="text-center font-bold">{course.title}</h4>
                <p className="text-primary">{course.desc.slice(0, 70)}</p>
                <p className="font-bold">Price: {course.price}$</p>
                <button className="px-3 py-1 bg-secondary rounded-lg text-white my-3 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItCourses;
