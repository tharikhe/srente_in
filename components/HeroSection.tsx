'use client';

import React, { useEffect, useState } from 'react';
import { Award, Zap, Globe, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SplineScene } from './ui/SplineScene';

// Types for component props
interface HeroProps {
    trustBadge?: {
        text: string;
        icons?: React.ReactNode[];
    };
    headline: {
        line1: string;
        line2: string;
    };
    subtitle: string;
    className?: string;
}

// Stats Data with brand palette
const stats = [
    {
        value: '15+',
        label: 'Years Experience',
        icon: Award,
        badge: 'Est. 2011',
        color: '#2DAA9E',
    },
    {
        value: '50K+',
        label: 'Products Sourced',
        icon: Zap,
        badge: 'Ready Stock',
        color: '#E3D2C3',
    },
    {
        value: '100+',
        label: 'Countries Served',
        icon: Globe,
        badge: 'Global',
        color: '#66D2CE',
    },
    {
        value: '99.9%',
        label: 'Client Satisfaction',
        icon: CheckCircle2,
        badge: 'ISO 9001',
        color: '#2DAA9E',
    },
];

// Stagger animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const scaleVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
            delay: 0.3,
        },
    },
};

const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
            delay: 0.6 + i * 0.1,
        },
    }),
};

// Floating orb component for ambient background
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
    <motion.div
        className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
        animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
        }}
    />
);

// Premium Hero Component
const HeroSection: React.FC<HeroProps> = ({
    trustBadge,
    headline,
    subtitle,
    className = ""
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
        setIsLoaded(true);
    }, []);

    return (
        <div className={`relative w-full overflow-hidden bg-[#1A1A1A] rounded-2xl sm:rounded-3xl mb-6 sm:mb-10 ${className}`}>
            {/* Custom Styles */}
            <style jsx>{`
                /* Spline loader animation */
                .loader {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(45, 170, 158, 0.2);
                    border-top-color: #2DAA9E;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* Subtle grain texture */
                .grain-overlay {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
                    background-repeat: repeat;
                }

                /* Grid pattern */
                .grid-pattern {
                    background-image: 
                        linear-gradient(rgba(45, 170, 158, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(45, 170, 158, 0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                }

                /* Glowing border on stat cards */
                .stat-card {
                    position: relative;
                    overflow: hidden;
                }
                .stat-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(45, 170, 158, 0.5), transparent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .stat-card:hover::before {
                    opacity: 1;
                }
            `}</style>

            {/* ====== Background Layers ====== */}

            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#111111]" />

            {/* Animated floating orbs */}
            <FloatingOrb
                className="w-[500px] h-[500px] bg-[#2DAA9E]/8 top-[-10%] left-[-5%]"
                delay={0}
            />
            <FloatingOrb
                className="w-[400px] h-[400px] bg-[#E3D2C3]/6 bottom-[-10%] right-[10%]"
                delay={2}
            />
            <FloatingOrb
                className="w-[300px] h-[300px] bg-[#66D2CE]/5 top-[40%] right-[-5%]"
                delay={4}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern" />

            {/* Grain texture */}
            <div className="absolute inset-0 grain-overlay" />

            {/* ====== Main Content ====== */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px]">

                {/* ====== Left Side: Text Content ====== */}
                <motion.div
                    className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-12 lg:py-16 z-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    {/* Trust Badge */}
                    {trustBadge && (
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full group cursor-default hover:bg-white/8 transition-colors duration-300">
                                <div className="relative flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#2DAA9E] rounded-full" />
                                    <div className="absolute w-2 h-2 bg-[#2DAA9E] rounded-full animate-ping opacity-75" />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-[#E3D2C3] tracking-wide">
                                    {trustBadge.text}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-[#2DAA9E] transition-colors" />
                            </div>
                        </motion.div>
                    )}

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
                    >
                        <span className="text-white block">
                            {headline.line1}
                        </span>
                        <span className="bg-gradient-to-r from-[#2DAA9E] via-[#66D2CE] to-[#2DAA9E] bg-clip-text text-transparent block mt-1">
                            {headline.line2 || "Serente Electronics"}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed mb-8 font-medium"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                        <Link href="/products">
                            <button className="group relative px-7 py-3.5 bg-gradient-to-r from-[#2DAA9E] to-[#258B82] text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(45,170,158,0.3)] transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden">
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative">Browse Catalog</span>
                                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <Link href="/contact">
                            <button className="group px-7 py-3.5 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 hover:border-[#2DAA9E]/50 transition-all duration-300 flex items-center justify-center gap-2.5">
                                <span>Request a Quote</span>
                                <ArrowRight className="w-4 h-4 text-[#2DAA9E] group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={statsVariants}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                className="stat-card bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl p-3.5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group cursor-default"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                                        style={{ backgroundColor: `${stat.color}15` }}
                                    >
                                        <stat.icon className="w-3.5 h-3.5" style={{ color: stat.color }} />
                                    </div>
                                    <span
                                        className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                                        style={{
                                            backgroundColor: `${stat.color}10`,
                                            color: stat.color,
                                            borderColor: `${stat.color}20`,
                                        }}
                                    >
                                        {stat.badge}
                                    </span>
                                </div>
                                <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div className="text-[11px] font-medium text-[#6B7280] mt-0.5">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ====== Right Side: Spline 3D Robot ====== */}
                <motion.div
                    className="flex-1 relative w-full lg:w-auto min-h-[400px] sm:min-h-[450px] lg:min-h-[700px]"
                    variants={scaleVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    {/* Glow behind the robot */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[80%] h-[60%] bg-[#2DAA9E]/10 rounded-full blur-[100px]" />
                    </div>

                    {/* Spline 3D Scene */}
                    <div 
                        className="absolute inset-x-0 bottom-0 top-[-10%] sm:top-[-20%] pointer-events-auto flex items-end justify-center"
                        style={{ 
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)', 
                            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)' 
                        }}
                    >
                        <div 
                            className="w-full h-full"
                            style={{ 
                                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)', 
                                maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)' 
                            }}
                        >
                            <div className="w-full h-full transform scale-75 sm:scale-90 lg:scale-95 origin-bottom translate-y-[2%]">
                                <SplineScene
                                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom gradient fade on the spline side */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
                </motion.div>
            </div>

            {/* ====== Bottom Edge Gradient ====== */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2DAA9E]/30 to-transparent" />
        </div>
    );
};

export default HeroSection;
