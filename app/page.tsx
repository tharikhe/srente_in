
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import ProductShowcase from '@/components/ProductShowcase';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, Headphones, Award } from 'lucide-react';

import AuthorisedLines from '@/components/AuthorisedLines';

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

      {/* Quick Links Section */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-text mb-6 sm:mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: 'New Arrivals',
              description: 'Check out the latest components added to our inventory',
              icon: '🆕',
              gradient: 'from-blue-500 to-cyan-500',
              link: '/products'
            },
            {
              title: 'Hard to Find',
              description: 'Obsolete & specialty parts sourced globally',
              icon: '🔍',
              gradient: 'from-emerald-500 to-teal-500',
              link: '/products'
            },
            {
              title: 'BOM Tool',
              description: 'Upload your BOM and get instant quotes',
              icon: '📋',
              gradient: 'from-brand-gold to-amber-500',
              link: '/bom'
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-brand-border overflow-hidden"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500`} />

              <span className="text-2xl sm:text-4xl mb-2 sm:mb-4 block">{item.icon}</span>
              <h3 className="font-bold text-lg sm:text-xl text-brand-text mb-1 sm:mb-2 group-hover:text-brand-teal transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-text-muted text-xs sm:text-sm mb-2 sm:mb-4">{item.description}</p>
              <span className="text-brand-gold font-semibold text-xs sm:text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </Link>
          ))}
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
