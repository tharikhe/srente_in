'use client';

import { categories, getProductsByCategory } from '@/data/products';
import { Cpu, Zap, CircuitBoard, Radio, Plug, Gauge, Shield, Volume2, Box, Layers } from 'lucide-react';
import Link from 'next/link';

const categoryIcons: { [key: string]: React.ReactNode } = {
    'Resistors': <Gauge className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Capacitors': <CircuitBoard className="w-6 h-6 sm:w-8 sm:h-8" />,
    'ICs': <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Diodes': <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Transistors': <Radio className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Connectors': <Plug className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Inductors': <Layers className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Protection': <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Audio': <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />,
    'Others': <Box className="w-6 h-6 sm:w-8 sm:h-8" />,
};

export default function CategoryGrid() {
    return (
        <section className="mb-10 sm:mb-16">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-text">Browse by Category</h2>
                    <p className="text-brand-text-muted mt-1 text-sm sm:text-base">Find components across all major categories</p>
                </div>
                <Link
                    href="/products"
                    className="hidden sm:flex items-center gap-2 text-brand-gold hover:text-brand-gold-dark font-semibold transition-colors group"
                >
                    <span>View All Products</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
                {categories.slice(0, 10).map((category, index) => {
                    const count = getProductsByCategory(category).length;
                    const Icon = categoryIcons[category] || <Box className="w-6 h-6 sm:w-8 sm:h-8" />;

                    return (
                        <Link
                            key={category}
                            href={`/products?category=${encodeURIComponent(category)}`}
                            className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-brand-border hover:border-brand-gold overflow-hidden"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Background Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />

                            <div className="relative flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-brand-surface flex items-center justify-center mb-2 sm:mb-4 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    {Icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-brand-text mb-0.5 sm:mb-1 group-hover:text-brand-teal transition-colors duration-200 text-sm sm:text-base">
                                    {category}
                                </h3>

                                {/* Count */}
                                <p className="text-xs sm:text-sm text-brand-text-muted">
                                    {count} products
                                </p>

                                {/* Hover Arrow - Hidden on mobile */}
                                <div className="hidden sm:block mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="text-brand-gold text-sm font-medium">Explore →</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Mobile View All Link */}
            <div className="sm:hidden mt-6 text-center">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal text-white rounded-xl font-semibold hover:bg-brand-teal-dark transition-colors"
                >
                    <span>View All Products</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
