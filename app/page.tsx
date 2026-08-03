
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, Headphones, Award } from 'lucide-react';
import dynamic from 'next/dynamic';

const CategoryGrid = dynamic(() => import('@/components/CategoryGrid'));
const FeaturedProducts = dynamic(() => import('@/components/FeaturedProducts'));
const ProductShowcase = dynamic(() => import('@/components/ProductShowcase'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const ProductBannerSlider = dynamic(() => import('@/components/ProductBannerSlider'));

import { Suspense } from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Serente Electronics | Electronics Manufacturing Services & Component Solutions",
  description: "Leading electronic components distributor and EMS solutions provider. Specializing in supply chain solutions, EV sector, automotive and IoT industries. ISO 9001:2015 Certified.",
  keywords: ['electronic component distributor', 'OEM & ODM', 'Resistor and Condenser', 'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers', 'serente electronics pvt ltd', 'serente electronics', 'authorized semiconductor distributor', 'buy semiconductor components online', 'Firstohm', 'Octea', 'GL Fiber', 'VITEK', 'Sonytek', 'Kingtronics', 'Palm Technology', 'Taimates', 'Isocom', 'Greenconn', 'JB Capacitors', 'Disen', 'Hongda', 'Microtech', 'Romtronic', 'Smico', 'Wipin', 'Yeebo', 'YM Tech', 'semiconductor distributor', 'semiconductor distributors', 'OEM semiconductor distributor', 'industrial semiconductor supplier', 'semiconductor components supplier', 'best semiconductor components suppliers', 'best industrial semiconductor suppliers', 'best electronic components distributors', 'electronic components supply company', 'electronics procurement services', 'industrial electronics supplier', 'BOM sourcing and electronics supply', 'electronics supply chain partner', 'OEM electronics sourcing solutions', 'electronics parts procurement company', 'global electronics sourcing services', 'electronics vendor management services', 'custom electronics solutions provider', 'procurement and supply electronics solutions', 'electronic components distribution', 'semiconductor products distribution', 'industrial & electronic systems solutions', 'connector & cable harnessing solutions', 'integrated circuits', 'optocoupler transistor', 'semiconductor discrete parts', 'MOSFETs', 'IGBTs', 'diodes', 'transistors', 'passive components', 'capacitors', 'resistors', 'inductors', 'LCD displays', 'OLED displays', 'touch panels', 'semiconductor components', 'semiconductor devices', 'power semiconductor devices', 'discrete semiconductor components', 'semiconductor manufacturing', 'MOSFET transistor', 'IGBT module', 'power MOSFET', 'NPN transistor', 'PNP transistor', 'Schottky diode', 'Zener diode', 'rectifier diode', 'silicon diode', 'microcontroller IC', 'microprocessor chip', 'analog IC', 'digital IC', 'power management IC PMIC', 'RF IC', 'logic IC', 'memory IC', 'power semiconductor module', 'high voltage semiconductor', 'power rectifier module', 'thyristor module', 'silicon controlled rectifier SCR', 'triac', 'automotive semiconductor components', 'industrial semiconductor devices', 'semiconductor for EV', 'semiconductor for solar inverter', 'semiconductor for telecom equipment', 'semiconductor for consumer electronics', 'semiconductor for IoT devices', 'semiconductor components wholesale', 'semiconductor components price list', 'semiconductor components manufacturer', 'bulk semiconductor components', 'semiconductor components suppliers', 'semiconductor components manufacturers', 'semiconductor components exporters', 'SiC MOSFET', 'GaN semiconductor devices', 'wide bandgap semiconductors', 'automotive grade semiconductor', 'AI chip components', 'power electronics semiconductor'],
};

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'ISO 9001:2015 certified authorized semiconductor distributor with full traceability',
      color: 'bg-[#2DAA9E]/10 text-[#2DAA9E]',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Global semiconductor components shipping with express options available',
      color: 'bg-[#2DAA9E]/10 text-[#2DAA9E]',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team at your service',
      color: 'bg-[#2DAA9E]/10 text-[#2DAA9E]',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive semiconductor components pricing with volume discounts',
      color: 'bg-[#2DAA9E]/10 text-[#2DAA9E]',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with 3D Animation */}
      <HeroSection
        trustBadge={{
          text: "ISO 9001:2015 Certified Distributor",
          icons: [<span key="1">★</span>, <span key="2">★</span>, <span key="3">★</span>]
        }}
        headline={{
          line1: "Welcome To",
          line2: "Serente Electronics"
        }}
        subtitle="We source top industrial electronic components globally, ensuring reliability and performance."
      />

      {/* Product Banner Slider */}
      <ProductBannerSlider />

      {/* Features Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16 mt-8 relative z-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-sm border border-[#EAEAEA] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 sm:gap-4"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
              <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] mb-0.5 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-xs text-gray-500 hidden sm:block">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Category Grid */}
      <CategoryGrid />

      {/* Product Showcase with Images */}
      <ProductShowcase />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Quick Links Section - Redesign */}
      <section className="mb-10 sm:mb-16 relative">
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2DAA9E]/10 rounded-full mb-4 border border-[#2DAA9E]/20">
              <div className="w-2 h-2 bg-[#2DAA9E] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#2DAA9E] uppercase tracking-wider">Quick Access</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Explore Our
              <span className="text-[#2DAA9E]"> Services</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'New Arrivals',
                description: 'Check out the latest components added to our inventory',
                Icon: Truck,
                gradient: 'from-[#2DAA9E] to-[#66D2CE]',
                bgGlow: 'bg-[#2DAA9E]/10',
                iconBg: 'bg-[#2DAA9E]',
                link: '/products',
                badge: 'FRESH',
                badgeColor: 'bg-[#2DAA9E]'
              },
              {
                title: 'Hard to Find',
                description: 'Obsolete & specialty parts sourced globally',
                Icon: Shield,
                gradient: 'from-[#2DAA9E] to-[#66D2CE]',
                bgGlow: 'bg-[#2DAA9E]/10',
                iconBg: 'bg-[#2DAA9E]',
                link: '/products',
                badge: 'GLOBAL',
                badgeColor: 'bg-[#2DAA9E]'
              },
              {
                title: 'BOM Tool',
                description: 'Upload your BOM and get instant quotes',
                Icon: Award,
                gradient: 'from-[#2DAA9E] to-[#66D2CE]',
                bgGlow: 'bg-[#2DAA9E]/10',
                iconBg: 'bg-[#2DAA9E]',
                link: '/bom',
                badge: 'INSTANT',
                badgeColor: 'bg-[#2DAA9E]'
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-[#EAEAEA] overflow-hidden group-hover:-translate-y-1 h-full flex flex-col">

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${item.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm`}>
                    {item.badge}
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-4 sm:mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-500`}>
                      <item.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg sm:text-xl text-[#1A1A1A] mb-2 group-hover:text-[#2DAA9E] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center gap-3 mt-auto">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2DAA9E] text-white text-xs font-semibold rounded-full shadow-sm group-hover:bg-[#258B82] transition-all duration-300">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <section className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white p-6 sm:p-12 md:p-16 mb-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-xl text-white/80 mb-6 sm:mb-10 leading-relaxed">
            Your trusted semiconductor distributors and electronic components supplier.
            We provide high-quality semiconductor devices with full traceability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/products"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-glow-gold hover:scale-105"
            >
              Browse Catalog
            </Link>
            <Link
              href="/bom"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 hover:scale-105"
            >
              Upload BOM
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-teal rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
