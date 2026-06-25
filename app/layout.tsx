import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lacquer Lounge by Sayani",
  description: "Luxury Nail Art & Beauty Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
