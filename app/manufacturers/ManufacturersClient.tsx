'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import { manufacturers as authorisedLines } from '@/data/manufacturers';

const Pin = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
    </svg>
);

const themeStyles = [
    {
        bg: "bg-[#2DAA9E]/10",
        text: "text-[#2DAA9E]",
        border: "border-[#2DAA9E]/25",
        rotate: "hover:rotate-2",
    },
    {
        bg: "bg-[#F39800]/10",
        text: "text-[#F39800]",
        border: "border-[#F39800]/25",
        rotate: "hover:-rotate-2",
    },
    {
        bg: "bg-[#1A1A1A]/5",
        text: "text-[#1A1A1A]",
        border: "border-[#1A1A1A]/15",
        rotate: "hover:rotate-1",
    },
    {
        bg: "bg-[#2DAA9E]/10",
        text: "text-[#2DAA9E]",
        border: "border-[#2DAA9E]/25",
        rotate: "hover:-rotate-1",
    },
];

export default function ManufacturersClient() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAuthorised = authorisedLines.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
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
        <div className="min-h-screen bg-[#F8FAFC] pb-24">
            {/* Premium Hero Section */}
            <section className="relative py-20 md:py-28 bg-[#EAEAEA] border-b border-gray-200 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3.5 rounded-full bg-[#2DAA9E]/10 border border-[#2DAA9E]/20 text-[#2DAA9E] text-xs font-bold uppercase tracking-wider mb-4">
                            Global Supply Chain Partners
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] mb-6 leading-tight">
                            Authorised <span className="text-[#2DAA9E]">Line Card</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
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
                        <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-2 flex items-center shadow-xl">
                            <Search className="text-gray-400 w-6 h-6 ml-4" />
                            <input
                                type="text"
                                placeholder="Search line card manufacturers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none text-[#1A1A1A] placeholder-gray-400 px-4 py-3 focus:ring-0 focus:outline-none text-base sm:text-lg font-medium"
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
                    <h2 className="text-2xl font-bold text-gray-900">Verified Line Card Partners</h2>
                    <span className="bg-brand-teal/10 text-brand-teal text-xs font-bold px-2.5 py-1 rounded-full border border-brand-teal/20">
                        {filteredAuthorised.length} Brands
                    </span>
                </div>

                {filteredAuthorised.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filteredAuthorised.map((brand, index) => {
                            const theme = themeStyles[index % themeStyles.length];
                            const cardNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

                            return (
                                <motion.div key={brand.name} variants={itemVariants}>
                                    <Link
                                        href={`/manufacturers/${brand.slug}`}
                                        className={`block h-full relative group transition-all duration-300 hover:z-30 hover:scale-105 ${theme.rotate}`}
                                    >
                                        <div className="bg-white p-3 rounded-[25px] shadow-[0px_10px_20px_0px_#D3D3D3] border border-gray-100 h-full flex flex-col">
                                            <Pin className={`w-8 h-8 ${theme.text} z-20 mb-3 mx-auto transition-transform duration-300 group-hover:scale-110`} />
                                            <div
                                                className={`${theme.bg} border ${theme.border} rounded-[18px] p-5 h-full flex flex-col justify-between relative overflow-hidden`}
                                            >
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span
                                                            className={`${theme.text} text-3xl font-extrabold font-mono tracking-wider`}
                                                        >
                                                            {cardNumber}
                                                        </span>
                                                        <span className="text-[11px] font-bold uppercase px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200/60 shadow-xs">
                                                            {brand.country}
                                                        </span>
                                                    </div>

                                                    {/* Logo */}
                                                    <div className="w-full h-16 relative bg-white/90 rounded-xl p-2 mb-4 shadow-sm border border-gray-100 flex items-center justify-center">
                                                        <Image
                                                            src={brand.logo}
                                                            alt={brand.name}
                                                            fill
                                                            className="object-contain p-1"
                                                            sizes="200px"
                                                        />
                                                    </div>

                                                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#2DAA9E] transition-colors">
                                                        {brand.name}
                                                    </h3>
                                                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                                                        {brand.description}
                                                    </p>
                                                </div>

                                                <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between">
                                                    <span className={`text-xs font-bold ${theme.text} group-hover:underline`}>
                                                        View Line Card
                                                    </span>
                                                    <div className={`p-1.5 rounded-full ${theme.bg} ${theme.text}`}>
                                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
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
