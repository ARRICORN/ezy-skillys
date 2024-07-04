import Heading from "@/Components/courses/Heading";
import { Fragment } from "react";
import data from "/public/courses.json";
import CourseMenu from "@/Components/courses/CourseMenu";
import AllCourses from "@/Components/courses/AllCourses";

const page = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "{{admin_token}}");

    let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch("http://localhost:3000/api/courses/myCourses", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    return (
        <Fragment>
            <div className="font-poppins">
                <Heading />
                <CourseMenu />
                <AllCourses data={data} />
            </div>
        </Fragment>
    );
};

export default page;