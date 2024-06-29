import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import NextUi_Provider from "@/Components/Shared/NextUiProvider";
import ClientScrollToTop from "@/Components/Ui/ScrollToTop";

import NextAuthSessionProvider from "@/Provider/SessionProvider";
import nextAuthSessionProvider from '@/Provider/SessionProvider'
import { Fragment } from "react";


export default function MainLayout({ children }) {
  return (
    <main >

      <NavBar />
      <div className=" container mx-auto">

        <NextAuthSessionProvider>

          <div className="min-h-screen">
            <NextUi_Provider>
              {children}
            </NextUi_Provider>
          </div>
        </NextAuthSessionProvider>
      </div>
      <ClientScrollToTop />
      <Footer />
    </main>
  );
}
