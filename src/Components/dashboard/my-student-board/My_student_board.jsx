import API_REQUEST_BY_URL from "@/utility/request_data/all_api_request";
import Table_body from "./Table_body";

const My_student_board = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/myStudents`;
  const student_data = await API_REQUEST_BY_URL(url);

  return (
    <section className="">
      {/* === Table body === */}
      <Table_body studentData={student_data.data} />
    </section>
  );
};

export default My_student_board;
