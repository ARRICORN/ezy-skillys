import { useEffect } from "react";
const { signIn } = require("next-auth/react");

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise}
 */
const LOGIN_USER = async (email, password) => {
  try {
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
};

export default LOGIN_USER;