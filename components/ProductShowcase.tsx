'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Package, Shield, ChevronRight } from 'lucide-react';

const productShowcase = [
    {
        id: 1,
        title: 'Board-to-Board Connectors',
        description: 'High-quality SMD connectors for reliable PCB connections',
        image: '/products-img/board-to-board-connector.webp',
        category: 'Connectors',
        stats: '500+ SKUs',
        accent: '#2DAA9E',
    },
    {
        id: 2,
        title: 'Power Inductors',
        description: 'SMD inductors for power management applications',
        image: '/products-img/power-inductor.jpg',
        category: 'Inductors',
        stats: '1000+ SKUs',
        accent: '#F39800',
    },
    {
        id: 3,
        title: 'Automotive Connectors',
        description: 'Rugged connectors for automotive and industrial use',
        image: '/products-img/automotive -connector.jpg',
        category: 'Automotive',
        stats: '300+ SKUs',
        accent: '#448ACA',
    },
    {
        id: 4,
        title: 'Tactile Switches',
        description: 'Precision switches for consumer electronics',
        image: '/products-img/tackle switch.webp',
        category: 'Switches',
        stats: '200+ SKUs',
        accent: '#2DAA9E',
    },
];

export default function ProductShowcase() {
    return (
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 rounded-full mb-4">
                        <Package className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm font-semibold text-brand-teal uppercase tracking-wider">Our Products</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Premium Electronic
                        <span className="bg-gradient-to-r from-brand-teal to-brand-gold bg-clip-text text-transparent"> Components</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore our extensive range of high-quality electronic components from trusted manufacturers worldwide
                    </p>
                </div>

                {/* Product Grid — Reference card design */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {productShowcase.map((product) => (
                        <Link
                            href="/products"
                            key={product.id}
                            className="group relative block"
                        >
                            {/* Card Shell */}
                            <div className="relative bg-white rounded-sm overflow-hidden shadow-[0_1px_13px_rgba(0,0,0,0.1)] transition-all duration-200 active:scale-[0.98] h-[330px] sm:h-[370px] flex flex-col">
                                {/* Image Area */}
                                <div className="relative flex-grow bg-[#f1f1f1] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        loading="lazy"
                                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Category Badge */}
                                    <div
                                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-sm"
                                        style={{ backgroundColor: product.accent }}
                                    >
                                        {product.category}
                                    </div>
                                </div>

                                {/* Bottom Info */}
                                <div className="px-4 py-3 pb-5 relative z-10 bg-white">
                                    <h3 className="text-sm font-semibold text-[#1A1A1A] leading-snug group-hover:text-[#2DAA9E] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                        {product.description}
                                    </p>
                                    <span
                                        className="inline-block mt-1.5 text-xs font-extrabold tracking-wide"
                                        style={{ color: product.accent }}
                                    >
                                        {product.stats}
                                    </span>
                                </div>

                                {/* Slide-up CTA on Hover */}
                                <div
                                    className="absolute left-0 bottom-0 w-full flex items-center gap-2 px-4 pt-3 pb-3 text-white text-sm font-bold uppercase tracking-wider translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-out"
                                    style={{ backgroundColor: product.accent }}
                                >
                                    <span>View Products</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Full Width Feature Image - Massive Inventory */}
                <div className="mt-12 sm:mt-16 relative">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E3D2C3]/35 border border-[#E3D2C3]/60 p-6 sm:p-10 lg:p-12 shadow-sm">
                        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
                            {/* Content Side */}
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center px-3.5 py-1.5 bg-white/90 border border-[#2DAA9E]/30 rounded-full mb-5">
                                    <span className="text-xs font-bold text-[#2DAA9E] uppercase tracking-wider">Ready to Ship Globally</span>
                                </div>

                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-4">
                                    Massive <span className="text-[#2DAA9E]">Inventory</span>
                                </h3>

                                <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed font-medium">
                                    With over 50,000+ SKUs in stock, we have the components you need, when you need them.
                                </p>

                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2DAA9E] hover:bg-[#258B82] text-white rounded-xl font-bold transition-all duration-300 shadow-md group"
                                >
                                    <span>Explore Products</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Image Side */}
                            <div className="relative h-64 sm:h-80 lg:h-[380px] order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg border border-white">
                                <Image
                                    src="/products-img/inventory.jpg"
                                    alt="Electronic Components Inventory"
                                    fill
                                    loading="lazy"
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                    <div className="w-2 h-2 rounded-full bg-white/60" />
                                    <div className="w-2 h-2 rounded-full bg-white/60" />
                                    <div className="w-5 h-2 rounded-full bg-[#2DAA9E]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

