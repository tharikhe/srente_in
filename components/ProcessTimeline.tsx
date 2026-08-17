'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Globe2, Microchip, Layers, Truck, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        number: '01',
        title: 'DFM & Engineering Review',
        subtitle: 'Optimization at Design Stage',
        icon: FileSearch,
        description: 'Our engineering team reviews Gerber files, schematics, and component specifications to eliminate manufacturing flaws and optimize placement for high-yield production.',
        tags: ['DFM Analysis', 'Gerber Audit', 'Assembly Scrubbing']
    },
    {
        number: '02',
        title: 'Global Component Sourcing',
        subtitle: '100% Traceable Supply Network',
        icon: Globe2,
        description: 'We procure active, passive, and electromechanical components directly from franchised distributors and verified manufacturers worldwide with complete CoC documentation.',
        tags: ['Franchised Sources', 'EOL Sourcing', 'Batch Traceability']
    },
    {
        number: '03',
        title: 'ISO Quality Inspection',
        subtitle: 'Rigorous Verification Testing',
        icon: Microchip,
        description: 'Incoming components undergo optical inspection, pin-out verification, X-ray solder joint checks, and electrical parameter validation in ISO 9001:2015 certified labs.',
        tags: ['ISO 9001:2015', 'X-Ray Testing', 'Optical Inspection']
    },
    {
        number: '04',
        title: 'SMT & Box-Build Assembly',
        subtitle: 'High-Precision Manufacturing',
        icon: Layers,
        description: 'Automated high-speed pick-and-place lines assemble PCBs under controlled environments, followed by cable harnessing, mechanical enclosure integration, and potting.',
        tags: ['High-Speed SMT', 'Wave Soldering', 'Custom Harnessing']
    },
    {
        number: '05',
        title: 'Functional Testing & Logistics',
        subtitle: 'End-to-End Turnkey Delivery',
        icon: Truck,
        description: 'Assembled units undergo full functional circuit testing (FCT) and environmental stress screening (ESS) before protective packaging and global JIT delivery.',
        tags: ['FCT Testing', 'ESS Screening', 'JIT Global Logistics']
    }
];

export default function ProcessTimeline() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 md:py-36 bg-[#111111] text-white relative overflow-hidden">
            {/* Ambient Halos */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-mono font-bold uppercase tracking-wider">
                        <span>Turnkey ESDM Lifecycle</span>
                    </div>
                    <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
                        Our 5-Step <span className="text-[#FFB800]">Production Workflow</span>
                    </h2>
                    <p className="font-mono text-gray-300 text-sm md:text-base leading-relaxed">
                        A systematic, quality-first manufacturing methodology designed to eliminate risk and accelerate your electronics product launch.
                    </p>
                </div>

                {/* Desktop & Mobile Step Navigation Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
                    {steps.map((step, idx) => {
                        const isActive = activeStep === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveStep(idx)}
                                className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                                    isActive
                                        ? 'bg-[#FFB800] text-[#1A1A1A] border-[#FFB800] shadow-[0_0_25px_rgba(255,184,0,0.3)]'
                                        : 'bg-white/5 text-white border-white/10 hover:border-white/30 hover:bg-white/10'
                                }`}
                            >
                                <span className={`font-mono text-xs font-bold mb-2 ${isActive ? 'text-[#1A1A1A]' : 'text-[#FFB800]'}`}>
                                    STEP {step.number}
                                </span>
                                <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-wide line-clamp-1">
                                    {step.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Step Feature Display Card */}
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#181818] border border-[#FFB800]/30 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/10 rounded-bl-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Info Column */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFB800] text-[#1A1A1A] flex items-center justify-center font-bold shadow-lg shrink-0">
                                    {React.createElement(steps[activeStep].icon, { className: 'w-7 h-7', strokeWidth: 2 })}
                                </div>
                                <div>
                                    <span className="font-mono text-xs text-[#FFB800] font-bold uppercase tracking-widest">
                                        STEP {steps[activeStep].number} — {steps[activeStep].subtitle}
                                    </span>
                                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                                        {steps[activeStep].title}
                                    </h3>
                                </div>
                            </div>

                            <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
                                {steps[activeStep].description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                {steps[activeStep].tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/50 border border-white/15 text-gray-300 text-xs font-mono"
                                    >
                                        <Check className="w-3.5 h-3.5 text-[#FFB800]" />
                                        <span>{tag}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right CTA Column */}
                        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 space-y-4">
                            <p className="font-mono text-xs text-gray-400">
                                Ready to start your manufacturing project?
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2.5 bg-[#FFB800] text-[#1A1A1A] hover:bg-white px-6 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg"
                            >
                                Contact Our Team
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
