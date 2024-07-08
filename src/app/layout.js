import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/Provider/SessionProvider";
import { Toaster } from "react-hot-toast";
import TanstackProvider from "../Provider/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${poppins.variable} ${montserrat.variable}`}
      >
        <TanstackProvider>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </TanstackProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
