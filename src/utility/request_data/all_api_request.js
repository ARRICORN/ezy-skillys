/**
 *
 * @param {URL} url
 * @returns Promise
 *
 */
// TODO: have to chang token
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9iaW4iLCJlbWFpbCI6InJvYmluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicm9iaW4xMjMiLCJpYXQiOjE3MTgzNDA4ODh9.O-4zlo_FNoTyeM_rDR1Tm2Ldu_8zYENNJdtmOlfjnIg`;

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

    return await response.json();

    // error handle
  } catch (error) {
    console.log(error);
  }
};

export default API_REQUEST_BY_URL;
