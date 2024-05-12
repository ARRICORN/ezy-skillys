"use client"


import React, {useState } from 'react'
import Link from 'next/link'
import Bars3 from '../Icons/Bars3';




const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div>
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
         <Link href={'/about'}>About</Link>
         <Link href={'/contact'}>Contact</Link>
         <button
         
          className="bg-primary rounded-full text-white px-8 py-2">
          LogIn
        </button>
       </div>
     )}
     <div className="hidden md:flex items-center justify-between">
       <nav className="flex items-center gap-8 text-gray-500 font-semibold">
         <Link className="text-primary font-semibold text-2xl" href={'/'}>
      ArriMart
         </Link>
         <Link href={'/'}>Home</Link>
         <Link href={'/category'}>Category</Link>
         <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
            
            <button
         
          className="bg-primary rounded-full text-white px-8 py-2">
          LogIn
        </button>
       </nav>
       
     </div>
   </header>
   </div>
  );
};

export default Navbar;