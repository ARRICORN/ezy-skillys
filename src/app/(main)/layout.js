import Footer from "@/Components/Shared/Footer";
<<<<<<< HEAD
import NavBar from "@/Components/Shared/NavBar/NavBar";
=======
import Navbar from "@/Components/Shared/Navbar";
import NextAuthSessionProvider from "@/Provider/SessionProvider";
import nextAuthSessionProvider from '@/Provider/SessionProvider'
import { Fragment } from "react";
>>>>>>> e0d20f101bc1085c43e959a2589c733a7bf9eb70


export default function MainLayout({ children }) {
  return (
<<<<<<< HEAD
    <div className="bg-white">
      <NavBar />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
=======
    <main className="bg-white">
      <Navbar />
      <NextAuthSessionProvider>

        <div className="min-h-screen">
          {children}
        </div>
      </NextAuthSessionProvider>
      <Footer />
    </main>
>>>>>>> e0d20f101bc1085c43e959a2589c733a7bf9eb70
  );
}
