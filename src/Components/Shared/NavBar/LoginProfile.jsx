// import { FaRegCircleUser } from "react-icons/fa6";
// import NavButton from "./NavButton";
// import NavButtonBorder from "./NavButtonBorder";

// const LoginProfile = ({ login }) => {
//   let profile;

//   if (login) {
//     profile = (
//       <div className=" flex gap-4 scale-90 xl:scale-100">
//         <FaRegCircleUser size={30}/>
//       </div>
//     );
//   } else {
//     profile = (
//       <div className=" flex gap-4 scale-90 xl:scale-100">
//         <NavButtonBorder href={"/login"}>Log In</NavButtonBorder>
//         <NavButton href={"/create"}>Create Account</NavButton>
//       </div>
//     );
//   }

//   return profile;
// };

// export default LoginProfile;
"use client";
import {  FaUser } from "react-icons/fa6";

import NavButton from "./NavButton";
import NavButtonBorder from "./NavButtonBorder";
import { useState } from "react";
import { motion } from "framer-motion";
import LogInOutBtn from "@/Components/Ui/LogInOutBtn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import noImage from "../../../assets/no-image.png";

const LoginProfile = ({ login }) => {
  const session = useSession();
  console.log(session, "session from login profile");
  const { status } = useSession();
  const image = session?.data?.user?.image;
  const name = session?.data?.user?.name
  const email = session?.data?.user?.email
  let profile;

  const [userNav, setUserNav] = useState(false);

  if (login) {
    profile = (
      <>
        <div className=" flex justify-center items-center ">
        {status === 'authenticated' ? (
          image ? (
              <div
              className="cursor-pointer" onClick={() => setUserNav(!userNav)}
              >
              <Image
                className="scale-95 xl:scale-100 rounded-full border border-gray-300 shadow"
                src={image}
                width={50}
                height={50}
                alt="User Image"
              />
            </div>
          ) : (
                <div
                className="cursor-pointer" onClick={() => setUserNav(!userNav)}
                >
              <Image
                className="scale-95 xl:scale-100 rounded-full border border-gray-300 shadow"
                src={noImage}
                width={50}
                height={50}
                alt="No Image"
              />
            </div>
          )
        ) : (
          <FaUser className="cursor-pointer" onClick={() => setUserNav(!userNav)} size={30} />
        )}
          
        </div>
        {userNav && (
          <div
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
            className="absolute lg:right-0 my-10 text-left text-white  bg-[#003F7D]  w-80 mr-60 rounded-lg  flex flex-col gap-2  z-50"
          >
            <div className="lg:p-4 ml-5 lg:ml-0 md:ml-0 mt-5 mb-5 ">
              {
                name ? <h2>Name:{name}</h2> : <h2>Name:Login First</h2>
              }
              {
                email ? <h2 className="mt-5 ">Email:{email}</h2> : <h2 className="mt-5 mb-5">Email:Login First</h2>
              }
            
            {
                email &&
                <Link href="/dashboard"> <h1 className="mt-5 mb-5">

                DashBoard
              </h1></Link>
               
            }
              {/* <button className="md:px-5 md:py-2 px-2 py-1 text-sm md:text-base rounded-md text-white  bg-[#FF8B36] border-[#FF8B36] border-2 ">
                Logout

              </button> */}
              <LogInOutBtn/>
            </div>
          </div>
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
