import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import NextAuthSessionProvider from "@/Provider/SessionProvider";
import nextAuthSessionProvider from '@/Provider/SessionProvider'
import { Fragment } from "react";


export default function MainLayout({ children }) {
  return (
    <main className="bg-white">
      <Navbar />
      <NextAuthSessionProvider>
        
        {children}
      </NextAuthSessionProvider>
      <Footer />
    </main>
  );
}