'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

const FRAME_COUNT = 240;

// Build the array of image paths once
const framePaths = Array.from(
    { length: FRAME_COUNT },
    (_, i) => `/hero-sec/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const currentFrameRef = useRef(0);

    // Track scroll progress across the entire pinned section (300vh tall)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // Text overlay transforms — fade in/out at specific scroll range    // Stage 1 (0.00 -> 0.45): Initial Headline
    const stage1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.40, 0.48], [0, 1, 1, 0]);
    const stage1Y = useTransform(scrollYProgress, [0, 0.05, 0.40, 0.48], [40, 0, 0, -30]);

    // Stage 3 (0.50 -> 0.96): Turnkey Solutions & BOM Tool CTA
    const stage3Opacity = useTransform(scrollYProgress, [0.50, 0.58, 0.93, 0.98], [0, 1, 1, 0]);
    const stage3X = useTransform(scrollYProgress, [0.50, 0.58, 0.93, 0.98], [-40, 0, 0, -30]);
    const stage3Y = useTransform(scrollYProgress, [0.50, 0.58, 0.93, 0.98], [20, 0, 0, -20]);

    // Overlay gradient intensity
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.9], [0.35, 0.55, 0.55, 0.4]);

    // ── Preload all frames ──────────────────────────────────────────────
    useEffect(() => {
        let loaded = 0;
        const images: HTMLImageElement[] = [];

        const onLoad = () => {
            loaded++;
            setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
            if (loaded === FRAME_COUNT) {
                imagesRef.current = images;
                setImagesLoaded(true);
                // Draw the first frame immediately
                renderFrame(0);
            }
        };

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = framePaths[i];
            img.onload = onLoad;
            img.onerror = onLoad; // count errors too so we don't stall
            images[i] = img;
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Render a specific frame to canvas ───────────────────────────────
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imagesRef.current[index];
        if (!img || !img.complete) return;

        // Size the canvas to fill the viewport (retina-aware)
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        }

        // Cover-fit the image into the canvas (anchored to top so face is visible)
        const cw = rect.width;
        const ch = rect.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const scale = Math.max(cw / iw, ch / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const sx = (cw - sw) / 2;
        const sy = 0; // Anchor to top — keeps the person's face visible

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, sx, sy, sw, sh);
    }, []);

    // ── Sync scroll position → frame index ──────────────────────────────
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (!imagesLoaded) return;
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(latest * (FRAME_COUNT - 1)))
        );
        if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            requestAnimationFrame(() => renderFrame(frameIndex));
        }
    });

    // ── Handle resize ───────────────────────────────────────────────────
    useEffect(() => {
        const handleResize = () => {
            if (imagesLoaded) {
                renderFrame(currentFrameRef.current);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imagesLoaded, renderFrame]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
            style={{ height: '350vh' }} // Extra scroll runway for the animated text stages
        >
            {/* ─── Sticky Container (pinned to viewport while scrolling) ─── */}
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                {/* Canvas — fills the viewport */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ display: 'block' }}
                />

                {/* Dark gradient overlay on the left for crisp text contrast */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"
                    style={{ opacity: overlayOpacity }}
                />

                {/* Loading indicator */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1A1A1A] z-20">
                        <div className="relative w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
                            <div
                                className="absolute left-0 top-0 h-full bg-[#FFFF00] rounded-full transition-all duration-200 ease-out"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                            Loading {loadProgress}%
                        </span>
                    </div>
                )}

                {/* ─── Animated Text Overlays (Positioned on Left Side) ─── */}
                <div className="absolute inset-0 flex items-center z-10 px-6 sm:px-12 md:px-16 pointer-events-none">
                    <div className="container mx-auto max-w-7xl">
                        <div className="w-full lg:w-1/2 max-w-xl pointer-events-auto">

                            {/* ─── STAGE 1: Main Intro ─── */}
                            <motion.div
                                style={{ opacity: stage1Opacity, y: stage1Y }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-mono uppercase tracking-wider font-bold">
                                    <span>ESDM &amp; Component Solutions</span>
                                </div>
                                <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
                                    Excellence<br />
                                    <span className="text-[#FFFF00]">Engineered</span><br />
                                    For Life.
                                </h1>
                                <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
                                    Serente Electronics is a leading Electronics System &amp; Design
                                    Manufacturing Company (ESDM). ISO 9001:2015 Certified.
                                </p>
                                <div>
                                    <Link
                                        href="/about"
                                        className="group inline-flex items-center gap-3 border-2 border-[#FFFF00] bg-[#FFFF00] text-[#1A1A1A] hover:bg-white hover:border-white px-7 py-3 font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* ─── STAGE 3: Turnkey Solutions & BOM Tool CTA ─── */}
                            <motion.div
                                style={{ opacity: stage3Opacity, x: stage3X, y: stage3Y }}
                                className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 md:left-16 right-6 lg:right-auto w-full lg:w-1/2 max-w-xl space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFF00]/15 border border-[#FFFF00]/40 text-[#FFFF00] text-xs font-mono uppercase tracking-widest font-bold backdrop-blur-md">
                                    <span>Accelerate Supply Chain</span>
                                </div>
                                <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                                    Seamless <span className="text-[#FFFF00]">Turnkey</span> Electronics.
                                </h2>
                                <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed">
                                    Accelerate your electronics manufacturing lifecycle with our global supply network and ISO certified quality control.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-2.5 bg-[#FFFF00] text-[#1A1A1A] hover:bg-white px-7 py-3.5 rounded-none font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl"
                                    >
                                        View Services
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white hover:border-[#FFFF00] hover:text-[#FFFF00] px-7 py-3.5 rounded-none font-display font-bold text-sm uppercase tracking-wider transition-all duration-300"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>

                {/* Subtle scroll indicator — visible only at the start */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]),
                    }}
                >
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-[0.25em]">
                        Scroll
                    </span>
                    <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#FFFF00] animate-[scrollPulse_1.5s_ease-in-out_infinite]" />
                    </div>
                </motion.div>
            </div>

            {/* ─── Marquee Ticker (after the sticky section resolves) ─── */}
            <div className="absolute bottom-0 left-0 w-full bg-[#EAEAEA] border-b border-gray-300 py-3 overflow-hidden whitespace-nowrap z-20">
                <div className="inline-block min-w-full animate-[scroll-left_25s_linear_infinite] whitespace-nowrap">
                    <span className="font-mono font-bold text-sm text-[#1A1A1A] px-4">
                        <span className="text-[#FFFF00] mr-2">⚠️ LATEST UPDATE:</span>
                        Serente Electronics announces expansion of our global supply chain network for active and passive semiconductor components.
                        <span className="mx-8 text-gray-400">|</span>
                        <span className="text-[#FFFF00] mr-2">CERTIFICATION:</span>
                        ISO 9001:2015 Certified for Quality Management Systems.
                        <span className="mx-8 text-gray-400">|</span>
                    </span>
                    <span className="font-mono font-bold text-sm text-[#1A1A1A] px-4">
                        <span className="text-[#FFFF00] mr-2">⚠️ LATEST UPDATE:</span>
                        Serente Electronics announces expansion of our global supply chain network for active and passive semiconductor components.
                        <span className="mx-8 text-gray-400">|</span>
                        <span className="text-[#FFFF00] mr-2">CERTIFICATION:</span>
                        ISO 9001:2015 Certified for Quality Management Systems.
                        <span className="mx-8 text-gray-400">|</span>
                    </span>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollPulse {
                    0% { transform: translateY(-100%); }
                    50% { transform: translateY(0%); }
                    100% { transform: translateY(100%); }
                }
            `}</style>
        </section>
    );
}
