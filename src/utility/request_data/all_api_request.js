/**
 *
 * @param {URL} url
 * @returns Promise
 *
 */
// TODO: have to chang token
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTkFaSU0iLCJlbWFpbCI6Im5hemltQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiam9objEyMyIsImlhdCI6MTcxNzI2MzMxNH0.N3RQTtduGXZEK2uw2Y_DrUDg5QwbwGw-0lp9nufIwrQ`;

const API_REQUEST_BY_URL = async (url) => {
  try {
    if (!token) {
      return { message: "Unauthorized user token", status: 401 };
    }

    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        Authorization: token,
        "Content-type": "Application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const res = await response.json();
    return res;

    // error handle
  } catch (error) {
    console.log(error);
  }
};

export default API_REQUEST_BY_URL;
