import Image from 'next/image';
import React from 'react';
import { Avatar } from "@nextui-org/react";
import Starrating from './Starrating';
import ReviewTime from './ReviewTime';

const ReviewCardDetailsPage = ({ review }) => {
    return (
        <div>
            <div className='flex flex-row gap-x-3 w-full md:w-2/3 lg:w-1/2 my-5'>
                <div className='hidden md:block'>
                    <Image
                        className="rounded-full shadow"
                        src='https://zijundeng.github.io/photo.min.JPG'
                        width={80}
                        height={80}
                        alt="User Image"
                    />

                    {/* <Avatar src="https://zijundeng.github.io/photo.min.JPG" /> */}
                </div>
                <div className='border p-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-row items-center'>
                            <Image
                                className="rounded-full shadow md:hidden"
                                src='https://zijundeng.github.io/photo.min.JPG'
                                width={40}
                                height={40}
                                alt="User Image"
                            />
                            {/* <Avatar showFallback size='sm' className='md:hidden' src="https://zijundeng.github.io/photo.min.JPG" /> */}
                            <h4 className='text-base font-medium font-poppins ml-2 md:ml-0'>{review?.user}</h4>
                        </div>

                        <strong className="flex ">
                            <Starrating rate={review?.rating}/>
                        </strong>
                    </div>
                    <p className='text-sm my-3 font-poppins'>{review?.review}</p>
                    <ReviewTime time={review?.createdAt}/>
                </div>
            </div>
        </div>
    );
};

export default ReviewCardDetailsPage;