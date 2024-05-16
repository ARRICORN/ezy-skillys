"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import NavIcon from "../../../assets/ezy.png";
import NavButtonBorder from "./NavButtonBorder";
import NavButton from "./NavButton";
import { FaBar, Close } from "@/Components/Icons/ReactIcons";
import { useState } from "react";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navList = (
    <>
      <NavLink href={"/home"}>Home</NavLink>
      <NavLink href={"/selector"}>Course Selector</NavLink>
      <NavLink href={"/courses"}>Courses</NavLink>
      <NavLink href={"/pricing"}>Pricing</NavLink>
      <NavLink href={"/faq"}>FAQ</NavLink>
      <NavLink href={"/contact"}>Contact US</NavLink>
    </>
  );
  return (
    <div>
      <nav className="w-full ">
        <div className="flex items-center lg:hidden justify-between relative p-6">
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
          <div
            onClick={() => setMobileNavOpen(false)}
            className="absolute lg:hidden py-4 bg-slate-200 w-full rounded-lg  flex flex-col gap-2 text-center"
          >
            <div>
              <ul className=" space-y-5 ">{navList}</ul>
            </div>
          </div>
        )}
        {/* desktop  */}
        <div className="lg:flex hidden items-center justify-between p-6">
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
          <div className=" flex gap-4 scale-90 xl:scale-100">
            <NavButtonBorder href={"/login"}>Log In</NavButtonBorder>
            <NavButton href={"/create"}>Create Account</NavButton>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
