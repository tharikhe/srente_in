'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Shield, Package, Wrench, CircuitBoard, Cable, MonitorSmartphone } from 'lucide-react';

/* ─── Category Data ─── */
const categories = [
    {
        number: '01',
        icon: CircuitBoard,
        title: 'Integrated Circuits',
        items: ['Microcontrollers (MCU)', 'FPGA & SoC', 'Voltage Regulators', 'Op-Amps & Comparators'],
    },
    {
        number: '02',
        icon: Shield,
        title: 'Power Semiconductors',
        items: ['MOSFETs & IGBTs', 'Schottky & Zener Diodes', 'Rectifier Bridges', 'Power Modules'],
    },
    {
        number: '03',
        icon: Package,
        title: 'Passive Components',
        items: ['MLCC & Electrolytic Caps', 'Precision Resistors', 'Power Inductors', 'Crystal Oscillators'],
    },
    {
        number: '04',
        icon: Cable,
        title: 'Interconnects',
        items: ['Board-to-Board Connectors', 'Wire Harness Assemblies', 'FPC / FFC Cables', 'Terminal Blocks'],
    },
    {
        number: '05',
        icon: MonitorSmartphone,
        title: 'Displays & Sensors',
        items: ['LCD & OLED Modules', 'Touch Panels', 'Temperature Sensors', 'Current Sensors'],
    },
    {
        number: '06',
        icon: Wrench,
        title: 'Electromechanical',
        items: ['Relays & Contactors', 'Fans & Heat Sinks', 'Switches & Encoders', 'Fuses & Circuit Breakers'],
    },
];

/* ─── SVG Path Constants ─── */

// Desktop serpentine path (viewBox: 0 0 1200 1500)
const DESKTOP_PATH = `
  M 600 0
  C 600 60, 600 60, 600 100
  C 600 150, 200 150, 200 200
  L 200 260
  C 200 320, 600 320, 1000 320
  L 1000 360
  C 1000 420, 1000 420, 1000 480
  C 1000 530, 600 530, 200 530
  L 200 570
  C 200 630, 200 630, 200 690
  C 200 740, 600 740, 1000 740
  L 1000 780
  C 1000 840, 1000 840, 1000 900
  C 1000 950, 600 950, 200 950
  L 200 990
  C 200 1050, 200 1050, 200 1110
  C 200 1160, 600 1160, 1000 1160
  L 1000 1200
  C 1000 1260, 1000 1260, 1000 1320
  C 1000 1370, 600 1370, 600 1430
  L 600 1500
`;

// Mobile straight vertical path
const MOBILE_PATH = `
  M 24 0
  L 24 267
  L 24 534
  L 24 801
  L 24 1068
  L 24 1335
  L 24 1600
`;

// Scroll thresholds for each of the 6 nodes
const NODE_THRESHOLDS = [0.10, 0.24, 0.38, 0.52, 0.66, 0.82];

const CategoryCard = ({ cat, idx, isLeft }: { cat: any, idx: number, isLeft: boolean }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start 85%', 'center 50%'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const glowOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.25]);

    return (
        <div 
            ref={cardRef} 
            className={`relative flex flex-col lg:flex-row items-center gap-8 mb-16 lg:mb-24 last:mb-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
            {/* ─── Timeline Node (Center on Desktop, Left on Mobile) ─── */}
            <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 w-12 h-12">
                {/* Outer Ring */}
                <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-[#FFB800]"
                    style={{ scale, opacity }}
                />
                {/* Glow */}
                <motion.div 
                    className="absolute inset-[-10px] rounded-full bg-[#FFB800] blur-md"
                    style={{ opacity: glowOpacity }}
                />
                {/* Inner Circle */}
                <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border-2 border-[#FFB800] flex items-center justify-center relative z-10 shadow-sm">
                    <span className="text-[#FFB800] text-[10px] font-mono font-bold leading-none">{cat.number}</span>
                </div>
            </div>

            {/* ─── Card Content ─── */}
            <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 text-left'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="group relative bg-white border border-gray-200 hover:border-[#FFB800] rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(255,184,0,0.12)] text-left"
                >
                    {/* Accent border */}
                    <div
                        className={`absolute top-0 ${isLeft ? 'right-0 lg:left-0' : 'left-0'} w-1 h-full rounded-full bg-gradient-to-b from-[#FFB800] via-[#FFB800]/50 to-transparent hidden lg:block`}
                    />
                    <div
                        className="absolute top-0 left-0 w-1 h-full rounded-full bg-gradient-to-b from-[#FFB800] via-[#FFB800]/50 to-transparent lg:hidden"
                    />

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-gray-100 border-l-[30px] border-l-transparent group-hover:border-t-[#FFB800]/20 transition-colors duration-500" />
                    </div>

                    {/* Header */}
                    <div className={`flex items-center gap-4 mb-5 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#FFB800] group-hover:scale-105 transition-transform duration-300 shadow-md shrink-0">
                            <cat.icon className="w-6 h-6" strokeWidth={1.8} />
                        </div>
                        <span className="font-mono text-2xl font-black text-gray-200 group-hover:text-[#FFB800]/30 transition-colors duration-300 select-none">
                            {cat.number}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg md:text-xl text-[#1A1A1A] mb-4 uppercase tracking-wider">
                        {cat.title}
                    </h3>

                    {/* Items */}
                    <ul className={`space-y-2 border-t border-gray-100 pt-4 ${isLeft ? 'lg:items-end flex flex-col' : ''}`}>
                        {cat.items.map((item: string, iIdx: number) => (
                            <li key={iIdx} className={`flex items-center gap-2.5 text-sm font-mono text-gray-600 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
            
            {/* Empty space for alternating layout */}
            <div className="hidden lg:block lg:w-1/2" />
        </div>
    );
};

/* ─── Main Component ─── */
export default function ProductCategories() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start center', 'end center'],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001,
    });

    return (
        <section className="py-24 md:py-36 bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden" ref={sectionRef}>
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20 md:mb-32 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-[#FFB800] text-xs font-mono font-bold uppercase tracking-wider">
                        <span>Component Portfolio</span>
                    </div>
                    <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight uppercase leading-none">
                        What We <span className="text-[#FFB800] drop-shadow-[0_0_8px_rgba(255,184,0,0.4)]">Source</span>
                    </h2>
                    <p className="font-mono text-gray-500 text-sm md:text-base leading-relaxed">
                        Scroll to trace our component supply chain — spanning every major semiconductor category. From common passives to rare obsolete ICs.
                    </p>
                </motion.div>

                {/* ─── Timeline Container ─── */}
                <div className="relative max-w-5xl mx-auto">
                    
                    {/* Background Line (Inactive) */}
                    <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-0.5 -translate-x-1/2 bg-gray-200 rounded-full" />
                    
                    {/* Foreground Line (Active, drawn on scroll) */}
                    <motion.div 
                        className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-0.5 -translate-x-1/2 bg-[#FFB800] rounded-full origin-top drop-shadow-[0_0_8px_rgba(255,184,0,0.6)]"
                        style={{ scaleY }}
                    />

                    {/* Category Cards */}
                    <div className="relative z-10 pt-8 pb-8">
                        {categories.map((cat, idx) => (
                            <CategoryCard 
                                key={idx} 
                                cat={cat} 
                                idx={idx} 
                                isLeft={idx % 2 === 0} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
