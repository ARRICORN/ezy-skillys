"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <li className={`text-[#8A948C]  text-base ${active && "text-[#FF8B36]"} hover:text-[#FF8B36] `}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
