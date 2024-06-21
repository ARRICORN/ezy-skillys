<<<<<<< HEAD
"use client"


import React, { useState } from 'react'
import Link from 'next/link'
import Bars3 from '../Icons/Bars3';
import LogInOutBtn from '../Ui/LogInOutBtn';


=======
"use client";
>>>>>>> 6294839d29dccb648a68dfc526b52234eb042b26

import React, { useState } from "react";
import Link from "next/link";
import Bars3 from "../Icons/Bars3";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
<<<<<<< HEAD
    <div className='max-w-7xl p-5 mx-auto'>
      <header>
        <div className="flex items-center md:hidden justify-between">
          <Link className="text-primary font-semibold text-2xl" href={'/'}>
            ArriMart
          </Link>
          <div className="flex gap-8 items-center">

            <button
              className="p-1 border"
              onClick={() => setMobileNavOpen(prev => !prev)}>
=======
    <div>
      <header>
        <div className="flex items-center md:hidden justify-between">
          <Link className="text-primary font-semibold text-2xl" href={"/"}>
            ArriMart
          </Link>
          <div className="flex gap-8 items-center">
            <button
              className="p-1 border"
              onClick={() => setMobileNavOpen((prev) => !prev)}
            >
>>>>>>> 6294839d29dccb648a68dfc526b52234eb042b26
              <Bars3 />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div
            onClick={() => setMobileNavOpen(false)}
<<<<<<< HEAD
            className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
            <Link href={'/'}>Home</Link>
            <Link href={'/category'}>Category</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/contact'}>Contact</Link>
            <button

              className="bg-primary rounded-full text-white px-8 py-2">
=======
            className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center"
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/category"}>Category</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <button className="bg-primary rounded-full text-white px-8 py-2">
>>>>>>> 6294839d29dccb648a68dfc526b52234eb042b26
              LogIn
            </button>
          </div>
        )}
<<<<<<< HEAD
        <div>
          <nav className="flex justify-between items-center gap-8 text-gray-500 font-semibold">
            <Link className="text-primary font-semibold text-2xl" href={'/'}>
              ArriMart
            </Link>
            <div className='space-x-5'>
              <Link href={'/'}>Home</Link>
              <Link href={'/category'}>Category</Link>
              <Link href={'/about'}>About</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/contact'}>Contact</Link>
            </div>

            <LogInOutBtn />
=======
        <div className="hidden md:flex items-center justify-between">
          <nav className="flex items-center gap-8 text-gray-500 font-semibold">
            <Link className="text-primary font-semibold text-2xl" href={"/"}>
              ArriMart
            </Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/category"}>Category</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>

            <button className="bg-primary rounded-full text-white px-8 py-2">
              LogIn
            </button>
>>>>>>> 6294839d29dccb648a68dfc526b52234eb042b26
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
