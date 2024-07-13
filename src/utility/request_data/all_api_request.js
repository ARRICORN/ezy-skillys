/**
 *
 * @param {URL} url
 * @returns Promise
 *
 */



const API_REQUEST_BY_URL = async (url, token) => {
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
