'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Car,
    Plane,
    Activity,
    Factory,
    Wifi,
    TrainFront,
    ShoppingBag,
} from 'lucide-react';

const industries = [
    {
        id: 'automotive',
        title: 'Automotive',
        icon: Car,
    },
    {
        id: 'industrial',
        title: 'Industrial',
        icon: Factory,
    },
    {
        id: 'railways',
        title: 'Railways',
        icon: TrainFront,
    },
    {
        id: 'medical',
        title: 'Medical',
        icon: Activity,
    },
    {
        id: 'aerospace',
        title: 'Aerospace, Defence & Outerspace',
        icon: Plane,
    },
    {
        id: 'iot',
        title: 'IoT/IT',
        icon: Wifi,
    },
    {
        id: 'consumer',
        title: 'Consumer',
        icon: ShoppingBag,
    },
];

export default function HomeIndustries() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Parallax: background moves slower than scroll
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    // Slight scale for depth feel
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        }),
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden"
            style={{ minHeight: '70vh' }}
        >
            {/* ── Parallax Background ── */}
            <motion.div
                className="absolute inset-0 will-change-transform"
                style={{ y: bgY, scale: bgScale }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/industry_industrial.png')`,
                        /* extend the image beyond section bounds so parallax doesn't reveal gaps */
                        top: '-15%',
                        bottom: '-15%',
                        height: '130%',
                    }}
                />
            </motion.div>

            {/* ── Dark overlay for contrast + depth ── */}
            <div className="absolute inset-0 bg-[#1A1A1A]/70" />

            {/* ── Subtle grid pattern overlay for 3D texture ── */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 py-20 md:py-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">
                            Industries
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-24 h-1.5 bg-[#FFB800] mx-auto origin-center"
                        />
                    </motion.div>

                    {/* Industry Cards — Row 1: 4 cards */}
                    <div className="flex flex-wrap justify-center gap-5 lg:gap-6 mb-5 lg:mb-6">
                        {industries.slice(0, 4).map((ind, idx) => (
                            <motion.div
                                key={ind.id}
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.04,
                                    transition: { duration: 0.3, ease: 'easeOut' },
                                }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] aspect-[3/4] border-2 border-[#FFB800] bg-[#FFB800] flex flex-col items-center justify-center gap-5 p-5 transition-all duration-500 group-hover:bg-[#FFB800] group-hover:shadow-[0_0_40px_rgba(255,184,0,0.4)]">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#1A1A1A]/30" />
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1A1A1A]/30" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#1A1A1A]/30" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#1A1A1A]/30" />

                                    <ind.icon
                                        className="w-10 h-10 md:w-12 md:h-12 text-[#1A1A1A] transition-transform duration-500 group-hover:scale-110"
                                        strokeWidth={1.8}
                                    />
                                    <span className="font-display font-extrabold text-[11px] sm:text-xs md:text-sm text-[#1A1A1A] text-center uppercase tracking-widest leading-tight">
                                        {ind.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Industry Cards — Row 2: 3 cards centered */}
                    <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
                        {industries.slice(4).map((ind, idx) => (
                            <motion.div
                                key={ind.id}
                                custom={idx + 4}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.04,
                                    transition: { duration: 0.3, ease: 'easeOut' },
                                }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] aspect-[3/4] border-2 border-[#FFB800] bg-[#FFB800] flex flex-col items-center justify-center gap-5 p-5 transition-all duration-500 group-hover:bg-[#FFB800] group-hover:shadow-[0_0_40px_rgba(255,184,0,0.4)]">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#1A1A1A]/30" />
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1A1A1A]/30" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#1A1A1A]/30" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#1A1A1A]/30" />

                                    <ind.icon
                                        className="w-10 h-10 md:w-12 md:h-12 text-[#1A1A1A] transition-transform duration-500 group-hover:scale-110"
                                        strokeWidth={1.8}
                                    />
                                    <span className="font-display font-extrabold text-[11px] sm:text-xs md:text-sm text-[#1A1A1A] text-center uppercase tracking-widest leading-tight">
                                        {ind.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
