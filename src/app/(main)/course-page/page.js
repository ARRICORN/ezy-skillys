import Banner from "@/Components/course-page/Banner";
import CourseContent from "@/Components/course-page/CourseContent";
import { Fragment } from "react";

const page = () => {
    const courseObjectives = [
        {
            id: 1,
            text: `Utilizing AngularJS formats adequately`
        },
        {
            id: 2,
            text: `Questioning and adjusting information in various databases and getting to be plainly gifted with the API`
        },
        {
            id: 3,
            text: `Quickly making perplexing structures`
        },
        {
            id: 4,
            text: `Understanding two-way (proportional) information authoritative`
        },
        {
            id: 5,
            text: `Presenting route usefulness in web applications`
        },
        {
            id: 6,
            text: `Overseeing conditions with Injection frameworks`
        },
        {
            id: 7,
            text: `Securing web applications from dangers and pernicious clients`
        },
        {
            id: 8,
            text: `Building different AngularJS orders`
        },
        {
            id: 9,
            text: `Organizing the web application utilizing the vigorous index structure`
        },
        {
            id: 10,
            text: `Organizing, composing, and ultimately sending the application`
        },
    ]
    return (
        <Fragment>
            <Banner/>
            <CourseContent CourseContentObjectives={courseObjectives}/>
        </Fragment>
    );
};

export default page;