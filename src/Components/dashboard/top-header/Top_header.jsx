"use client";
import { usePathname } from "next/navigation";
import style from "./header.module.css";

const Top_header = () => {
  return (
    <div className={`${style.shadow} flex p-4 items-center`}>
      <div>
        <h1 className="font-semibold text-[#151D48] md:text-[30px]">
          Dashboard
        </h1>
      </div>
      <div className="flex space-x-4 w-[100%] justify-end">
        <div>
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
          />
        </div>
        <div>
          <h4 className="font-bold">Leroy Jenkins</h4>
          <span className="text-xs dark:text-gray-600">Role</span>
        </div>
      </div>
    </div>
  );
};

export default Top_header;
