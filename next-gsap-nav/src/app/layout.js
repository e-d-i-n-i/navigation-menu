import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS x GSAP Responsive Navigation",
  description: "by Codegrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
