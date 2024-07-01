"use client";
import React, { useState } from "react";
import Display_user from "./Display_user";
import styles from "./style.module.css";
import trainerData from "../../../utility/temp/trainer.json";

const Search_user = ({ userData }) => {
  const [searchSiring, setSearchString] = useState("");

  // === filter trainer with user by search name
  let filterData = userData;

  const handler = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };

  if (searchSiring) {
    filterData = userData.filter((el) =>
      el?.instructor?.toLowerCase().includes(searchSiring.toLowerCase())
    );
  }

  if (!filterData) {
    return (
      <h1 className="block text-xl p-2 mt-8 text-orange-500">
        There is no user information
      </h1>
    );
  }

  return (
    <div>
      {/* === search input box === */}
      <div className="relative mt-4 md:mt-0 p-4">
        <span className="absolute inset-y-0 left-3 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full bg-orange-50 py-2 pl-10 pr-4 text-[20px] border border-teal-500 rounded-lg outline-none"
          placeholder="Search"
          onChange={handler}
        />
      </div>

      {/* === display user === */}
      {filterData?.length ? (
        <div className={`${styles.responsive}`}>
          {filterData &&
            filterData.map((user) => (
              <Display_user user={user} key={user._id} />
            ))}
        </div>
      ) : (
        <h1 className="bg-teal-500 block m-3 text-xl p-1">User not found...</h1>
      )}
    </div>
  );
};

export default Search_user;
