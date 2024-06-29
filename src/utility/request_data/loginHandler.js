import { useEffect } from "react";

const { signIn } = require("next-auth/react");

/**
 *
 * @param {email,password} data
 * @returns promise
 */

const LOGIN_USER = async (email, password) => {
  const response = await signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
  });

  const res = await response;
  return res;
};

export default LOGIN_USER;
