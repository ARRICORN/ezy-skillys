"use client"


import React, { useState } from 'react'
import Link from 'next/link'
import Bars3 from '../Icons/Bars3';
import LogInOutBtn from '../Ui/LogInOutBtn';




const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
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
              <Bars3 />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
            <Link href={'/'}>Home</Link>
            <Link href={'/category'}>Category</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/contact'}>Contact</Link>
            <button

              className="bg-primary rounded-full text-white px-8 py-2">
              LogIn
            </button>
          </div>
        )}
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
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;