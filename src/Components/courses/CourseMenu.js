"use client"
import { Fragment } from "react";

const CourseMenu = () => {
    return (
        <Fragment>
            <div className="p-6 flex">
            <div className="w-1/3">
                <input type="search" name="" id="" className="bg-gray-200 py-2 px-3 outline-none rounded-md text-xs w-full" onKeyDown={(event) => {
                    if(event.key === "Enter"){
                        alert(event.target.value)
                    }
                }}
                placeholder={"Search the Course Here"}/>
            </div>
            <div></div>
            <div></div>
            </div>
        </Fragment>
    );
};

export default CourseMenu;