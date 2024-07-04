"use client";

import { useState, useEffect } from "react";

import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import NextUi_Provider from "@/Components/Shared/NextUiProvider";
import ClientScrollToTop from "@/Components/Ui/ScrollToTop";

import NextAuthSessionProvider from "@/Provider/SessionProvider";
import nextAuthSessionProvider from "@/Provider/SessionProvider";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <main>
      <NavBar />
      <div className=" container mx-auto">
        <NextAuthSessionProvider>
          <div className="min-h-screen">
            <NextUi_Provider>{children}</NextUi_Provider>
          </div>
        </NextAuthSessionProvider>
      </div>
      <ClientScrollToTop />
      {/* <Toaster /> */}
      <Footer />
    </main>
  );
}
