import type { Metadata } from "next";
import { Inter, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const fontSpaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"], 
});


const fontOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fauzan | Web Developer",
  description: "Portfolio of Fauzan Azhima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="id" 
   
      className={`${fontInter.variable} ${fontSpaceMono.variable} ${fontOutfit.variable} h-full antialiased scroll-smooth`}
    > 
      <body className="min-h-full flex flex-col bg-void text-ink font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
