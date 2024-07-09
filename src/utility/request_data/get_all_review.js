
const get_all_course_review = async() => {
    try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/all-reviews`;

        const response = await fetch(url, {
            cache: "no-store",
            headers: {
                // Authorization: token,
                "Content-type": "Application/json",
            },
        });

        if (!response.ok) {
            return { message: "Server error is occurred bad request 404" };
        }

        const result = await response.json({
            message: "api request is successful",
            status: 200,
        });
        return result;

        // error handle by catch
    } catch (error) {
        console.log(error);
    }
};

export default get_all_course_review;