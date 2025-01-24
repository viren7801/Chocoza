import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
// pages/_app.js
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the FontAwesome styles
config.autoAddCss = false; // Disable the auto-adding of CSS by FontAwesome


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Chocoza",
  description:
    "Indulging in the art of homemade Chocolates🍫& Cupcakes🧁 Rich, and irresistibly sweet.Order yours today✨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
