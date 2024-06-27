import Link from "next/link";

const NavButtonBorder = ({ children , href}) => {
  return (
    <button className="md:px-10 md:text-base text-sm md:py-2 py-1 px-4 rounded-md text-[#FF8B36] border-[#FF8B36] border-2">
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default NavButtonBorder;
