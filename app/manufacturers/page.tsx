'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import { manufacturers as authorisedLines } from '@/data/manufacturers';

export default function ManufacturersPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAuthorised = authorisedLines.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            } as const
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 pb-24">
            {/* Premium Hero Section */}
            <section className="relative py-24 md:py-32 bg-[#0F172A] overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-teal/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/20 rounded-full blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
                            Global Supply Chain Partners
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Authorised <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Distributors</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            We partner directly with world-class manufacturers to ensure 100% authenticity, full traceability, and reliable supply for your production needs.
                        </p>
                    </motion.div>

                    {/* Floating Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex items-center shadow-2xl">
                            <Search className="text-gray-400 w-6 h-6 ml-4" />
                            <input
                                type="text"
                                placeholder="Search our manufacturers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none text-white placeholder-gray-400 px-4 py-3 focus:ring-0 focus:outline-none text-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* List Section */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="flex items-center gap-3 mb-8 ml-2">
                    <div className="p-2 bg-brand-gold/10 rounded-lg">
                        <ShieldCheck className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Verified Partners</h2>
                    <span className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-2.5 py-1 rounded-full border border-brand-teal/20">
                        {filteredAuthorised.length} Brands
                    </span>
                </div>

                {filteredAuthorised.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredAuthorised.map((brand) => (
                            <motion.div key={brand.name} variants={itemVariants}>
                                <Link
                                    href={`/manufacturers/${brand.slug}`}
                                    className="group block h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 relative"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-5 h-5 text-brand-gold -translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
                                    </div>

                                    <div className="p-8">
                                        <div className="h-24 w-full relative mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                fill
                                                className="object-contain object-left md:object-center"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-teal transition-colors">
                                                {brand.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                                {brand.description}
                                            </p>

                                            <div className="pt-4 flex items-center gap-2">
                                                <div className="h-px flex-1 bg-gray-100 group-hover:bg-brand-gold/20 transition-colors" />
                                                <span className="text-xs font-semibold text-brand-teal bg-brand-teal/5 px-2 py-1 rounded border border-brand-teal/10 group-hover:bg-brand-gold/10 group-hover:text-brand-gold group-hover:border-brand-gold/20 transition-all">
                                                    {brand.country}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm"
                    >
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No manufacturers found</h3>
                        <p className="text-gray-500">
                            We couldn't find any verified partners matching "{searchQuery}".
                        </p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-6 text-brand-teal font-medium hover:text-brand-gold transition-colors"
                        >
                            View all manufacturers
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
