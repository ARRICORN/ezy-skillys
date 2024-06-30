const GET_GLOBAL_DATA = async (url) => {
  try {
    const response = await fetch(url);

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

export default GET_GLOBAL_DATA;
