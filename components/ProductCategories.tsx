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

/* ─── Glowing Node Component ─── */
function JourneyNode({
    scrollProgress,
    threshold,
    number,
    cx,
    cy,
}: {
    scrollProgress: MotionValue<number>;
    threshold: number;
    number: string;
    cx: number;
    cy: number;
}) {
    const opacity = useTransform(
        scrollProgress,
        [Math.max(0, threshold - 0.06), threshold],
        [0.2, 1]
    );
    const scale = useTransform(
        scrollProgress,
        [Math.max(0, threshold - 0.06), threshold],
        [0.6, 1]
    );
    const glowRadius = useTransform(
        scrollProgress,
        [Math.max(0, threshold - 0.06), threshold, Math.min(1, threshold + 0.06)],
        [0, 16, 10]
    );

    return (
        <motion.g style={{ opacity }}>
            <motion.circle
                cx={cx}
                cy={cy}
                r={24}
                fill="none"
                stroke="#FFB800"
                strokeWidth="1.5"
                style={{ opacity: useTransform(scrollProgress, [Math.max(0, threshold - 0.04), threshold], [0, 0.4]) }}
            />
            <motion.circle
                cx={cx}
                cy={cy}
                style={{ r: glowRadius }}
                fill="#FFB800"
                opacity={0.25}
                filter="url(#catNodeGlow)"
            />
            <motion.circle
                cx={cx}
                cy={cy}
                r={18}
                fill="#FAFAFA"
                stroke="#FFB800"
                strokeWidth="2"
                style={{ scale }}
            />
            <text
                x={cx}
                y={cy + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FFB800"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
            >
                {number}
            </text>
        </motion.g>
    );
}

/* ─── Main Component ─── */
export default function ProductCategories() {
    const journeyRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: journeyRef,
        offset: ['start end', 'end start'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        restDelta: 0.001,
    });

    const pathLength = useTransform(smoothProgress, [0.08, 0.88], [0, 1]);

    const orbY = useTransform(smoothProgress, [0.08, 0.88], [0, 1500]);
    const orbOpacity = useTransform(smoothProgress, [0.06, 0.12, 0.84, 0.90], [0, 1, 1, 0]);

    const desktopNodes = [
        { cx: 200, cy: 230 },
        { cx: 1000, cy: 420 },
        { cx: 200, cy: 630 },
        { cx: 1000, cy: 840 },
        { cx: 200, cy: 1050 },
        { cx: 1000, cy: 1260 },
    ];

    return (
        <section className="py-24 md:py-36 bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden" ref={journeyRef}>
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
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4"
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

                {/* ─── Journey Container ─── */}
                <div className="relative">

                    {/* ─── Desktop SVG Journey Line ─── */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                        viewBox="0 0 1200 1500"
                        preserveAspectRatio="none"
                        fill="none"
                        style={{ zIndex: 1 }}
                    >
                        <defs>
                            <filter id="catNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="5" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter id="catPathGlow" x="-10%" y="-10%" width="120%" height="120%">
                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <radialGradient id="catOrbGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#FFB800" stopOpacity="1" />
                                <stop offset="40%" stopColor="#FFB800" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Ghost track */}
                        <path
                            d={DESKTOP_PATH}
                            stroke="#E0E0E0"
                            strokeWidth="2"
                            strokeDasharray="6 8"
                            fill="none"
                        />

                        {/* Drawn path */}
                        <motion.path
                            d={DESKTOP_PATH}
                            stroke="#FFB800"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#catPathGlow)"
                            style={{ pathLength }}
                            strokeDashoffset={0}
                            strokeDasharray="1"
                        />

                        {/* Nodes */}
                        {categories.map((cat, idx) => (
                            <JourneyNode
                                key={idx}
                                scrollProgress={smoothProgress}
                                threshold={NODE_THRESHOLDS[idx]}
                                number={cat.number}
                                cx={desktopNodes[idx].cx}
                                cy={desktopNodes[idx].cy}
                            />
                        ))}

                        {/* Leading orb */}
                        <motion.circle
                            cx={600}
                            style={{
                                cy: orbY,
                                opacity: orbOpacity,
                            }}
                            r={7}
                            fill="url(#catOrbGradient)"
                            filter="url(#catNodeGlow)"
                        />
                    </svg>

                    {/* ─── Mobile SVG Journey Line ─── */}
                    <svg
                        className="absolute left-6 top-0 h-full pointer-events-none lg:hidden"
                        width="48"
                        viewBox="0 0 48 1600"
                        preserveAspectRatio="none"
                        fill="none"
                        style={{ zIndex: 1 }}
                    >
                        <defs>
                            <filter id="catMobileGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <path
                            d={MOBILE_PATH}
                            stroke="#E0E0E0"
                            strokeWidth="2"
                            strokeDasharray="6 8"
                            fill="none"
                        />

                        <motion.path
                            d={MOBILE_PATH}
                            stroke="#FFB800"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            style={{ pathLength }}
                            strokeDashoffset={0}
                            strokeDasharray="1"
                        />

                        {categories.map((cat, idx) => {
                            const mobileY = 134 + idx * 267;
                            return (
                                <JourneyNode
                                    key={idx}
                                    scrollProgress={smoothProgress}
                                    threshold={NODE_THRESHOLDS[idx]}
                                    number={cat.number}
                                    cx={24}
                                    cy={mobileY}
                                />
                            );
                        })}
                    </svg>

                    {/* ─── Category Cards: Serpentine Zigzag ─── */}
                    <div className="relative" style={{ zIndex: 2 }}>
                        {categories.map((cat, idx) => {
                            const isLeft = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 35, x: isLeft ? -25 : 25 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
                                    className={`
                                        flex flex-col lg:flex-row items-start gap-6 lg:gap-10
                                        mb-12 md:mb-20 last:mb-0
                                        pl-16 lg:pl-0
                                        ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                                    `}
                                >
                                    <div
                                        className={`
                                            w-full lg:w-[45%]
                                            ${isLeft ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'}
                                        `}
                                    >
                                        <div className="group relative bg-white border border-gray-200 hover:border-[#FFB800] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(255,184,0,0.12)]">
                                            {/* Accent border */}
                                            <div
                                                className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-1 h-full rounded-full bg-gradient-to-b from-[#FFB800] via-[#FFB800]/50 to-transparent`}
                                            />

                                            {/* Corner accent */}
                                            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-gray-100 border-l-[40px] border-l-transparent group-hover:border-t-[#FFB800]/20 transition-colors duration-500" />
                                            </div>

                                            {/* Header */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#FFB800] group-hover:scale-105 transition-transform duration-300 shadow-md">
                                                    <cat.icon className="w-7 h-7" strokeWidth={1.8} />
                                                </div>
                                                <span className="font-mono text-3xl font-black text-gray-200 group-hover:text-[#FFB800]/30 transition-colors duration-300 select-none">
                                                    {cat.number}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-5 uppercase tracking-wider">
                                                {cat.title}
                                            </h3>

                                            {/* Items */}
                                            <ul className="space-y-2.5 border-t border-gray-100 pt-5">
                                                {cat.items.map((item, iIdx) => (
                                                    <li key={iIdx} className="flex items-center gap-2.5 text-sm font-mono text-gray-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
