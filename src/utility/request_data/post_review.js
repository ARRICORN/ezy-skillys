import toast from "react-hot-toast";
const token = process.env.NEXT_PUBLIC_TOKEN;

/**
 *
 * @param {url,data} url
 * @returns response
 */

const POST_REVIEW = async (url, data) => {
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
    toast.error("There was a problem, try again.");
    console.error("There was a problem with the fetch operation:");
  }
};

export default POST_REVIEW;
