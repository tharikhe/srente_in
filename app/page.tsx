
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, Headphones, Award } from 'lucide-react';
import dynamic from 'next/dynamic';

const CategoryGrid = dynamic(() => import('@/components/CategoryGrid'));
const FeaturedProducts = dynamic(() => import('@/components/FeaturedProducts'));
const ProductShowcase = dynamic(() => import('@/components/ProductShowcase'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const AuthorisedLines = dynamic(() => import('@/components/AuthorisedLines'));

import { Suspense } from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Serente Electronics | Global Electronic Components Distributor",
  description: "Leading distributor of electronic components. Specializing in supply chain solutions, EV sector, automotive, medical, and IoT industries. ISO 9001:2015 Certified.",
};

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'ISO 9001:2015 certified with full traceability',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Global shipping with express options available',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team at your service',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive pricing with volume discounts',
      color: 'bg-amber-100 text-amber-600',
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
          line2: "Serente Electronics HK LTD"
        }}
        subtitle="We source top industrial electronic components globally, ensuring reliability and performance."
        buttons={{
          primary: { text: "Browse Catalog" },
          secondary: { text: "Upload BOM" }
        }}
      />

      <AuthorisedLines />

      {/* Features Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16 -mt-4 sm:-mt-6 relative z-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-soft border border-brand-border hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${feature.color} flex items-center justify-center mb-2 sm:mb-4`}>
              <feature.icon className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-brand-text mb-0.5 sm:mb-1 text-sm sm:text-base">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-brand-text-muted hidden sm:block">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Category Grid */}
      <CategoryGrid />

      {/* Product Showcase with Images */}
      <ProductShowcase />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Quick Links Section - Premium Redesign */}
      <section className="mb-10 sm:mb-16 relative">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-teal/10 to-brand-gold/10 rounded-full mb-4 border border-brand-teal/20">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-wider">Quick Access</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-text">
              Explore Our
              <span className="bg-gradient-to-r from-brand-teal to-brand-gold bg-clip-text text-transparent"> Services</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'New Arrivals',
                description: 'Check out the latest components added to our inventory',
                Icon: Truck,
                gradient: 'from-blue-500 via-cyan-500 to-teal-500',
                bgGlow: 'bg-blue-500/20',
                iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
                link: '/products',
                badge: 'FRESH',
                badgeColor: 'bg-blue-500'
              },
              {
                title: 'Hard to Find',
                description: 'Obsolete & specialty parts sourced globally',
                Icon: Shield,
                gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
                bgGlow: 'bg-emerald-500/20',
                iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
                link: '/products',
                badge: 'GLOBAL',
                badgeColor: 'bg-emerald-500'
              },
              {
                title: 'BOM Tool',
                description: 'Upload your BOM and get instant quotes',
                Icon: Award,
                gradient: 'from-brand-gold via-amber-500 to-orange-500',
                bgGlow: 'bg-brand-gold/20',
                iconBg: 'bg-gradient-to-br from-brand-gold to-amber-500',
                link: '/bom',
                badge: 'INSTANT',
                badgeColor: 'bg-brand-gold'
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative"
              >
                {/* Animated Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl blur-sm transition-all duration-500" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />

                {/* Card Container */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden group-hover:border-transparent group-hover:-translate-y-1 h-full flex flex-col">

                  {/* Background Glow on Hover */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${item.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 transform translate-x-8 -translate-y-8`} />

                  {/* Decorative Gradient Circle */}
                  <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full transform group-hover:scale-150 transition-transform duration-700`} />

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${item.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg`}>
                    {item.badge}
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-4 sm:mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <item.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 ${item.iconBg} rounded-xl sm:rounded-2xl opacity-30 animate-ping`} style={{ animationDuration: '2s' }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-brand-teal transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center gap-3 mt-auto">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
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
            Your trusted partner for electronic components distribution.
            We provide high-quality parts with full traceability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/products"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-glow-gold hover:scale-105"
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
