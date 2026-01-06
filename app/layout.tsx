import type { Metadata } from "next";
import Script from "next/script";
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
  keywords: "SUPPLY CHAIN, EV SECTOR, AUTOMOTIVE INDUSTRY, RAILWAYS, IOT, MEDICAL INDUSTRY, NETWORK CABLES, LIGHTING INDUSTRY, LEDS, LCDS, ELECTRONIC COMPONENTS DISTRIBUTOR HONGKONG, ELECTRONIC COMPONENTS DISTRIBUTOR INDIA, ANTENK CONNECTORS, GREENCON CONNECTORS, ORABO CONNECTORS, YM DISPLAYS, GL FIBRE CABLES, ISOCOM OPTOCOUPLERS, TOPDIODE DIODE, JB CAPACITORS, SONYTEK DISPLAYS, YEEBO DISPLAYS, DWIN DISPLAYS, SCONDAR CONNECTORS, SERENTE ELECTRONICS HK LTD, AUTHORISED DISTRIBUTOR, GLOBAL SOURCING, INVENTORY MANAGEMENT, ABSOLUTE COMPONENTS, OEM & ODM",
  verification: {
    google: "_u8APxPK3cf1IIjlGr6bwENduySXwnwunSNU8J4fn-A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-brand-surface text-brand-text min-h-screen flex flex-col antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8PTNK3L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N8PTNK3L');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G2DREGRF1CB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2DREGRF1CB');
          `}
        </Script>
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
