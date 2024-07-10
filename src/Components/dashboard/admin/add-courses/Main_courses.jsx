
"use client"

import Form_component from "./Form_component";
import style from "./index.module.css";

const Main_courses =  () => {
  return (
    <div className={`${style.bg_image}`}>
      <div className="h-[90vh] overflow-scroll no-scrollbar py-5 ">
        <Form_component />
      </div>
    </div>
  );
};

export default Main_courses;
