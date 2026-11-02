import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Chocoza | Handcrafted Chocolates & Bakes",
    template: "%s | Chocoza",
  },
  description:
    "Discover handcrafted chocolates, NYC-style cookies, brownies and custom gift hampers from Chocoza in Navsari, Gujarat. Browse the collection and order on WhatsApp for local pickup.",
  keywords: [
    "Chocoza",
    "homemade chocolates Navsari",
    "NYC cookies Navsari",
    "brownies Navsari",
    "custom chocolate hampers",
  ],
  openGraph: {
    title: "Chocoza | A little piece of happiness",
    description: "Handcrafted chocolates and bakes, made with love in Navsari.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className + " " + dmSans.variable + " " + playfair.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
