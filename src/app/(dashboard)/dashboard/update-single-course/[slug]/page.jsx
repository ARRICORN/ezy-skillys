import Update_single_course from "@/Components/dashboard/updata-signle-course/Updata_single_course";
import style from "./style.module.css";

const page = ({ params }) => {
  return (
    <div className={`${style.bg_image}`}>
      <div className="h-[87vh] overflow-auto no-scrollbar">
        <Update_single_course params_id={params?.slug} />
      </div>
    </div>
  );
};

export default page;
