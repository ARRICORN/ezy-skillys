import toast from "react-hot-toast";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9iaW4iLCJlbWFpbCI6InJvYmluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicm9iaW4xMjMiLCJpYXQiOjE3MTgzNDA4ODh9.O-4zlo_FNoTyeM_rDR1Tm2Ldu_8zYENNJdtmOlfjnIg`;

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
    
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:");
  }
};

export default POST_REQUEST_BY_DATA;
