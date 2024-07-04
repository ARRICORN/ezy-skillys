import Image from 'next/image';
import React from 'react';
import ReveiwForm from '@/Components/Shared/ReveiwForm/ReveiwForm';
import ReviewCardDetailsPage from '@/Components/ReviewCardDetailsPage/ReviewCardDetailsPage';
import get_course_review_by_id from '@/utility/request_data/get_course_review_by_id';

const CourseDetails = async({ params }) => {
    const {data : reviews} = await get_course_review_by_id(params.id);
   
    return (
        <div>
            this is details page
            <h3 className='text-xl text-black my-3 font-poppins'>Read what our studenta are saying about this course </h3>

            <div className='my-5'>
                <div className=''>

                    {
                        reviews?.map((review)=>{
                            return <div key={review._id}>
                                <ReviewCardDetailsPage review={review}/>
                            </div>
                        })
                    }

                </div>
            </div>

            <ReveiwForm courseId={params.id} />
        </div>
    );
};

export default CourseDetails;