import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import { Fragment } from "react";

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}