'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
    {
        icon: ShieldCheck,
        badge: 'Zero Risk',
        title: 'Counterfeit Prevention & Quality Control',
        description: '100% authentic components directly from franchised distributors and vetted manufacturers. Backed by in-house ISO 9001:2015 visual and electrical testing.',
    },
    {
        icon: Zap,
        badge: 'Speed & Scale',
        title: 'Rapid Lead-Time Reduction',
        description: 'Strategic inventory buffers and direct factory relationships shorten standard 40+ week lead times to days, keeping your production lines running without interruption.',
    },
    {
        icon: Award,
        badge: 'Certified',
        title: 'Full ISO 9001:2015 Traceability',
        description: 'Complete Certificate of Conformance (CoC), date code validation, and lot number tracking provided for every order across all industries.',
    },
    {
        icon: Headphones,
        badge: 'Dedicated Support',
        title: 'Engineering Account Management',
        description: 'Direct access to senior FAEs and component specialists who understand your schematic requirements and production schedules.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 md:py-36 bg-[#111111] text-white relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-mono font-bold uppercase tracking-wider">
                            <span>The Serente Advantage</span>
                        </div>
                        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
                            Why Top OEMs <span className="text-[#FFB800]">Partner With Us</span>
                        </h2>
                        <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed">
                            Combining deep engineering expertise with a global supply chain to solve component allocation, obsolescence, and manufacturing bottlenecks.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-[#FFB800] text-[#1A1A1A] hover:bg-white px-7 py-3.5 font-display font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,184,0,0.25)] shrink-0"
                    >
                        Talk To An Engineer
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-[#181818] border border-white/10 hover:border-[#FFB800]/50 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden"
                        >
                            {/* Top right subtle glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FFB800]/10 transition-colors" />

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] group-hover:scale-110 group-hover:bg-[#FFB800] group-hover:text-[#1A1A1A] transition-all duration-500 shadow-md">
                                        <pillar.icon className="w-7 h-7" strokeWidth={1.8} />
                                    </div>
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 border border-[#FFB800]/30 px-3 py-1 rounded-full">
                                        {pillar.badge}
                                    </span>
                                </div>

                                <h3 className="font-display font-bold text-2xl text-white mb-4 tracking-wide group-hover:text-[#FFB800] transition-colors duration-300">
                                    {pillar.title}
                                </h3>

                                <p className="font-mono text-sm text-gray-300 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
