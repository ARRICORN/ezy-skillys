import NextUi_Provider from "@/Components/Shared/NextUiProvider";
import SidebarComponent from "@/Components/dashboard/both_user/Sidebar/SidebarComponent";
import Top_header from "@/Components/dashboard/both_user/top-header/Top_header";
import { Toaster } from "react-hot-toast";

const layout = ({ children }) => {
  return (
    <div className="flex justify-start ">
      <SidebarComponent />

      <div className="w-full mr-8">
        {/* === top header === */}
        <Top_header />

        {/* === all children will render here from dashboard === */}
        <NextUi_Provider>{children}</NextUi_Provider>
        {/* <Toaster /> */}
      </div>
    </div>
  );
};

export default layout;
