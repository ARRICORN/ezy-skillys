import { cookies } from "next/headers";

/**
 * @param token string
 * @returns jwt
 */
const GET_TOKEN_FROM_COOKIES = async (token_key) => {
  try {
    const token = await cookies().get(token_key);

    if (!token) {
      return {
        isToken: false,
        status: 401,
        message: "Unauthorized user login",
      };
    }

    if (token) {
      return { token: token.value, isToken: true, status: 200 };
    }
  } catch (error) {
    console.log("error from cookies", error);
  }
};

export default GET_TOKEN_FROM_COOKIES;
