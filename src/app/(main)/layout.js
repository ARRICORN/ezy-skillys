import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";

import NextAuthSessionProvider from "@/Provider/SessionProvider";
import nextAuthSessionProvider from '@/Provider/SessionProvider'
import { Fragment } from "react";


export default function MainLayout({ children }) {
  return (
    <main className="bg-white">
      <NavBar />
      <NextAuthSessionProvider>

        <div className="min-h-screen">
          {children}
        </div>
      </NextAuthSessionProvider>
      <Footer />
    </main>
  );
}
