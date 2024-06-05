import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "../styles/global.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/fruits.css";
import "../styles/herbs.css";
import "../styles/leafyGreens.css";
import "../styles/footer.css";
import "../styles/navbar.css";

const poppins = Poppins({ subsets: ["latin"],  weight: "300" });

export const metadata = {
  title: "Freeze dry epz",
  description: "Freeze dry epz Naivasha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <navbar>
          <Navbar />
        </navbar>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
