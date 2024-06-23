import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import style from "./header.module.css";

const Top_header = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/myRole`;
  const response = await API_REQUEST_BY_URL(url);

  return (
    <div className={`${style.shadow} flex p-4 items-center justify-between`}>
      <div>
        <span className="font-semibold text-[#151D48] text-[26px]">
          <span className="hidden lg:inline-block text-orange-400">
            Welcome to
          </span>{" "}
          Dashboard
        </span>
      </div>
      <div className="flex space-x-4 justify-end">
        <div>
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
          />
        </div>
        <div>
          <h4 className="font-bold">Leroy Jenkins</h4>
          <span className="text-xs text-orange-500">
            {response?.data?.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Top_header;
