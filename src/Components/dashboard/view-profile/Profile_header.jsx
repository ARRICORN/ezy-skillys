import Image from "next/image";
import profile from "../../../assets/user.png";

const Profile_header = () => {
  return (
    <div className="bg-[#F3F4F6] p-2 lg:p-3 flex items-center justify-evenly">
      <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
        <Image
          width={60}
          height={60}
          priority={true}
          src={profile}
          alt="avatar"
          className="rounded-full text-center w-[50%]  mx-auto"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-center md:text-left">
            Leroy Jenkins
          </h4>
          <p className="dark:text-gray-600">example@gmail.com</p>
        </div>
      </div>

      {/* === edit information === */}
      <div>
        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 text-blue-500 hover:text-orange-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Profile_header;
