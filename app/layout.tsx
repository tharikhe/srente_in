import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import Chatbot from "@/components/Chatbot";
import Schema from "@/components/Schema";
import { CartProvider } from "@/context/CartContext";

import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.serentehk.com'),
  title: "Serente Electronics | Top Semiconductor Distributors Hong Kong | Electronic Components Supplier",
  description: "Serente Electronics Hong Kong — leading semiconductor distributors and electronic components supplier. Authorized distributor of integrated circuits, MOSFETs, IGBTs, diodes, transistors, passive components, LCD/OLED displays, connectors and cable harnessing solutions. OEM & ODM semiconductor distribution company in Hong Kong. ISO 9001:2015 Certified.",
  keywords: [
    // Primary Keywords
    'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'semiconductor distributors hong kong price',
    'semiconductor distributors hong kong address', 'semiconductor distributors hong kong contact number',
    'electronic component distributor Hong Kong', 'OEM & ODM', 'Resistor and Condenser',
    'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers',
    // Partner Brands
    'Firstohm', 'Octea', 'GL Fiber', 'VITEK', 'Sonytek', 'Kingtronics', 'Palm Technology', 'Taimates',
    'Isocom', 'Greenconn', 'JB Capacitors', 'Disen', 'Hongda', 'Microtech', 'Romtronic', 'Smico',
    'Wipin', 'Yeebo', 'YM Tech',
    // Long-tail Keywords
    'semiconductor companies in hong kong', 'hong kong semiconductor distributor', 'semiconductor distributor',
    'semiconductor distributors', 'semiconductor distribution companies hong kong',
    'OEM semiconductor distributor', 'industrial semiconductor supplier', 'semiconductor components supplier',
    'best semiconductor components suppliers', 'best industrial semiconductor suppliers',
    'semiconductor distribution company hong kong', 'semiconductor distribution companies in hong kong',
    'electronic components distributors in hong kong', 'best electronic components distributors',
    'best electronic components distributors in hong kong', 'semiconductor distributors in hong kong',
    'electronic components supply company', 'electronics procurement services',
    'BOM sourcing and electronics supply', 'electronics supply chain partner',
    'OEM electronics sourcing solutions', 'electronics parts procurement company',
    'global electronics sourcing services', 'electronics vendor management services',
    'custom electronics solutions provider', 'procurement and supply electronics solutions',
    // Branded Keywords
    'serente electronics hong kong', 'serente electronics pvt ltd', 'serente electronics hk',
    'serente electronics private limited', 'serente electronics',
    // Product & Distribution Keywords
    'electronic components distribution', 'semiconductor products distribution',
    'authorized semiconductor distributor', 'industrial & electronic systems solutions',
    'connector & cable harnessing solutions', 'integrated circuits', 'optocoupler transistor',
    'semiconductor discrete parts', 'MOSFETs', 'IGBTs', 'diodes', 'transistors',
    'passive components', 'capacitors', 'resistors', 'inductors',
    'LCD displays', 'OLED displays', 'touch panels',
    'semiconductor components', 'semiconductor devices', 'electronic components supplier',
    'semiconductor distributor', 'integrated circuits ICs', 'power semiconductor devices',
    'discrete semiconductor components', 'semiconductor manufacturing', 'MOSFET transistor', 'IGBT module',
    'power MOSFET', 'NPN transistor', 'PNP transistor', 'Schottky diode', 'Zener diode',
    'rectifier diode', 'silicon diode', 'microcontroller IC', 'microprocessor chip',
    'analog IC', 'digital IC', 'power management IC PMIC', 'RF IC', 'logic IC', 'memory IC',
    'power semiconductor module', 'high voltage semiconductor', 'power rectifier module',
    'thyristor module', 'silicon controlled rectifier SCR', 'triac',
    // Industry & Application Keywords
    'automotive semiconductor components', 'industrial semiconductor devices',
    'semiconductor for EV', 'semiconductor for solar inverter', 'semiconductor for telecom equipment',
    'semiconductor for consumer electronics', 'semiconductor for IoT devices',
    'buy semiconductor components online', 'semiconductor components wholesale',
    'semiconductor components price list', 'semiconductor components manufacturer',
    'bulk semiconductor components', 'semiconductor components suppliers',
    'semiconductor components distributors in Hong Kong', 'semiconductor components manufacturers',
    'semiconductor components exporters',
    // Advanced Technology Keywords
    'SiC MOSFET', 'GaN semiconductor devices', 'wide bandgap semiconductors',
    'automotive grade semiconductor', 'AI chip components', 'power electronics semiconductor',
    // Legacy Keywords
    'supply chain', 'EV sector', 'automotive industry', 'railways', 'IoT', 'medical industry',
    'network cables', 'lighting industry', 'LEDs', 'LCDs',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Serente Electronics | Top Semiconductor Distributors Hong Kong',
    description: 'Leading electronic components distributor and authorized semiconductor supplier in Hong Kong. MOSFETs, IGBTs, ICs, passive components, connectors & more. ISO 9001:2015 Certified.',
    url: 'https://www.serentehk.com',
    siteName: 'Serente Electronics',
    locale: 'en_US',
    type: 'website',
  },
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
        <Schema />
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
