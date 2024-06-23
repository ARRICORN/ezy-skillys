"use client";
import Link from "next/link";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import leader from "../../../assets/business.png";
import chart from "../../../assets/pie-chart.png";
import menu from "../../../assets/menu.png";
import course from "../../../assets/bar-graph.png";
import shoping from "../../../assets/shopping-cart.png";
import addFile from "../../../assets/add-file.png";
import userIcon from "../../../assets/user.png";
import style from "./menu.module.css";
import { usePathname } from "next/navigation";
import SignOutBtn from "./SignOutBtn";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const pathName = usePathname();

  return (
    <div
      style={{ display: "flex", height: "100vh", minHeight: "400px" }}
      className="bg-[#FFFFFF]"
    >
      <Sidebar width="230px" collapsed={collapsed}>
        {/* === brand logo === */}
        <div className="p-3 mt-2">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={50}
            priority={true}
          />
        </div>
        <Menu>
          {/* === collapsed === */}
          <MenuItem>
            <div
              className="flex items-center justify-start gap-x-3"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Image
                src={menu}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                Collapsed
              </span>
            </div>
          </MenuItem>
          {/* === dashboard === */}
          <MenuItem
            className={`${pathName === "/dashboard" ? style.active : ""}`}
            component={<Link href={"/dashboard"} />}
          >
            <div className="flex items-center justify-start gap-x-3">
              <Image
                src={chart}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                Dashboard
              </span>
            </div>
          </MenuItem>
          {/* === leader board === */}
          <MenuItem
            className={`${
              pathName === "/dashboard/leaderboard" ? style.active : ""
            }`}
            component={<Link href={"/dashboard/leaderboard"} />}
          >
            <div className="flex items-center justify-start gap-x-3">
              <Image
                src={leader}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                Leader board
              </span>
            </div>
          </MenuItem>
          {/* === my course === */}
          <MenuItem
            className={`${
              pathName === "/dashboard/my-courses" ? style.active : ""
            }`}
            component={<Link href={"/dashboard/my-courses"} />}
          >
            <div className="flex items-center justify-start gap-x-3">
              <Image
                src={course}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                My courses
              </span>
            </div>
          </MenuItem>
          {/* === add course === */}
          <MenuItem
            className={`${
              pathName === "/dashboard/add-course" ? style.active : ""
            }`}
            component={<Link href={"/dashboard/add-course"} />}
          >
            <div className="flex items-center justify-start gap-x-3">
              <Image
                src={addFile}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                Add course
              </span>
            </div>
          </MenuItem>
          {/* === my student === */}
          <MenuItem
            className={`${
              pathName === "/dashboard/my-students-board" ? style.active : ""
            }`}
            component={<Link href={"/dashboard/my-students-board"} />}
          >
            <div className="flex items-center justify-start gap-x-3">
              <Image
                src={shoping}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                My Students
              </span>
            </div>
          </MenuItem>
          {/* === View profile === */}
          <MenuItem
            className={`${
              pathName === "/dashboard/view-profile" ? style.active : ""
            }`}
            component={<Link href={"/dashboard/view-profile"} />}
          >
            <div className="flex items-center justify-start gap-x-3">
              <Image
                src={userIcon}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                View Profile
              </span>
            </div>
          </MenuItem>
          {/* === log out page === */}
          <MenuItem>
            <SignOutBtn />
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
