import get_all_course_review from "@/utility/request_data/get_all_review";
import Review from '@/Components/pages/review/Review'

const ReviewSection = async() => {
    const {data:reviews} = await get_all_course_review();
    return (
        <div>
            <Review reviews={reviews}/>
        </div>
    );
};

export default ReviewSection;