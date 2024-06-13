import { getServerSession } from "next-auth";
import GET_TOKEN_FROM_COOKIES from "./get_cookies";
import { authOptions } from "@/Components/Utils/AuthOptions";

/**
 *
 * @param {URL} url
 * @returns Promise
 *
 */
const API_REQUEST_BY_URL = async (url) => {
  try {
    // const token = await GET_TOKEN_FROM_COOKIES("next-auth.csrf-token");
    // const sesson = await getServerSession();
    // console.log("session xx", sesson);
    // if (!token) {
    //   return { message: "Unauthorized user token", status: 401 };
    // }

    const request = await fetch(`${url}`, {
      next: { revalidate: 3000 },
      headers: {
        Authorization: `${token}`,
      },
    });
    return request.json();

    // error handle
  } catch (error) {
    console.log(error);
  }
};

export default API_REQUEST_BY_URL;
