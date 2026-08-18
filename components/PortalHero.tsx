'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════════════════
   PORTAL HERO — Scroll-Driven "Opening" Effect
   Two panels part to reveal a macro PCB image. The SERENTE wordmark
   grows, its tracking tightens, and its halves separate — reading as a
   title *opening* rather than a plain zoom. All values driven by scroll
   position so the portal closes when you scroll back up.
   ═══════════════════════════════════════════════════════════════════════════ */

export default function PortalHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    // Detect prefers-reduced-motion
    useEffect(() => {
        const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mql.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    // ─── Scroll Progress ───
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const smooth = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.0005,
    });

    // ─── Panel Translations ───
    const panelLeftX = useTransform(smooth, [0, 0.35], ['0%', '-105%']);
    const panelRightX = useTransform(smooth, [0, 0.35], ['0%', '105%']);

    // ─── Background Image Scale ───
    const imageScale = useTransform(smooth, [0, 0.45], [1.15, 1]);

    // ─── Duotone Overlay ───
    const overlayOpacity = useTransform(smooth, [0.15, 0.45], [0, 0.3]);

    // ─── Radial Vignette ───
    const vignetteOpacity = useTransform(smooth, [0, 0.3], [0.4, 0.7]);

    // ─── Wordmark Animation ───
    const titleScale = useTransform(smooth, [0, 0.3], [1, 1.4]);
    const titleLetterSpacing = useTransform(smooth, [0, 0.3], ['-0.02em', '-0.06em']);
    const leftHalfX = useTransform(smooth, [0, 0.3], ['0%', '-35%']);
    const rightHalfX = useTransform(smooth, [0, 0.3], ['0%', '35%']);
    const titleOpacity = useTransform(smooth, [0.35, 0.5], [1, 0]);

    // ─── Accent Dots ───
    const dot1X = useTransform(smooth, [0, 0.35], ['0px', '-45vw']);
    const dot1Y = useTransform(smooth, [0, 0.35], ['0px', '-35vh']);
    const dot2X = useTransform(smooth, [0, 0.35], ['0px', '45vw']);
    const dot2Y = useTransform(smooth, [0, 0.35], ['0px', '35vh']);
    const dotScale = useTransform(smooth, [0, 0.15, 0.35], [1, 1.8, 0.4]);
    const dotOpacity = useTransform(smooth, [0, 0.05, 0.3, 0.4], [1, 1, 0.6, 0]);

    // ─── Corner Metadata Fade ───
    const metaOpacity = useTransform(smooth, [0.3, 0.45], [1, 0]);

    // ─── Scroll Indicator ───
    const scrollIndicatorOpacity = useTransform(smooth, [0, 0.08], [1, 0]);

    // ─── Statement Fold ───
    const statementProgress = useTransform(smooth, [0.5, 0.85], [0, 1]);
    const statementY = useTransform(statementProgress, [0, 1], [60, 0]);
    const statementOpacity = useTransform(statementProgress, [0, 0.4], [0, 1]);
    const floatingImageRotate = useTransform(smooth, [0.5, 1], [0, 12]);
    const floatingImageY = useTransform(smooth, [0.5, 1], [40, -30]);

    // If reduced motion, skip all scroll animations
    if (reducedMotion) {
        return (
            <section className="relative">
                {/* Static open state */}
                <div className="relative h-screen overflow-hidden bg-[#0A0C0E]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/hero-section/vecteezy_two-people-in-lab-coats-working-on-electronics_84770587.webm"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,184,0,0.15), rgba(46,107,114,0.15))',
                            mixBlendMode: 'overlay',
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,12,14,0.8) 100%)',
                        }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1
                            className="font-display font-extrabold text-[#EDE7DC] uppercase select-none flex items-baseline gap-[0.3em]"
                            style={{ fontSize: 'clamp(2rem, 8vw, 7rem)', letterSpacing: '-0.04em', lineHeight: 0.85 }}
                        >
                            <span>SERENTE</span>
                            <span className="text-[#FFB800]" style={{ fontSize: '0.45em', letterSpacing: '0.12em' }}>ELECTRONICS</span>
                        </h1>
                    </div>
                </div>
                {/* Statement fold */}
                <div className="relative min-h-screen bg-[#0A0C0E] flex items-center">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <p className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-[#FFB800] mb-6">
                            Precision Manufacturing
                        </p>
                        <h2
                            className="font-display font-bold text-[#EDE7DC] max-w-[22ch]"
                            style={{ fontSize: 'clamp(24px, 3.6vw, 52px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
                        >
                            We engineer electronics that{' '}
                            <span className="text-[#FFB800]">power industries</span>{' '}
                            across the globe.
                        </h2>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={heroRef} className="relative" style={{ height: '280vh' }}>

            {/* ═══ STICKY STAGE ═══ */}
            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ isolation: 'isolate' }}>

                {/* Layer 1: Background Video */}
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                    style={{ scale: imageScale }}
                    src="/hero-section/vecteezy_two-people-in-lab-coats-working-on-electronics_84770587.webm"
                />

                {/* Layer 2: Duotone Overlay */}
                <motion.div
                    className="absolute inset-0 will-change-[opacity]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,184,0,0.25), rgba(46,107,114,0.25))',
                        mixBlendMode: 'overlay',
                        opacity: overlayOpacity,
                    }}
                />

                {/* Layer 3: Radial Vignette */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 25%, rgba(10,12,14,0.85) 100%)',
                        opacity: vignetteOpacity,
                    }}
                />

                {/* Layer 4: LEFT PANEL */}
                <motion.div
                    className="absolute top-0 left-0 h-full bg-[#0A0C0E] will-change-transform"
                    style={{
                        width: '52%',
                        x: panelLeftX,
                        zIndex: 10,
                    }}
                />

                {/* Layer 4: RIGHT PANEL */}
                <motion.div
                    className="absolute top-0 right-0 h-full bg-[#0A0C0E] will-change-transform"
                    style={{
                        width: '52%',
                        x: panelRightX,
                        zIndex: 10,
                    }}
                />

                {/* Layer 5: Panel seam hairline (visible when closed) */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full"
                    style={{
                        background: 'rgba(237,231,220,0.13)',
                        zIndex: 11,
                        opacity: useTransform(smooth, [0, 0.15], [1, 0]),
                    }}
                />

                {/* Layer 6: Accent Dots */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 12 }}>
                    {/* Amber dot */}
                    <motion.div
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                            background: '#FFB800',
                            boxShadow: '0 0 20px rgba(255,184,0,0.8), 0 0 60px rgba(255,184,0,0.4)',
                            x: dot1X,
                            y: dot1Y,
                            scale: dotScale,
                            opacity: dotOpacity,
                        }}
                    />
                    {/* Teal dot */}
                    <motion.div
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                            background: '#2E6B72',
                            boxShadow: '0 0 20px rgba(46,107,114,0.8), 0 0 60px rgba(46,107,114,0.4)',
                            x: dot2X,
                            y: dot2Y,
                            scale: dotScale,
                            opacity: dotOpacity,
                        }}
                    />
                </div>

                {/* Layer 7: WORDMARK */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 15 }}>
                    <motion.h1
                        className="font-display font-extrabold text-[#EDE7DC] uppercase select-none flex items-baseline gap-[0.3em] will-change-transform"
                        style={{
                            fontSize: 'clamp(2rem, 8vw, 7rem)',
                            lineHeight: 0.85,
                            scale: titleScale,
                            letterSpacing: titleLetterSpacing,
                            opacity: titleOpacity,
                        }}
                    >
                        <motion.span style={{ x: leftHalfX }} className="inline-block will-change-transform">
                            SERENTE
                        </motion.span>
                        <motion.span
                            style={{ x: rightHalfX, fontSize: '0.45em', letterSpacing: '0.12em' }}
                            className="inline-block text-[#FFB800] will-change-transform"
                        >
                            ELECTRONICS
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Layer 8: Corner Metadata */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ zIndex: 16, opacity: metaOpacity }}
                >
                    {/* Top-left */}
                    <div className="absolute top-24 left-6 md:top-28 md:left-8">
                        <p className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.15em] text-[#9CA3AF]">
                            Est. 2014
                        </p>
                    </div>
                    {/* Top-right */}
                    <div className="absolute top-24 right-6 md:top-28 md:right-8 text-right">
                        <p className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.15em] text-[#9CA3AF]">
                            ISO 9001:2015
                        </p>
                    </div>
                    {/* Bottom-left */}
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                        <p className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378]">
                            ESDM{' '}
                            <span className="text-[#FFB800]">·</span>{' '}
                            IoT{' '}
                            <span className="text-[#2E6B72]">·</span>{' '}
                            OEM
                        </p>
                    </div>
                </motion.div>

                {/* Layer 9: Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    style={{ zIndex: 16, opacity: scrollIndicatorOpacity }}
                >
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF]">
                        Scroll
                    </p>
                    <div className="w-px h-8 bg-gradient-to-b from-[#9CA3AF] to-transparent relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 w-full h-3 bg-[#FFB800]"
                            style={{
                                animation: 'scrollPulse 1.5s ease-in-out infinite',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Bottom hairline */}
                <div
                    className="absolute bottom-0 left-0 w-full h-px"
                    style={{ background: 'rgba(237,231,220,0.13)', zIndex: 16 }}
                />

                {/* ═══ STATEMENT FOLD (Now inside sticky stage, fading in) ═══ */}
                <motion.div
                    className="absolute inset-0 flex items-center"
                    style={{ zIndex: 20, pointerEvents: 'none' }}
                >
                    <div className="container mx-auto px-4 max-w-7xl relative w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
                            {/* Text Column */}
                            <motion.div
                                className="lg:col-span-7 space-y-6"
                                style={{ y: statementY, opacity: statementOpacity }}
                            >
                                <p className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-[#FFB800]">
                                    Precision Manufacturing
                                </p>

                                <h2
                                    className="font-display font-bold text-[#EDE7DC] max-w-[22ch]"
                                    style={{
                                        fontSize: 'clamp(24px, 3.6vw, 52px)',
                                        lineHeight: 1.15,
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    We engineer electronics that{' '}
                                    <span className="text-[#FFB800]">power industries</span>{' '}
                                    across the globe.
                                </h2>

                                <p className="font-mono text-sm text-[#9CA3AF] max-w-lg leading-relaxed">
                                    From conceptual design to full-scale automated manufacturing —
                                    delivering production-ready electronics systems engineered
                                    for mission-critical reliability.
                                </p>
                            </motion.div>

                            {/* Outlined Index Numeral */}
                            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
                                {/* Outlined numeral */}
                                <motion.span
                                    className="font-display font-extrabold text-transparent select-none absolute"
                                    style={{
                                        fontSize: 'clamp(120px, 20vw, 280px)',
                                        WebkitTextStroke: '1.5px rgba(237,231,220,0.13)',
                                        lineHeight: 0.85,
                                        y: statementY,
                                        opacity: useTransform(statementProgress, [0, 0.5], [0, 0.6]),
                                    }}
                                >
                                    01
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll pulse animation keyframes */}
            <style jsx>{`
                @keyframes scrollPulse {
                    0%, 100% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(20px); opacity: 0; }
                }
            `}</style>
        </section>
    );
}
