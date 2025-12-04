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
        image: '/products/connectors-white.jpg',
        category: 'Connectors',
        stats: '500+ SKUs',
    },
    {
        id: 2,
        title: 'Power Inductors',
        description: 'SMD inductors for power management applications',
        image: '/products/inductors.jpg',
        category: 'Inductors',
        stats: '1000+ SKUs',
    },
    {
        id: 3,
        title: 'Automotive Connectors',
        description: 'Rugged connectors for automotive and industrial use',
        image: '/products/connectors-auto.jpg',
        category: 'Automotive',
        stats: '300+ SKUs',
    },
    {
        id: 4,
        title: 'Tactile Switches',
        description: 'Precision switches for consumer electronics',
        image: '/products/switches.jpg',
        category: 'Switches',
        stats: '200+ SKUs',
    },
];

export default function ProductShowcase() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

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

                {/* Product Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {productShowcase.map((product) => (
                        <Link
                            href="/products"
                            key={product.id}
                            className="group relative h-full block"
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-teal/30 h-full flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50 flex-shrink-0">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-brand-teal shadow-sm">
                                        {product.category}
                                    </div>

                                    {/* Stats Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-brand-gold/90 backdrop-blur-sm rounded-full text-xs font-bold text-white shadow-sm">
                                        {product.stats}
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-brand-teal/90 via-brand-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6`}>
                                        <span className="flex items-center gap-2 text-white font-semibold">
                                            View Products <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>

                                    {/* Arrow Link */}
                                    <div className="mt-4 flex items-center text-brand-teal font-semibold text-sm">
                                        <span>Explore</span>
                                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Full Width Feature Image */}
                <div className="mt-16 sm:mt-20 relative">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                        <div className="grid lg:grid-cols-2 items-center">
                            {/* Content Side */}
                            <div className="p-8 sm:p-12 lg:p-16 order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
                                    <Zap className="w-4 h-4 text-brand-gold" />
                                    <span className="text-sm font-semibold text-brand-gold uppercase tracking-wider">Massive Inventory</span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                                    Over 50,000+ Components
                                    <span className="block text-brand-gold">Ready to Ship</span>
                                </h3>

                                <p className="text-gray-300 mb-8 text-lg">
                                    From passive components to complex ICs, we stock everything you need for your electronic projects. Fast worldwide shipping guaranteed.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {[
                                        { icon: Shield, text: 'Quality Assured' },
                                        { icon: Package, text: 'Fast Shipping' },
                                        { icon: Zap, text: 'Best Prices' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-400">
                                            <item.icon className="w-4 h-4 text-brand-gold" />
                                            <span className="text-sm">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30 group"
                                >
                                    <span>Browse All Products</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Image Side */}
                            <div className="relative h-64 sm:h-80 lg:h-[500px] order-1 lg:order-2">
                                <Image
                                    src="/products/components-mix.png"
                                    alt="Electronic Components"
                                    fill
                                    className="object-contain lg:object-cover object-right-bottom"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent lg:block hidden" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
