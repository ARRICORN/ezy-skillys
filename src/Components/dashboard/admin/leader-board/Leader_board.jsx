import Cookies from "js-cookie";
import Search_user from "./Search_user";
import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import { getServerSession } from "next-auth";
import { authOptions } from "@/Components/Utils/AuthOptions";

const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/leaderboardData`;

// === Leader board component ===
const Leader_board = async () => {
  const session = await getServerSession(authOptions);
  const userData = await API_REQUEST_BY_URL(url, session.token);
  return (
    <div className="h-[90vh] no-scrollbar overflow-auto">
      {/* === search user by name === */}
      {userData?.data ? (
        <Search_user userData={userData.data} />
      ) : (
        <h1 className="mt-5 text-center text-orange-500">
          Student information was not found!
        </h1>
      )}
    </div>
  );
};

export default Leader_board;
