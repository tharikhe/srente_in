'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
    {
        number: '01',
        title: 'Design For Manufacturing',
        icon: Cpu,
        description: 'Bridging the gap between engineering concept and manufacturable product. We optimize PCB layouts, component selection, and DFM rules to ensure high yield and cost efficiency.',
        highlights: ['DFM & DFA Optimization', 'Rapid PCB Prototyping', 'Component Stress Analysis'],
        href: '/services#dfm'
    },
    {
        number: '02',
        title: 'Integrated Production',
        icon: Zap,
        description: 'End-to-end EMS solutions unifying procurement, SMT assembly, and box-build manufacturing. Streamlining your supply chain with complete traceability.',
        highlights: ['Automated SMT & Dip Lines', 'Turnkey Box-Build Assembly', '100% Component Traceability'],
        href: '/services#production'
    },
    {
        number: '03',
        title: 'Engineering Services',
        icon: Settings,
        description: 'Comprehensive engineering support covering Critical Components Planning, Manufacturing Frequency Estimates, custom test jig design, and detailed tooling.',
        highlights: ['Critical Component Planning', 'Custom In-Circuit Test Jigs', 'Obsolete Component Cross-Ref'],
        href: '/services#engineering'
    }
];

const staggerContainer = {
    whileInView: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' }
};

export default function HomeCapabilities() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0, activeCard: -1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            activeCard: index
        });
    };

    return (
        <section className="py-24 md:py-36 bg-[#0D0D0D] relative overflow-hidden text-white">
            {/* Ambient Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Glowing Ambient Radial Halos */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FFFF00]/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FFFF00]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-2xl space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-mono font-bold uppercase tracking-wider">
                            <span>Precision ESDM Solutions</span>
                        </div>
                        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none uppercase">
                            Core <span className="text-[#FFFF00]">Capabilities</span>
                        </h2>
                        <p className="font-mono text-gray-300 text-sm md:text-base leading-relaxed">
                            From initial concept to full-scale automated manufacturing, we deliver production-ready electronics systems engineered for mission-critical reliability.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-3 bg-[#1A1A1A] border-2 border-[#FFFF00] text-[#FFFF00] hover:bg-[#FFFF00] hover:text-[#1A1A1A] px-7 py-3.5 font-display font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,0,0.15)]"
                        >
                            View All Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>

                {/* Capability Cards Grid */}
                <motion.div
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            onMouseMove={(e) => handleMouseMove(e, idx)}
                            onMouseLeave={() => setMousePos({ x: 0, y: 0, activeCard: -1 })}
                            className="group relative bg-[#141414] border border-white/10 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFFF00]/50 overflow-hidden shadow-xl flex flex-col justify-between"
                        >
                            {/* Radial Spotlight Mouse Glow */}
                            {mousePos.activeCard === idx && (
                                <div
                                    className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
                                    style={{
                                        background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 0, 0.12), transparent 80%)`,
                                    }}
                                />
                            )}

                            {/* Corner Tech Ticks */}
                            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 group-hover:border-[#FFFF00]/60 transition-colors" />
                            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20 group-hover:border-[#FFFF00]/60 transition-colors" />
                            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20 group-hover:border-[#FFFF00]/60 transition-colors" />
                            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 group-hover:border-[#FFFF00]/60 transition-colors" />

                            <div>
                                {/* Header Info: Icon + Card Index */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 rounded-xl bg-[#FFFF00]/10 border border-[#FFFF00]/30 flex items-center justify-center text-[#FFFF00] group-hover:scale-110 group-hover:bg-[#FFFF00] group-hover:text-[#1A1A1A] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,0,0.15)]">
                                        <cap.icon className="w-7 h-7" strokeWidth={1.8} />
                                    </div>
                                    <span className="font-mono text-2xl font-black text-white/30 group-hover:text-[#FFFF00] transition-colors duration-300">
                                        {cap.number}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="font-display font-bold text-2xl text-white mb-4 tracking-wide group-hover:text-[#FFFF00] transition-colors duration-300">
                                    {cap.title}
                                </h3>
                                <p className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
                                    {cap.description}
                                </p>

                                {/* Highlights list */}
                                <ul className="space-y-2.5 mb-8 border-t border-white/10 pt-6">
                                    {cap.highlights.map((item, hIdx) => (
                                        <li key={hIdx} className="flex items-center gap-2.5 text-xs font-mono text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-[#FFFF00] shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Link CTA */}
                            <Link
                                href={cap.href}
                                className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase tracking-widest text-[#FFFF00] hover:text-white transition-colors duration-300 pt-4 border-t border-white/10 group/link"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300 text-[#FFFF00]" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
