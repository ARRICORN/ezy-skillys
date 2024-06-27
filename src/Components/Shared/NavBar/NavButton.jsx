import Link from 'next/link';


const NavButton = ({children, href}) => {
  return (
    <button className="md:px-5 md:py-2 px-2 py-1 text-sm md:text-base rounded-md text-white  bg-[#FF8B36] border-[#FF8B36] border-2 ">
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default NavButton;