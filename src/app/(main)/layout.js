import Footer from "@/Components/Shared/Footer";
<<<<<<< HEAD
import Navbar from "@/Components/Shared/Navbar";
import NextAuthSessionProvider from "@/Provider/SessionProvider";
import nextAuthSessionProvider from '@/Provider/SessionProvider'
import { Fragment } from "react";
=======
import NavBar from "@/Components/Shared/NavBar/NavBar";
>>>>>>> 6294839d29dccb648a68dfc526b52234eb042b26


export default function MainLayout({ children }) {
  return (
<<<<<<< HEAD
    <main className="bg-white">
      <Navbar />
      <NextAuthSessionProvider>

        <div className="min-h-screen">
          {children}
        </div>
      </NextAuthSessionProvider>
      <Footer />
    </main>
=======
    <div className="bg-white">
      <NavBar />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
>>>>>>> 6294839d29dccb648a68dfc526b52234eb042b26
  );
}
