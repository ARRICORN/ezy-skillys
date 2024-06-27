/**
 *
 * @param {URL} url
 * @returns Promise
 *
 */

import { useSession } from "next-auth/react";

// TODO: have to chang token
const token = process.env.NEXT_PUBLIC_TOKEN;

const API_REQUEST_BY_URL = async (url) => {
  const { data } = useSession();
  console.log(data);
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
