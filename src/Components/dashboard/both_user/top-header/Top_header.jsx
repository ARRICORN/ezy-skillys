import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import style from "./header.module.css";
import Image from "next/image";
import avatar from "@/assets/user.png";
import { authOptions } from "@/Components/Utils/AuthOptions";
import { getServerSession } from "next-auth";

// === top dashboard header nav ===
const Top_header = async () => {
  const session = await getServerSession(authOptions);
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/myRole`;
  const response = await API_REQUEST_BY_URL(url, session?.token);
  const userImage = session?.user?.image;

  return (
    <div>
      <div
        className={`${style.shadow} flex p-3 items-center md:justify-between`}
      >
        <div>
          <span className="font-semibold text-[#151D48] text-[26px] hidden md:block">
            <span className="hidden lg:inline-block text-orange-400">
              Welcome to
            </span>{" "}
            Dashboard
          </span>
        </div>
        <div className="flex space-x-4 justify-end">
          <div>
            <Image
              width={70}
              height={70}
              priority={true}
              src={userImage || avatar}
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h5 className="font-bold">{session?.user?.name}</h5>
            <span className="text-xs text-orange-500">
              {response?.data &&
                response?.data?.role.charAt(0).toUpperCase() +
                  response?.data?.role.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Top_header;
