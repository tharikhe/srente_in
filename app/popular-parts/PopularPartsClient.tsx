'use client';

import { products } from '@/data/products';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, TrendingUp } from 'lucide-react';

export default function PopularPartsClient() {
    // Simulate finding popular parts (e.g., first 20 items or filtered by some flag if available)
    // For now, let's take a mix of different categories
    const popularProducts = products
        .filter(p => p.inStock) // Only show in-stock items
        .slice(0, 24); // Show first 24 items as "Popular"

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Banner */}
            <section className="bg-[#EAEAEA] border border-gray-200 text-[#1A1A1A] rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden shadow-sm">
                <div className="max-w-3xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2DAA9E]/10 rounded-full text-[#2DAA9E] mb-4">
                        <TrendingUp className="w-4 h-4 text-[#2DAA9E]" />
                        <span className="text-xs font-bold uppercase tracking-wider">High Demand</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#1A1A1A]">
                        Popular <span className="text-[#2DAA9E]">Semiconductor Components</span>
                    </h1>
                    <p className="text-gray-700 text-base md:text-lg font-medium">
                        Our most requested electronic parts and semiconductor components, ready to ship today. Browse MOSFETs, ICs, diodes, capacitors, and more from Serente Electronics.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {popularProducts.map((product) => (
                    <div
                        key={product.partNumber}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col group"
                    >
                        {/* Category Badge */}
                        <div className="mb-4 flex justify-between items-start">
                            <span className={`px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider ${product.category === 'ICs' ? 'bg-blue-100 text-blue-600' :
                                product.category === 'Resistors' ? 'bg-green-100 text-green-600' :
                                    product.category === 'Capacitors' ? 'bg-orange-100 text-orange-600' :
                                        'bg-gray-100 text-gray-600'
                                }`}>
                                {product.category}
                            </span>
                            {product.inStock && (
                                <span className="text-xs text-brand-teal font-semibold flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></div>
                                    In Stock
                                </span>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-grow">
                            <h3 className="font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-1 truncate" title={product.partNumber}>
                                {product.partNumber}
                            </h3>
                            <p className="text-xs text-gray-500 mb-3 line-clamp-2 h-8">
                                {product.description}
                            </p>
                            {product.manufacturer && (
                                <p className="text-xs font-medium text-gray-400 mb-4">{product.manufacturer}</p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                            <Link href={`/products?search=${product.partNumber}`} className="text-sm font-bold text-brand-teal flex items-center gap-1 hover:gap-2 transition-all">
                                View Details <ArrowRight className="w-3 h-3" />
                            </Link>
                            <button className="w-8 h-8 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-brand-gold hover:text-gray-900 transition-colors">
                                <ShoppingCart className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Details */}
            <div className="text-center mt-12">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:border-brand-teal hover:text-brand-teal ring-4 ring-transparent hover:ring-brand-teal/5 transition-all shadow-sm hover:shadow-md"
                >
                    View Full Catalog <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}
