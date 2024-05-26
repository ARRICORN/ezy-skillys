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
import logout from "../../../assets/log-out.png";
import addFile from "../../../assets/add-file.png";
import style from "./menu.module.css";
import { usePathname } from "next/navigation";

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
          <MenuItem
            className={`${
              pathName === "/dashboard/students-board" ? style.active : ""
            }`}
            component={<Link href={"/dashboard/students-board"} />}
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
          <MenuItem
            className={`${
              pathName === "/dashboard/sign-out" ? style.active : ""
            }`}
            component={<Link href={"/dashboard/sign-out"} />}
          >
            <div className="flex items-center justify-start gap-x-3">
              <Image
                src={logout}
                width={30}
                height={1}
                priority={true}
                alt="menu"
              />
              <span className="inline-block font-semibold text-[#737791]">
                Sign out
              </span>
            </div>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
