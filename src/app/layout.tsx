import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Gazelle Times - Fast Times in a Shell",
  description:
    "The Gazelle Times is a news and media company that publishes content geared towards the youth; tech, entertainment, health, economy & sports.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-5">
          <Navbar />
          {children}
        </div>
        <footer className="footer footer-center p-4 bg-slate-900 text-white">
          <aside>
            <p>Copyright © 2024 - All right reserved by Gazelle Digital</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
