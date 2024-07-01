"use client";
import Link from "next/link";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import leader from "../../../assets/business.png";
import chart from "../../../assets/pie-chart.png";
import menu from "../../../assets/menu.png";
import course from "../../../assets/bar-graph.png";
import shoping from "../../../assets/shopping-cart.png";
import addFile from "../../../assets/add-file.png";
import userIcon from "../../../assets/user.png";
import ordered from "../../../assets/order.png";
import reviews from "../../../assets/reviews.png";
import style from "./menu.module.css";
import { usePathname } from "next/navigation";
import SignOutBtn from "./SignOutBtn";
import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [userRole, setUserRole] = useState("");
  const token = Cookies.get("user-cookie");
  const pathName = usePathname();

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/myRole`;

  useEffect(() => {
    const userFn = async () => {
      const res = await API_REQUEST_BY_URL(url, token);

      if (!res.success) toast.error(res.message);
      setUserRole(res.data?.role);
    };

    if (url && token) {
      userFn();
    }
  }, [url, token]);

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
          {userRole === "admin" && (
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
          )}

          {/* === leader board === */}
          {userRole === "admin" && (
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
          )}

          {/* === my course === */}
          {userRole === "admin" && (
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
          )}

          {/* === add course === */}
          {userRole === "admin" && (
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
          )}

          {/* === my student === */}
          {userRole === "admin" && (
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
          )}

          {/* === all for user route start === */}
          {userRole === "user" && (
            <MenuItem
              className={`${
                pathName === "/dashboard/user-purchased-courses"
                  ? style.active
                  : ""
              }`}
              component={<Link href={"/dashboard/user-purchased-courses"} />}
            >
              <div className="flex items-center justify-start gap-x-3">
                <Image
                  src={ordered}
                  width={30}
                  height={1}
                  priority={true}
                  alt="menu"
                />
                <span className="inline-block font-semibold text-[#737791]">
                  Purchased
                </span>
              </div>
            </MenuItem>
          )}

          {/* === review route === */}
          {userRole === "user" && (
            <MenuItem
              className={`${
                pathName === "/dashboard/user-review" ? style.active : ""
              }`}
              component={<Link href={"/dashboard/user-review"} />}
            >
              <div className="flex items-center justify-start gap-x-3">
                <Image
                  src={reviews}
                  width={30}
                  height={1}
                  priority={true}
                  alt="menu"
                />
                <span className="inline-block font-semibold text-[#737791]">
                  Review
                </span>
              </div>
            </MenuItem>
          )}
          {/* === all for user route end === */}

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
