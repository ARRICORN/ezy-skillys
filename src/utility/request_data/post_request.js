/**
 *
 * @param {url,data} url
 * @returns response
 */

import toast from "react-hot-toast";
const POST_REQUEST_BY_DATA = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("api ", response);
    // if (!response.ok) {
    //   toast.error("Network response was not ok");
    // }

    const result = await response.json({
      message: "api request is successful",
      status: 200,
    });
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

export default POST_REQUEST_BY_DATA;
