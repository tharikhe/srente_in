import HeroSection from '@/components/HeroSection';
import IndustrialAbout from '@/components/IndustrialAbout';
import HomeCapabilities from '@/components/HomeCapabilities';
import HomeIndustries from '@/components/HomeIndustries';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { ArrowRight, Zap, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Serente Electronics | Leading ESDM Company",
  description: "Leading electronic components distributor and IoT solutions manufacturer. ISO 9001:2015 Certified.",
};

export default function Home() {
  return (
    <div className="w-full bg-[#EAEAEA]">
      {/* 1. Cinematic Hero & Ticker */}
      <HeroSection />

      {/* 2. Industrial About Section (Split Layout) */}
      <IndustrialAbout />

      {/* 3. Core Capabilities */}
      <HomeCapabilities />

      {/* 4. Industries Served */}
      <HomeIndustries />

      {/* 5. Call to Action / Services */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between p-12 bg-gradient-to-r from-[#2DAA9E] to-[#1d7068] rounded-sm shadow-2xl">
                <div className="mb-8 md:mb-0 max-w-2xl">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                        ACCELERATE YOUR SUPPLY CHAIN
                    </h2>
                    <p className="font-mono text-sm text-white/90 leading-relaxed max-w-lg">
                        Upload your Bill of Materials (BOM) to our automated platform for instant pricing, cross-reference alternatives, and lifecycle data from our global network.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/bom" className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4 font-display font-bold uppercase tracking-widest transition-all duration-300">
                        Launch BOM Tool <Zap className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-4 font-display font-bold uppercase tracking-widest transition-all duration-300">
                        Contact Sales <Phone className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* 4. FAQ / Inquiries */}
      <FAQ />
    </div>
  );
}
