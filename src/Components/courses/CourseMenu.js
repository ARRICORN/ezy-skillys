"use client"
import { Fragment } from "react";

const CourseMenu = () => {
    return (
        <Fragment>
            <div className="p-6">
            <div>
                <input type="search" name="" id="" className="bg-gray-200 p-2 outline-none" onKeyDown={(event) => {
                    if(event.key === "Enter"){
                        alert(event.target.value)
                    }
                }}/>
            </div>
            <div></div>
            <div></div>
            </div>
        </Fragment>
    );
};

export default CourseMenu;