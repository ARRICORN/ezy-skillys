import Banner from "@/Components/course-page/Banner";
import CourseContent from "@/Components/course-page/CourseContent";
import { Fragment } from "react";

const page = () => {
    return (
        <Fragment>
            <Banner/>
            <CourseContent/>
        </Fragment>
    );
};

export default page;