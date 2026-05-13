import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Overseas Holiday Solutions",
  description: "Explore beautiful places and tailored destinations just for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
