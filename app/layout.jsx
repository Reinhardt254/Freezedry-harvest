import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "../styles/global.css";
import "../styles/home.css";
import "../styles/footer.css";
import "../styles/navbar.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Freeze dry epz",
  description: "Freeze dry epz Naivasha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
