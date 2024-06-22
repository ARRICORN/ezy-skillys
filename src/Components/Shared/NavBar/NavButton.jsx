import Link from 'next/link';


const NavButton = ({children, href}) => {
  return (
    <button className="px-5 py-2 rounded-md text-white  bg-[#FF8B36] border-[#FF8B36] border-2">
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default NavButton;