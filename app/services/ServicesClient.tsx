'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import {
    Cpu,
    Briefcase,
    Zap,
    Code,
    Settings,
    Factory,
    TrendingDown,
    Truck,
    Eye,
    Calendar,
    RefreshCw,
    Shield,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

/* ─── Animation Variants ─── */
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

/* ─── Service Data ─── */
const services = [
    {
        number: '01',
        title: "Design For Manufacturing",
        icon: Briefcase,
        description: "We deliver product not just paper proposal. Our team knows how to fill the gaps between design/prototype and manufacturable product. Whether it's a consumer who needs an exceptional user experience where product performance makes the difference or diagnostics labs where precision and accuracy make difference in results - We can meet all different design demands and requirements making sure design and development is easy to manufacture and cost effective for today's market."
    },
    {
        number: '02',
        title: "Engineering Services",
        icon: Settings,
        description: "All our design activities have an objective of simplifying manufacturing activities, minimizing the diversity of components, and standardizing the handling and assembly operations. During our design, we pay special attention to Critical Components Planning, Manufacturing Frequency Estimates and Tooling or other one-time activities that require special attention to quality and detail."
    },
    {
        number: '03',
        title: "Electronics Design Services",
        icon: Cpu,
        description: "Our electrical and electronics services include both ANALOG and designs: Power Management, Real-Time Embedded Systems Design, FPGA/ASIC Systems, RF & RFID circuitry, Data Acquisition Systems, RTOS-Based Programmable Logic etc. Some of the digital platforms we have worked with run on ARM7, ARM9, Leon3, PowerPC, Micro Blaze processors and microprocessors."
    },
    {
        number: '04',
        title: "Software Design Services",
        icon: Code,
        description: "Whether it is embedded software design, FPGAs designs, desktop GUIs running on top of operating system, web applications, or app designs, we have dealt with it all. Some of many technologies we have worked with: .NET Compact framework, Win CE, Java Swing Framework, JPA2 Mapper for Embedded Database, D2XX Communication Drivers etc."
    }
];

/* ─── Operations Data ─── */
const operations = [
    {
        title: "OEM Services",
        icon: Factory,
        description: "Quality Manufacturing Processes (QMP) is in our DNA. Whether it's evaluating a vendor or processing incoming materials or assembling a device, we strictly follow Quality Manufacturing processes and standards. Continuous correcting and preventive actions (CAPA) are core in our process assuring long-lasting quality in every OEM product we manufacture, test, verify and distribute through our OEM partners."
    },
    {
        title: "360° Integrated Production",
        icon: Zap,
        description: "SERENTE ELECTRONICS PVT LTD offers complete end-to-end equipment manufacturing services, allowing our customers to gain the benefit of supply chain consolidation, manufacturing efficiency and lower costs. We are constantly integrating innovative technologies and processes with forward-thinking ideas cultivated in our labs and in collaboration with outside partners."
    },
    {
        title: "Optimize Your Product Cost",
        icon: TrendingDown,
        description: "Once mass manufacturing is set in motion, we move on to optimizing costs through Material and Resource Planning Optimization. With 10 years of experience, we have partnered with the biggest component suppliers to create cost-effective component purchase processes, meeting the strictest quality demands needed for product manufacturing."
    },
    {
        title: "Improve Your Supply Chain Cost",
        icon: Truck,
        description: "With our integrated fulfilment across a network of industries, suppliers and distribution partners, you get improved visibility with minimized overhead, and a more stable, balanced supply chain, responsive to fluctuating market demands. We have distribution and service tie-up centers located across India, Asia, USA, UK, Europe and South America to help you deliver your product and service with quality, time, and cost-savings in mind."
    },
    {
        title: "Vendor Transparency",
        icon: Eye,
        description: "We transparently share any logistics, quality certificates from our vendors. Leverage on this knowledge to optimize your supply chain for quality."
    },
    {
        title: "Integrated Planning",
        icon: Calendar,
        description: "When you partner with SERENTE ELECTRONICS PVT LTD, you will become a seamless and integrated part of our own SAP-based processes. Plan, schedule and monitor manufacturing resources to ensuring timely delivery of your products."
    },
    {
        title: "Lifecycle Management",
        icon: RefreshCw,
        description: "It does not end with the product being out of our door and we know that. Whether it is repair, spare parts or refurbishing, we are ready and equipped to support you every step of your way."
    },
    {
        title: "IP Protection",
        icon: Shield,
        description: "We Built This Company To Be Your OEM Partner. Having a long history with our own and our partner's IP we know the value and importance of securing sensitive data. Along those lines we pro-actively establish, monitor and enforce security protocols to limit access to sensitive content."
    }
];

/* ─── SVG Journey Path Constants ─── */

// Desktop serpentine path (viewBox: 0 0 1200 1600)
// Snakes: top-center → left card → right card → left card → right card → bottom-center
const DESKTOP_PATH = `
  M 600 0
  C 600 80, 600 80, 600 120
  C 600 180, 200 180, 200 240
  L 200 320
  C 200 380, 600 380, 1000 380
  L 1000 400
  C 1000 480, 1000 480, 1000 560
  C 1000 620, 600 620, 200 620
  L 200 640
  C 200 720, 200 720, 200 800
  C 200 860, 600 860, 1000 860
  L 1000 880
  C 1000 960, 1000 960, 1000 1040
  C 1000 1100, 600 1100, 600 1160
  L 600 1200
`;

// Mobile single-column path (viewBox: 0 0 100 1600)
const MOBILE_PATH = `
  M 24 0
  L 24 400
  L 24 800
  L 24 1200
  L 24 1600
`;

// Y positions where each node sits (0–1 normalized) for desktop
const NODE_THRESHOLDS = [0.15, 0.40, 0.65, 0.88];

/* ─── Glowing Node Component ─── */
function JourneyNode({
    scrollProgress,
    threshold,
    number,
    icon: Icon,
    cx,
    cy,
}: {
    scrollProgress: MotionValue<number>;
    threshold: number;
    number: string;
    icon: React.ComponentType<{ className?: string }>;
    cx: number;
    cy: number;
}) {
    // Opacity: 0 before threshold, animate to 1 as scroll reaches the node
    const opacity = useTransform(
        scrollProgress,
        [Math.max(0, threshold - 0.08), threshold],
        [0.2, 1]
    );
    const scale = useTransform(
        scrollProgress,
        [Math.max(0, threshold - 0.08), threshold],
        [0.6, 1]
    );
    const glowRadius = useTransform(
        scrollProgress,
        [Math.max(0, threshold - 0.08), threshold, Math.min(1, threshold + 0.08)],
        [0, 18, 12]
    );

    return (
        <motion.g style={{ opacity }}>
            {/* Outer glow ring */}
            <motion.circle
                cx={cx}
                cy={cy}
                r={28}
                fill="none"
                stroke="#FFB800"
                strokeWidth="2"
                style={{ opacity: useTransform(scrollProgress, [Math.max(0, threshold - 0.05), threshold], [0, 0.4]) }}
            />
            {/* Glow halo */}
            <motion.circle
                cx={cx}
                cy={cy}
                style={{ r: glowRadius }}
                fill="#FFB800"
                opacity={0.25}
                filter="url(#nodeGlow)"
            />
            {/* Solid node circle */}
            <motion.circle
                cx={cx}
                cy={cy}
                r={20}
                fill="#111111"
                stroke="#FFB800"
                strokeWidth="2.5"
                style={{ scale }}
            />
            {/* Node number */}
            <text
                x={cx}
                y={cy + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FFB800"
                fontSize="11"
                fontFamily="monospace"
                fontWeight="bold"
            >
                {number}
            </text>
        </motion.g>
    );
}

/* ─── Main Component ─── */
export default function ServicesClient() {
    const journeyRef = useRef<HTMLDivElement>(null);

    // Scroll progress within the services journey section
    const { scrollYProgress } = useScroll({
        target: journeyRef,
        offset: ['start end', 'end start'],
    });

    // Smooth spring for the path drawing
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        restDelta: 0.001,
    });

    // pathLength goes from 0 → 1
    const pathLength = useTransform(smoothProgress, [0.1, 0.85], [0, 1]);

    // Leading orb position along the path (approximate Y)
    const orbY = useTransform(smoothProgress, [0.1, 0.85], [0, 1200]);
    const orbOpacity = useTransform(smoothProgress, [0.08, 0.15, 0.82, 0.88], [0, 1, 1, 0]);

    // Node positions for desktop SVG (cx, cy in viewBox coords)
    const desktopNodes = [
        { cx: 200, cy: 280 },
        { cx: 1000, cy: 480 },
        { cx: 200, cy: 720 },
        { cx: 1000, cy: 960 },
    ];

    return (
        <div className="min-h-screen bg-[#EAEAEA] pt-24 pb-16">

            {/* Cinematic Hero */}
            <section className="bg-[#1A1A1A] text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/macro_pins.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-tight">
                            End-to-End <br /><span className="text-[#FFB800]">Capabilities</span>
                        </h1>
                        <p className="font-mono text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
                            From concept to mass production, we deliver manufacturable products, not just paper proposals. Experience true 360° integrated manufacturing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                OUR SERVICES — Scroll-Triggered SVG Journey Line
            ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 bg-white overflow-hidden" ref={journeyRef}>
                <div className="container mx-auto px-4 max-w-7xl">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-24"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                            <span>Our Core Journey</span>
                        </div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1A1A1A] mb-4 uppercase tracking-wider">
                            Our <span className="text-[#FFB800]">Services</span>
                        </h2>
                        <p className="font-mono text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
                            Scroll to trace the journey — from initial design through to full software delivery.
                        </p>
                    </motion.div>

                    {/* ─── Journey Container ─── */}
                    <div className="relative">

                        {/* ─── Desktop SVG Journey Line (hidden on mobile) ─── */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                            viewBox="0 0 1200 1200"
                            preserveAspectRatio="none"
                            fill="none"
                            style={{ zIndex: 1 }}
                        >
                            <defs>
                                {/* Glow filter for nodes */}
                                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="6" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                {/* Glow filter for the path */}
                                <filter id="pathGlow" x="-10%" y="-10%" width="120%" height="120%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                {/* Radial glow for leading orb */}
                                <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#FFB800" stopOpacity="1" />
                                    <stop offset="40%" stopColor="#FFB800" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
                                </radialGradient>
                            </defs>

                            {/* Ghost/undrawn track (dashed, dim) */}
                            <path
                                d={DESKTOP_PATH}
                                stroke="#E5E5E5"
                                strokeWidth="2"
                                strokeDasharray="6 8"
                                fill="none"
                            />

                            {/* Drawn path (animated amber) */}
                            <motion.path
                                d={DESKTOP_PATH}
                                stroke="#FFB800"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                filter="url(#pathGlow)"
                                style={{
                                    pathLength,
                                }}
                                strokeDashoffset={0}
                                strokeDasharray="1"
                            />

                            {/* Node markers */}
                            {services.map((service, idx) => (
                                <JourneyNode
                                    key={idx}
                                    scrollProgress={smoothProgress}
                                    threshold={NODE_THRESHOLDS[idx]}
                                    number={service.number}
                                    icon={service.icon}
                                    cx={desktopNodes[idx].cx}
                                    cy={desktopNodes[idx].cy}
                                />
                            ))}

                            {/* Leading glow orb at tip */}
                            <motion.circle
                                cx={600}
                                style={{
                                    cy: orbY,
                                    opacity: orbOpacity,
                                }}
                                r={8}
                                fill="url(#orbGradient)"
                                filter="url(#nodeGlow)"
                            />
                        </svg>

                        {/* ─── Mobile SVG Journey Line (vertical, hidden on desktop) ─── */}
                        <svg
                            className="absolute left-6 top-0 h-full pointer-events-none lg:hidden"
                            width="48"
                            viewBox="0 0 48 1600"
                            preserveAspectRatio="none"
                            fill="none"
                            style={{ zIndex: 1 }}
                        >
                            <defs>
                                <filter id="mobileNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Ghost track */}
                            <path
                                d={MOBILE_PATH}
                                stroke="#E5E5E5"
                                strokeWidth="2"
                                strokeDasharray="6 8"
                                fill="none"
                            />

                            {/* Drawn path */}
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

                            {/* Mobile nodes at equal intervals */}
                            {services.map((service, idx) => {
                                const mobileY = 200 + idx * 400;
                                return (
                                    <JourneyNode
                                        key={idx}
                                        scrollProgress={smoothProgress}
                                        threshold={NODE_THRESHOLDS[idx]}
                                        number={service.number}
                                        icon={service.icon}
                                        cx={24}
                                        cy={mobileY}
                                    />
                                );
                            })}
                        </svg>

                        {/* ─── Service Cards: Serpentine Zigzag (desktop) / Single Column (mobile) ─── */}
                        <div className="relative" style={{ zIndex: 2 }}>
                            {services.map((service, idx) => {
                                const isLeft = idx % 2 === 0;
                                const nodeThreshold = NODE_THRESHOLDS[idx];

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 40, x: isLeft ? -30 : 30 }}
                                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                                        className={`
                                            flex flex-col lg:flex-row items-start gap-6 lg:gap-10
                                            mb-16 md:mb-24 last:mb-0
                                            pl-16 lg:pl-0
                                            ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                                        `}
                                    >
                                        {/* Card Content */}
                                        <div
                                            className={`
                                                w-full lg:w-[45%]
                                                ${isLeft ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'}
                                            `}
                                        >
                                            <div className="group relative bg-[#FAFAFA] hover:bg-[#111111] border border-gray-100 hover:border-[#FFB800]/40 p-8 md:p-10 transition-all duration-500 shadow-sm hover:shadow-[0_8px_40px_rgba(255,184,0,0.15)]">
                                                {/* Accent border on junction side */}
                                                <div
                                                    className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b from-[#FFB800] via-[#FFB800]/60 to-transparent`}
                                                />

                                                {/* Card Header */}
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="inline-flex p-3.5 rounded-xl bg-[#EAEAEA] group-hover:bg-[#FFB800]/20 text-[#1A1A1A] group-hover:text-[#FFB800] transition-colors duration-500">
                                                        <service.icon className="w-7 h-7" />
                                                    </div>
                                                    <span className="font-mono text-3xl font-black text-gray-200 group-hover:text-[#FFB800]/40 transition-colors duration-300 select-none">
                                                        {service.number}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-white mb-4 tracking-tight transition-colors duration-500">
                                                    {service.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="font-mono text-sm md:text-base text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                                                    {service.description}
                                                </p>

                                                {/* Bottom accent line */}
                                                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-white/10 transition-colors duration-500">
                                                    <div className="flex items-center gap-2 text-[#FFB800] font-mono text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                        <span>Step {service.number} of 04</span>
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Operations Section (untouched) */}
            <section className="py-20 md:py-32 bg-[#1A1A1A] text-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
                            Our <span className="text-[#E3D2C3]">Operations</span>
                        </h2>
                        <div className="w-24 h-2 bg-[#E3D2C3]"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                        {operations.map((op, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative pl-12 md:pl-16 border-l-2 border-gray-800 hover:border-[#E3D2C3] transition-colors duration-500 group"
                            >
                                <div className="absolute left-[-21px] top-0 p-2 bg-[#1A1A1A] border-2 border-gray-800 group-hover:border-[#E3D2C3] rounded-full text-gray-500 group-hover:text-[#E3D2C3] transition-colors duration-500">
                                    <op.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4 tracking-wide group-hover:text-[#E3D2C3] transition-colors duration-500">
                                    {op.title}
                                </h3>
                                <p className="font-mono text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                                    {op.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#E3D2C3]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-[#1A1A1A] mb-8 uppercase tracking-wide">
                        Ready to Optimize Your Manufacturing?
                    </h2>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] text-white px-10 py-5 font-display font-bold uppercase tracking-widest transition-all duration-300 text-lg shadow-2xl">
                        Partner With Us <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
