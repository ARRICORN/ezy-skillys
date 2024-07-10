'use client'

import { useCallback, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ImSpinner9 } from "react-icons/im";
import POST_REVIEW from "@/utility/request_data/post_review";
import toast from "react-hot-toast";


const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/add-review`;

const ReveiwForm = ({ courseId }) => {
    const [error, setError] = useState(null);
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);

    const ratingChanged = useCallback((newRating) => {
        setRating(newRating)
    }, []);

    const submitForm = useCallback(async (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        //console.log(e.target.message.value);
        if (message === '' || message.length < 10) {
            setError('Set a message, minimum 10 character')
        }
        else {
            if (rating <= 0) setError('choose a rating for this course')
            else {
                setLoading(true)
                const ratingInfo = {
                    courseId,
                    rating,
                    review: message
                }
                // create a post with a course review
                const response = await POST_REVIEW(url, ratingInfo);
                if (!response.statusText === "OK") {
                    toast.error("add review failed, try again.");
                    setLoading(false);
                    e.target.reset();
                    // setRating(0)
                    return;
                }
                if (!response.success) {
                    toast.error(response.message);
                    setLoading(false);
                    e.target.reset();
                    // setRating(0)
                    return;
                }
                setLoading(false);
                toast.success("Review added successfully");
                e.target.reset();
                // setRating(0)
            }
        }
    }, [rating, courseId])

    return (
        <form onSubmit={submitForm} className='my-10 w-full md:w-2/3 lg:w-1/2'>
            <div className="flex justify-between items-center">
                <h3 className='text-base font-poppins font-medium'>Add A New Reveiw</h3>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={33}
                    activeColor="#FCC153"
                    value={rating}
                />
            </div>
            <textarea name="message" rows={5} required placeholder="type a message" className="p-3 rounded-md w-full border border-gray-400 outline-none focus:outline-none my-1 font-poppins text-sm">

            </textarea>
            <button className="bg-orange-400 hover:bg-orange-500 duration-200 p-3 rounded-md text-white text base font-poppins flex flex-row items-center gap-x-1">
                {loading && <ImSpinner9 className="text-base animate-spin" />}
                <p>Add Reveiw</p>
            </button>
            {error && <p className="text-sm text-red-500 font-poppins">{error}</p>}
        </form>
    );
};

export default ReveiwForm;