import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
const ItCourses = () => {
    const [itCourses, setItCourses] = useState([])
    console.log(itCourses);
    useEffect(() => {

        fetch('http://localhost:3000/api/courses?categories=it&categories=coding&categories=forntend')
            // fetch('http://localhost:3000/api/courses')
            .then((res) => res.json())
            .then((data) => {
                setItCourses(data.data)
                if (data.success) {
                    return Swal.fire({
                        text: data.message,
                        icon: "success"
                    });
                }
            })
    }, [])


    return (
        <div className='px-4'>

            <div className='grid grid-cols-3  gap-7  py-7'>
                {
                    itCourses?.map((course) => {
                        return <div className='border border-white p-7 rounded-md' key={course._id}>

                            <Image src={course?.image} className='rounded-lg' width="200" height="150" alt="" />

                            <div className='my-3'>
                                <h4 className=' text-center'>{course.title}</h4>
                                <p>{course.desc}</p>
                                <p>Price: {course.price}$</p>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default ItCourses;