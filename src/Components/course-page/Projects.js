"use client"
import angular2 from "/src/Components/course-page/assets/angular2.png"
import Image from "next/image";
import { Fragment } from "react";

const Projects = ({courseProjects}) => {
  return (
    <Fragment>
        <div className="w-5/6 mx-auto mt-8 mb-12">
        <div className="flex items-center">
        <h2 className="heading w-3/4 lg:w-1/4">Angular JS Projects</h2>
        <div className="w-1/2 lg:w-full border border-[#FF8401] h-0 relative -top-[5px]"></div>
      </div>
      <div className="flex justify-center lg:justify-between flex-wrap items-center gap-2">  
        {
            courseProjects.map((each, index) => (
                    <div key={index} className="w-56">
                        <div className="font-poppins font-semibold text-[#003F7D] flex items-start gap-1 rounded-xl shadow-md h-20 p-6">
                            <span className="p-1 bg-orange-500 rounded-full w-6 flex justify-center"><Image src={angular2} alt=""/></span> 
                            <span>{each.title}</span>
                        </div>
                        <div></div>
                    </div>
                )
            )
        }
      </div>
        </div>
    </Fragment>
  );
};

export default Projects;
