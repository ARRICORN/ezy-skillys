import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
}
