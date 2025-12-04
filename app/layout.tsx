import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import Chatbot from "@/components/Chatbot";
import { CartProvider } from "@/context/CartContext";

import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Serente Electronics - Premium Electronic Components Distributor",
  description: "Your trusted partner for electronic components distribution. Browse our extensive inventory of ICs, capacitors, resistors, and more.",
  keywords: "electronic components, ICs, capacitors, resistors, semiconductors, distributor, electronics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-brand-surface text-brand-text min-h-screen flex flex-col antialiased`}>
        <CartProvider>
          <SmoothScroll />
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Chatbot />
          <FloatingMenu />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
