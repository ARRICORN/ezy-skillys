import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import Table_body from "./Table_body";
import { authOptions } from "@/Components/Utils/AuthOptions";
import { getServerSession } from "next-auth";

const My_student_board = async () => {
  const session = await getServerSession(authOptions);

  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/myStudents`;
  const student_data = await API_REQUEST_BY_URL(url, session.token);

  return (
    <section className="">
      {/* === Table body === */}
      {student_data?.data?.length > 0 ? (
        <Table_body studentData={student_data.data} />
      ) : (
        <h1 className="mt-5 text-center text-orange-500">
          Student information was not found!
        </h1>
      )}
    </section>
  );
};

export default My_student_board;
