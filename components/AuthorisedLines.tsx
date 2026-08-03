'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { manufacturers } from '@/data/manufacturers';

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

export default function AuthorisedLines() {
    const featuredBrands = manufacturers.slice(0, 8);

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

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden border-y border-[#EAEAEA]">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2DAA9E]/10 rounded-full mb-4 border border-[#2DAA9E]/20 text-[#2DAA9E] text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>Authorised Line Card</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
                        Authorised <span className="text-[#2DAA9E]">Manufacturers</span> & Line Card
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-gray-600 font-medium">
                        We partner directly with world-class component manufacturers to ensure 100% authentic products, full traceability, and competitive volume pricing.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {featuredBrands.map((brand, index) => {
                        const theme = themeStyles[index % themeStyles.length];
                        const cardNumber = `0${index + 1}`;

                        return (
                            <Link
                                key={brand.slug}
                                href={`/manufacturers/${brand.slug}`}
                                className={`relative group transition-all duration-300 hover:z-30 hover:scale-105 ${theme.rotate}`}
                            >
                                <div className="bg-white p-3 rounded-[25px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.08)] border border-gray-100 h-full flex flex-col">
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

                                            {/* Logo Container */}
                                            <div className="w-full h-16 relative bg-white/90 rounded-xl p-2.5 mb-4 shadow-sm border border-gray-100 flex items-center justify-center">
                                                <Image
                                                    src={brand.logo}
                                                    alt={brand.name}
                                                    fill
                                                    className="object-contain p-1"
                                                    sizes="(max-width: 768px) 100vw, 250px"
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
                                                Explore Line Card
                                            </span>
                                            <div className={`p-1.5 rounded-full ${theme.bg} ${theme.text}`}>
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All Line Card Button */}
                <div className="mt-12 md:mt-16 text-center">
                    <Link href="/manufacturers">
                        <button className="px-8 py-4 bg-[#1A1A1A] hover:bg-[#2DAA9E] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-sm md:text-base group">
                            <span>View Complete Line Card</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
