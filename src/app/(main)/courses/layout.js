import Heading from "@/Components/courses/Heading";
import { Fragment } from "react";
import data from "/public/courses.json"
import CourseMenu from "@/Components/courses/CourseMenu";

const layout = () => {

    return (
        <Fragment>
            <div className="font-poppins">
            <Heading/>
            <CourseMenu/>
            </div>
        </Fragment>
    );
};

export default layout;