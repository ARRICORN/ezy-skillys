/**
 *
 * @param {id} id
 * @param {token} token
 * @returns promise
 */

const GET_SINGLE_POST_BY_DI = async (id, token) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses/myCourses/${id}`;

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
