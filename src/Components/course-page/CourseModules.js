"use client";
import React, { useState } from "react";

const CourseModules = ({ courseModules }) => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-80 lg:w-3/4 mx-auto bg-white rounded-3xl shadow-md p-6 font-poppins z-50">
      <div>
      <h2 className="heading mb-10">Course Content</h2>
      <div className="divide-y divide-gray-200">
        {courseModules.map((each, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleModule(index)}
              className="flex justify-between items-center w-full focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-[#003F7D]">
                {each.serial} {each.moduleName}
              </h3>
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 11.293a1 1 0 011.414 0L10 14.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {openIndex === index && (
              <div className="overflow-hidden transition-max-height duration-300 ease-in-out">
                <p className="mt-4 text-gray-500 text-xs">{each.moduleContent}</p>
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CourseModules;
