import Link from "next/link";

const NavButtonBorder = ({ children , href}) => {
  return (
    <button className="px-10 py-2 rounded-md text-[#FF8B36] border-[#FF8B36] border-2">
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default NavButtonBorder;
