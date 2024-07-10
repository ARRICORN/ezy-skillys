
"use client"


import Search_user from "./Search_user";
import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";

import { authOptions } from "@/Components/Utils/AuthOptions";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/leaderboardData`;

// === Leader board component ===
const Leader_board = () => {
  const [userData, setUserData] = useState([])
  console.log(userData,"userData")
  const session =  useSession();
  const fetchUserData = async () => {
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
      setUserData(res?.data);
    } catch (error) {
      console.error("Error fetching UserData:", error);
    }
  };

  useEffect(() => {
    if (session?.data?.token) {
      fetchUserData();
    }
  }, [session]);

  console.log(session, "session from user purchase");
  return (
    <div className="h-[90vh] no-scrollbar overflow-auto">
      {/* === search user by name === */}
      {userData ? (
        <Search_user userData={userData} />
      ) : (
        <h1 className="mt-5 text-center text-orange-500">
          Student information was not found!
        </h1>
      )}
    </div>
  );
};

export default Leader_board;
