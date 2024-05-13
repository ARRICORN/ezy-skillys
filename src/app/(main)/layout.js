import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import { Fragment } from "react";

export default function MainLayout({ children }) {
  return (
    <main className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}