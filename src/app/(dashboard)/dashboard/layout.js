import NextUi_Provider from "@/Components/Shared/NextUiProvider";
import SidebarComponent from "@/components/dashboard/Sidebar/SidebarComponent";
import Top_header from "@/components/dashboard/top-header/Top_header";
import { Toaster } from "react-hot-toast";

const layout = ({ children }) => {
  return (
    <div className="flex justify-start">
      <SidebarComponent />

      <div className="w-full">
        {/* === top header === */}
        <Top_header />

        {/* === all children will render here from dashboard === */}
        <NextUi_Provider>{children}</NextUi_Provider>
        <Toaster />
      </div>
    </div>
  );
};

export default layout;
