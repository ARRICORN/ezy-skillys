"use client";
import {  FaUser } from "react-icons/fa6";

import NavButton from "./NavButton";
import NavButtonBorder from "./NavButtonBorder";
import { useState } from "react";
import { motion } from "framer-motion";

const LoginProfile = ({ login }) => {
  let profile;

  const [userNav, setUserNav] = useState(false);

  if (login) {
    profile = (
      <>
        <div className=" flex justify-center items-center ">
          <FaUser className="cursor-pointer" onClick={() => setUserNav(!userNav)} size={30} />
        </div>
        {userNav && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute lg:right-0 my-10 text-left   bg-orange-200 lg:w-2/6 w-full rounded-lg p-4 flex flex-col gap-2  z-50"
          >
            <div className="lg:p-4  space-y-10">
              <h2>Name</h2>
              <p>Email</p>
              <button className="md:px-5 md:py-2 px-2 py-1 text-sm md:text-base rounded-md text-white  bg-[#FF8B36] border-[#FF8B36] border-2 ">
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </>
    );
  } else {
    profile = (
      <div className=" flex gap-4 scale-90 xl:scale-100">
        <NavButtonBorder href={"/login"}>Log In</NavButtonBorder>
        <NavButton href={"/create"}>Create Account</NavButton>
      </div>
    );
  }

  return profile;
};

export default LoginProfile;
