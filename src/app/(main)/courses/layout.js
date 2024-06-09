import Heading from "@/Components/courses/Heading";
import { Fragment } from "react";
import data from "/public/courses.json"
import CourseMenu from "@/Components/courses/CourseMenu";
import AllCourses from "@/Components/courses/AllCourses";

const layout = () => {

    return (
        <Fragment>
            <div className="font-poppins">
            <Heading/>
            <CourseMenu/>
            <AllCourses data={data}/>
            </div>
        </Fragment>
    );
};

export default layout;