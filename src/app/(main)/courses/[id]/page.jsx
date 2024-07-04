import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import star from "../../../../assets/favorite.png";
import ReveiwForm from '@/Components/Shared/ReveiwForm/ReveiwForm';

const CourseDetails = ({params}) => {
    
    return (
        <div>
            this is details page
            <h3 className='text-xl text-black my-3 font-poppins'>Read what our studenta are saying about this course </h3>

            <div className='my-5'>
                <div className=''>
                    {/* // reveiw card */}
                    <div className='flex flex-row gap-x-3 w-full md:w-2/3 lg:w-1/2 my-5'>
                        <div className='hidden md:block'>
                            {/* <Image src='' alt='student profile photo'></Image> */}
                            <Avatar showFallback src="https://zijundeng.github.io/photo.min.JPG" />
                        </div>
                        <div className='border p-4 '>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    {/* <Image src='' alt='student profile photo'></Image> */}
                                    <Avatar showFallback size='sm' className='md:hidden' src="https://zijundeng.github.io/photo.min.JPG" />
                                    <h4 className='text-base font-medium font-poppins ml-2 md:ml-0'>Rahim Reveiwer</h4>
                                </div>

                                <strong className="flex  ">
                                    {[1, 2, 3, 4, 5].map((str) => (
                                        <Image
                                            src={star}
                                            style={{ width: "20px", height: "12", marginBottom: "7px" }}
                                            alt="star"
                                            priority={true}
                                            key={str}
                                        />
                                    ))}
                                </strong>
                            </div>
                            <p className='text-sm my-5 font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis laborum recusandae? Nulla soluta impedit placeat, voluptates velit nisi molestiae.</p>
                            <span className='float-right'>
                                <p className='text-sm font-medium font-poppins'>24 January 2024</p>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-3 w-full md:w-2/3 lg:w-1/2 my-5'>
                        <div className='hidden md:block'>
                            {/* <Image src='' alt='student profile photo'></Image> */}
                            <Avatar showFallback src="https://zijundeng.github.io/photo.min.JPG" />
                        </div>
                        <div className='border p-4 '>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    {/* <Image src='' alt='student profile photo'></Image> */}
                                    <Avatar showFallback size='sm' className='md:hidden' src="https://zijundeng.github.io/photo.min.JPG" />
                                    <h4 className='text-base font-medium font-poppins ml-2 md:ml-0'>Rahim Reveiwer</h4>
                                </div>

                                <strong className="flex  ">
                                    {[1, 2, 3, 4, 5].map((str) => (
                                        <Image
                                            src={star}
                                            style={{ width: "20px", height: "12", marginBottom: "7px" }}
                                            alt="star"
                                            priority={true}
                                            key={str}
                                        />
                                    ))}
                                </strong>
                            </div>
                            <p className='text-sm my-5 font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis laborum recusandae? Nulla soluta impedit placeat, voluptates velit nisi molestiae.</p>
                            <span className='float-right'>
                                <p className='text-sm font-medium font-poppins'>24 January 2024</p>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <ReveiwForm courseId={params.id}/>
        </div>
    );
};

export default CourseDetails;