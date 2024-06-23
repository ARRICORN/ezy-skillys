"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import downArrow from "/src/assets/ic_Dropdown.png";

const CoursesSort = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="relative">
        <div className="w-full flex justify-between text-xs">
          <div className="flex items-center ml-2">
            <span>
              Sort by: <span className="font-semibold">{selected.name}</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border h-full"
          >
            <Image src={downArrow} alt="Down Arrow Button" className="w-4" />
          </button>
        </div>
        {isOpen && (
          <div className="w-full flex flex-col justify-start border text-xs text-start absolute bg-white rounded-b-md">
            {options
              .filter((each) => each !== selected)
              .map((each) => (
                <button
                  className="w-full  text-start pl-[3.5rem] py-1"
                  key={each.id}
                  onClick={() => setSelected(each)}
                >
                  {each.name}
                </button>
              ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CoursesSort;