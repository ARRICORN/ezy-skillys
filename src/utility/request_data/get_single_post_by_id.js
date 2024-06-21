const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTkFaSU0iLCJlbWFpbCI6Im5hemltQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiam9objEyMyIsImlhdCI6MTcxNzI2MzMxNH0.N3RQTtduGXZEK2uw2Y_DrUDg5QwbwGw-0lp9nufIwrQ`;

const GET_SINGLE_POST_BY_DI = async (id) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses/${id}`;

    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        Authorization: token,
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

export default GET_SINGLE_POST_BY_DI;
