import { Fragment } from "react";
import "../../app/(main)/course-page/coursePage.css";
import CourseModules from "./CourseModules";
import Image from "next/image";
import tick from "/src/assets/tick1.png";
import beads from "/src/assets/beads1.png";
import ellipse from "/src/assets/ellipse3.png";

const CourseContent = ({ courseContentObjectives, courseModules }) => {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row p-6 justify-between lg:w-5/6 mx-auto font-montserrat font-semibold mb-12">
        <div className="p-6 lg:w-1/2">
          <div className="mb-6 lg:mb-10">
            <h2 className="heading">Objectives</h2>
            <p>
              Angular JS is a JavaScript-based open-source front-end web
              framework for developing single-page applications. It was
              maintained mainly by Google and a community of individuals and
              corporations.
            </p>
          </div>
          <div>
            <h2 className="heading">About This Course</h2>

            {courseContentObjectives.map((each) => (
              <div key={each.id} className="flex items-start gap-2 mb-2">
                <span className="w-[5%]"><Image src={tick} alt="Check mark" className="w-4 h-4"/></span>

                <span className="w-[95%]">{each.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 flex relative">
          <Image src={ellipse} alt="ellipse" className="absolute left-0 -bottom-16 w-32"/>
          <CourseModules courseModules={courseModules} />
          <Image src={beads} alt="ellipse" className="absolute right-3 top-12 w-16"/>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseContent;
