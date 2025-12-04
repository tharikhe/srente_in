'use client';

import { getFeaturedProducts, Product } from '@/data/products';
import { ShoppingCart, FileText, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function FeaturedProducts() {
    // Initialize with empty array to match server render, then populate on client
    const [featured, setFeatured] = useState<Product[]>([]);
    const { addToCart } = useCart();
    const [addedItems, setAddedItems] = useState<string[]>([]);

    useEffect(() => {
        setFeatured(getFeaturedProducts(8));
    }, []);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        setAddedItems(prev => [...prev, product.partNumber]);
        setTimeout(() => {
            setAddedItems(prev => prev.filter(id => id !== product.partNumber));
        }, 2000);
    };

    return (
        <section className="mb-10 sm:mb-16">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-text">Featured Products</h2>
                    <p className="text-brand-text-muted mt-1 text-sm sm:text-base">Hand-picked components for your next project</p>
                </div>
                <Link
                    href="/products"
                    className="hidden sm:flex items-center gap-2 text-brand-gold hover:text-brand-gold-dark font-semibold transition-colors group"
                >
                    <span>View All</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {featured.map((product, index) => (
                    <div
                        key={`${product.partNumber}-${index}`}
                        className="group bg-white rounded-xl sm:rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden border border-brand-border hover:border-brand-gold"
                    >
                        {/* Category Badge */}
                        <div className="relative h-28 sm:h-48 bg-brand-surface border-b border-brand-border flex items-center justify-center p-2 sm:p-4 group-hover:bg-white transition-colors">
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                                <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-brand-teal text-white text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider shadow-sm">
                                    {product.category}
                                </span>
                            </div>
                            {product.inStock && (
                                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                                    <span className="hidden sm:flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                                        <Check className="w-3 h-3" />
                                        In Stock
                                    </span>
                                    <span className="sm:hidden w-2 h-2 bg-emerald-500 rounded-full"></span>
                                </div>
                            )}

                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.partNumber}
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                />
                            ) : (
                                <div className="text-center">
                                    <div className="w-10 h-10 sm:w-16 sm:h-16 bg-brand-border/30 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                                        <span className="text-lg sm:text-2xl font-bold text-brand-text-light">
                                            {product.partNumber.charAt(0)}
                                        </span>
                                    </div>
                                    <span className="text-[10px] sm:text-xs text-brand-text-muted font-mono">{product.partNumber.substring(0, 12)}</span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-3 sm:p-5">
                            {/* Part Number */}
                            <h3 className="font-mono text-xs sm:text-base font-bold text-brand-teal mb-1 sm:mb-2 group-hover:text-brand-gold transition-colors duration-200 tracking-tight truncate">
                                {product.partNumber}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-brand-text-muted line-clamp-2 mb-2 sm:mb-4 min-h-[32px] sm:min-h-[44px] leading-relaxed">
                                {product.description}
                            </p>

                            {/* Manufacturer - Hidden on mobile */}
                            {product.manufacturer && (
                                <div className="hidden sm:flex items-center gap-2 mb-4 pb-4 border-b border-brand-border">
                                    <span className="text-xs text-brand-text-light">Manufacturer:</span>
                                    <span className="text-xs font-semibold text-brand-text">{product.manufacturer}</span>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-2 sm:gap-3">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-200 text-xs sm:text-sm font-semibold group/btn ${addedItems.includes(product.partNumber)
                                        ? 'bg-emerald-500 text-white shadow-md'
                                        : 'bg-brand-gold text-white hover:bg-brand-gold-dark hover:shadow-glow-gold'
                                        }`}
                                >
                                    {addedItems.includes(product.partNumber) ? (
                                        <>
                                            <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span className="hidden sm:inline">Added</span>
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                                            <span className="hidden sm:inline">Add to Quote</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View All Button */}
            <div className="sm:hidden mt-8 text-center">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal text-white rounded-xl font-semibold hover:bg-brand-teal-dark transition-colors"
                >
                    <span>View All Products</span>
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
