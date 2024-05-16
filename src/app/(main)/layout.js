import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import Navbar from "@/Components/Shared/Navbar";
import { Fragment } from "react";

export default function MainLayout({ children }) {
  return (
    <div className="bg-white">
     <NavBar/>
      {children}
      <Footer />
    </div>
  );
}