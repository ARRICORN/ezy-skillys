import Search_user from "./Search_user";
import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";

const url = `${process.env.BASE_URL}/api/dashboard/leaderboardData`;

// === Leader board component ===
const Leader_board = async () => {
  const userData = await API_REQUEST_BY_URL(url);

  return (
    <div className="h-[90vh] no-scrollbar overflow-auto">
      {/* === search user by name === */}
      <Search_user userData={userData.data} />
    </div>
  );
};

export default Leader_board;
