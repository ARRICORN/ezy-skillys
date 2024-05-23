"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import downArrow from "/src/assets/ic_Dropdown.png";

const CoursesSort = ({ options, onChange }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  console.log(selected);

  return (
    <Fragment>
      <div className="w-full flex gap-10">
        <span>Sort by: </span>
        <span>{selected.name}</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={downArrow} alt="Down Arrow Button" />
        </button>
      </div>
      {isOpen && (
        <div className="w-full flex flex-col">
          {options
            .filter((each) => each !== selected)
            .map((each) => (
              <button key={each.id} onClick={() => setSelected(each)}>
                {each.name}
              </button>
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default CoursesSort;
