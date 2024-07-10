
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [stick, setStick] = useState(false);
  const session = useSession();
  const { status } = useSession();
  const image = session?.data?.user?.image;

  const pathName = usePathname();
  console.log(session);

  const AboutActive = pathName.toString() === "/about";
  useEffect(() => {
    if (mobileNavOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [mobileNavOpen]);

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
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <nav
      className={
        stick
          ? "text-white font-semibold sticky top-0 left-0 right-0 z-[999] bg-[#003F7D] transition-colors  shadow-lg shadow-indigo-700/50 duration-75 ease-in-out transition-padding  px-12"
          : "font-semibold mx-50 px-12 "
      }
    >
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
            className="text-2xl sm:block md:hidden lg:hidden"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? <Close /> : <FaBar />}
          </button>
        </div>
      </div>
      {isAnimating && (
        <style>
          {`
      @keyframes slideDown {
        0% { transform: translateY(-100%); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .mobile-nav-animation {
        animation: slideDown 1s forwards;
      }
    `}
        </style>
      )}
      {isAnimating && (
        <div
          className={`fixed block md:hidden lg:hidden py-4 bg-slate-200 min-h-[60vh] left-0 top-[15%] w-full rounded-b-lg flex-col items-center px-5 gap-4 z-10 mobile-nav-animation ${
            mobileNavOpen ? "flex" : "hidden"
          }`}
          style={{
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="space-y-10 w-full">
            <LoginProfile login={true} />
            <div onClick={() => setMobileNavOpen(false)}>
              <ul className="space-y-5">{navList}</ul>
            </div>
          </div>
        </div>
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
