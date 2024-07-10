"use client"

import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import style from "./header.module.css";
import Image from "next/image";
import avatar from "@/assets/user.png";
import { authOptions } from "@/Components/Utils/AuthOptions";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


// === top dashboard header nav ===
const Top_header =  () => {
  const session = useSession();
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/myRole`;
  const response = API_REQUEST_BY_URL(url, session?.data?.token);
  const userImage = session?.data?.user?.image;
  const [userRole, setUserRole] = useState("");
  const fetchUserRole = async () => {
    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization: session?.data?.token,
          "Content-type": "Application/json",
        },
      });
      console.log(response,"response");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      console.log(res,"res")
      setUserRole(res?.data?.role);
    } catch (error) {
      console.error("Error fetching UserRole:", error);
    }
  };

  useEffect(() => {
    if (session?.data?.token) {
      fetchUserRole();
    }
  }, [session]);

  console.log(session, "session from user purchase");
  return (
    <div>
      <div
        className={`${style.shadow} flex p-3 items-center md:justify-between`}
      >
        <div>
          <span className="font-semibold text-[#151D48] text-[26px] hidden md:block">
            <span className="hidden lg:inline-block text-orange-400">
              Welcome to
            </span>{" "}
            Dashboard
          </span>
        </div>
        <div className="flex space-x-4 justify-end">
          <div>
            <Image
              width={70}
              height={70}
              priority={true}
              src={userImage || avatar}
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h5 className="font-bold">{session?.data?.user?.name}</h5>
            <span className="text-xs text-orange-500">
            {userRole}
            </span>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Top_header;
