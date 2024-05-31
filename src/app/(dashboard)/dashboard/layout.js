import SidebarComponent from "@/components/dashboard/Sidebar/SidebarComponent";
import Top_header from "@/components/dashboard/top-header/Top_header";

const layout = ({ children }) => {
  return (
    <div className="flex justify-start">
      <SidebarComponent />

      <div className="w-full">
        {/* === top header === */}
        <Top_header />

        {/* === all children will render here from dashboard === */}
        {children}
      </div>
    </div>
  );
};

export default layout;
