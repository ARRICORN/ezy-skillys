import toast from "react-hot-toast";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTkFaSU0iLCJlbWFpbCI6Im5hemltQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiam9objEyMyIsImlhdCI6MTcxNzI2MzMxNH0.N3RQTtduGXZEK2uw2Y_DrUDg5QwbwGw-0lp9nufIwrQ`;

/**
 *
 * @param {url,data} url
 * @returns response
 */

const POST_REQUEST_BY_DATA = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.statusText === "OK") {
      toast.error("Network response was not ok");
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("There was a problem with the fetch operation:");
  }
};

export default POST_REQUEST_BY_DATA;
