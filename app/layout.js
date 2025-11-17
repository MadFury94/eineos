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
  icons: {
    icon: [
      { url: '/IPOLogo.png?v=1' },
      { url: '/IPOLogo.png?v=1', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/IPOLogo.png?v=1',
    apple: '/IPOLogo.png?v=1',
  },
  openGraph: {
    title: "IPO Nigeria - Official Intellectual Property Office",
    description: "Register and manage trademarks, patents, and industrial designs with Nigeria's official IP office under the Federal Ministry of Industry, Trade & Investment.",
    url: 'https://your-domain.com',
    siteName: 'IPO Nigeria - Commercial Law Department',
    images: [
      {
        url: '/IPOLogo.png',
        width: 1200,
        height: 630,
        alt: 'IPO Nigeria - Federal Ministry of Industry Trade & Investment',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IPO Nigeria - Official Intellectual Property Office",
    description: "Register and manage trademarks, patents, and industrial designs with Nigeria's official IP office.",
    images: ['/IPOLogo.png'],
  },
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
