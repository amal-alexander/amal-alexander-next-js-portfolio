import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../../amal-alexander-next-js-portfolio/client/src/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amal Alexander Portfolio",
  description: "The portfolio of Amal Alexander, a software developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body className={`${inter.className} bg-black text-white`}><Navigation />{children}</body></html>
  );
}