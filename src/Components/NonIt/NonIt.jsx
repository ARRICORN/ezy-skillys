import Image from 'next/image';
import React from 'react';
import business from "../../assets/bussiness.jpg"
import copywriter from "../../assets/copy-writer-US.png"
import manager from "../../assets/project.png"
const NonIt = () => {
    const nonItCourse = [
        {
            id: 1,
            img: business,
            name: "Bussiness"
        },
        {
            id: 2,
            img: copywriter,
            name: "Copywriter"
        },
        {
            id: 3,
            img: manager,
            name: "Project Manager"
        }

    ]
    return (
        <div className='px-4'>
            <div className='grid grid-cols-3 gap-7 py-7'>
                {
                    nonItCourse.map((course) => {
                        return <div key={course.id}>
                            <Image src={course?.img} className='w-64 rounded-lg' width="400" height="200" alt="" />
                            <h4 className='text-white'>{course.name}</h4>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default NonIt;