import { Geist, Geist_Mono, Outfit  } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IPO Nigeria - Intellectual Property Office Nigeria | Trademarks, Patents & Industrial Designs",
  description: "Official digital platform for Nigeria's Intellectual Property Office. Register and manage trademarks, patents, and industrial designs online. Protect your innovations with Nigeria's trusted IP registration system under the Federal Ministry of Industry, Trade and Investment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className} suppressHydrationWarning={true}
      >
        <Header/>{children}<Footer/>
      </body>
    </html>
  );
}
