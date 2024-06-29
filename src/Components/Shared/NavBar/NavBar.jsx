// "use client";

// import Image from "next/image";
// import NavLink from "./NavLink";
// import NavIcon from "../../../assets/ezy.png";

// import { FaBar, Close } from "@/Components/Icons/ReactIcons";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import LogInOutBtn from "@/Components/Ui/LogInOutBtn";

// import { motion } from "framer-motion";
// import LoginProfile from "./LoginProfile";
// import NavButton from "./NavButton";

// const NavBar = () => {
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);

//   const pathName = usePathname();

//   const AboutActive = pathName.toString() === "/about";

//   const navList = (
//     <>
//       <NavLink href={"/"}>Home</NavLink>
//       <NavLink href={"/course-selector"}>Course Selector</NavLink>
//       <NavLink href={"/courses"}>Courses</NavLink>
//       <NavLink href={"/pricing"}>Pricing</NavLink>
//       <NavLink href={"/faq"}>FAQ</NavLink>
//       <NavLink href={"/contact"}>Contact US</NavLink>
//     </>
//   );
//   return (
//     <div>
//       <nav className={`${AboutActive && "bg-[#003F7D]"}`}>
//         <div className="flex items-center lg:hidden justify-between relative p-6 ">
//           <Image
//             className="md:scale-90 xl:scale-100 scale-75"
//             src={NavIcon}
//             width={120}
//             height={120}
//             alt="Nav Icon"
//           />
//           <div className="flex gap-8 items-center">
//                  <LoginProfile login={true} />
//             <button
//               className="text-2xl"
//               onClick={() => setMobileNavOpen((prev) => !prev)}
//             >
//               {mobileNavOpen ? <Close /> : <FaBar />}
//             </button>
//           </div>
//         </div>
//         {mobileNavOpen && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             onClick={() => setMobileNavOpen(false)}
//             className="absolute lg:hidden py-4 bg-slate-200 w-full rounded-lg  flex flex-col gap-2 text-center z-50"
//           >
//             <div>
//               <ul className=" space-y-5 ">{navList}</ul>
//             </div>
//           </motion.div>
//         )}
//         {/* desktop  */}
//         <div className="lg:flex hidden items-center justify-between p-6">
//           <div>
//             <Image
//               className="scale-95 xl:scale-100"
//               src={NavIcon}
//               width={120}
//               height={120}
//               alt="Nav Icon"
//             />
//           </div>
//           <div>
//             <ul className="flex items-center gap-7 ">{navList}</ul>
//           </div>
//           <div className=" flex gap-4 scale-90 xl:scale-100 items-center justify-center">
//           <LogInOutBtn/>
//             <NavButton href={"/register"}>Create Account</NavButton>
//           <div>
//             <LoginProfile login={true} />
//           </div>
//           </div>
//           </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;
"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import NavIcon from "../../../assets/ezy.png";


import { FaBar, Close } from "@/Components/Icons/ReactIcons";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LoginProfile from "./LoginProfile";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [stick, setStick] = useState(false);
  const session = useSession();
  const { status } = useSession();
  const image = session?.data?.user?.image;

  const pathName = usePathname();

  const AboutActive = pathName.toString() === "/about";

  const navList = (
    <>
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/course-selector"}>Course Selector</NavLink>
      <NavLink href={"/courses"}>Courses</NavLink>
      <NavLink href={"/pricing"}>Pricing</NavLink>
      <NavLink href={"/faq"}>FAQ</NavLink>
      <NavLink href={"/about"}>About Us</NavLink>
      <NavLink href={"/contact"}>Contact US</NavLink>
    </>
  );

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setStick(true);
    } else {
      setStick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <nav className={stick ? "text-white font-semibold sticky top-0 left-0 right-0 z-50 bg-[#003F7D] transition-colors  shadow-lg shadow-indigo-700/50 duration-75 ease-in-out transition-padding  px-12" : "font-semibold mx-50 px-12 "}>
      <div className="flex items-center lg:hidden justify-between relative p-6 ">
        <Image
          className="md:scale-90 xl:scale-100 scale-75"
          src={NavIcon}
          width={120}
          height={120}
          alt="Nav Icon"
        />
        <div className="flex gap-8 items-center">
          <button
            className="text-2xl"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? <Close /> : <FaBar />}
          </button>
        </div>
      </div>
      {mobileNavOpen && (
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
          className="absolute lg:hidden py-4 bg-slate-200 w-full mx-20 rounded-lg  flex flex-col gap-2 text-center z-50"
        >
          <div className=" space-y-10">
            <LoginProfile login={true} />
            <div onClick={() => setMobileNavOpen(false)}>
              <ul className=" space-y-5 ">{navList}</ul>
            </div>
          </div>
        </motion.div>
      )}
      {/* desktop  */}
      <div className="lg:flex hidden items-center justify-evenly p-6">
   
          <div>
            <Image
              className="scale-95 xl:scale-100"
              src={NavIcon}
              width={120}
              height={120}
              alt="Nav Icon"
            />
          </div>
     
        <div>
          <ul className="flex items-center gap-7 ">{navList}</ul>
        </div>
        <div>
          <LoginProfile login={true} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
