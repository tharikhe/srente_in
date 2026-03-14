'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Star, Award, ChevronRight, Zap, Globe, CheckCircle2, ArrowRight, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { ContainerScroll } from './ui/container-scroll-animation';

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
    buttons?: {
        primary?: {
            text: string;
            onClick?: () => void;
        };
        secondary?: {
            text: string;
            onClick?: () => void;
        };
    };
    className?: string;
}

// Video sources for the hero section
const heroVideos = [
    '/hero-sec/A_professional_woman_202512091328.webm',
    '/hero-sec/Female_engineer_in_202512091328.webm',
];

// Video Background Hook with smooth crossfade transitions
const useVideoBackground = () => {
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [videosLoaded, setVideosLoaded] = useState({ video1: false, video2: false });

    const handleVideoEnd = useCallback(() => {
        setIsTransitioning(true);

        // Start playing the next video slightly before the transition
        const nextVideo = activeVideo === 1 ? video2Ref.current : video1Ref.current;
        if (nextVideo) {
            nextVideo.currentTime = 0;
            nextVideo.play().catch(console.error);
        }

        // Smooth crossfade transition
        setTimeout(() => {
            setActiveVideo(prev => prev === 1 ? 2 : 1);
            setIsTransitioning(false);
        }, 800); // Match with CSS transition duration
    }, [activeVideo]);

    useEffect(() => {
        const video1 = video1Ref.current;
        const video2 = video2Ref.current;

        if (!video1 || !video2) return;

        // Set up video 1 immediately
        video1.src = heroVideos[0];

        // Lazy load video 2
        const loadVideo2 = () => {
            if (!video2.src) {
                video2.src = heroVideos[1];
                video2.load(); // Explicitly load
            }
        };

        // Handle video loaded events
        const handleVideo1Loaded = () => {
            setVideosLoaded(prev => ({ ...prev, video1: true }));
            // Start loading video 2 shortly after video 1 is ready
            setTimeout(loadVideo2, 3000);
        };
        const handleVideo2Loaded = () => setVideosLoaded(prev => ({ ...prev, video2: true }));

        video1.addEventListener('loadeddata', handleVideo1Loaded);
        video2.addEventListener('loadeddata', handleVideo2Loaded);

        // Start playing the first video when it's loaded
        video1.addEventListener('canplay', () => {
            video1.play().catch(console.error);
        });

        // Handle video end for transitions
        video1.addEventListener('ended', handleVideoEnd);
        video2.addEventListener('ended', handleVideoEnd);

        return () => {
            video1.removeEventListener('loadeddata', handleVideo1Loaded);
            video2.removeEventListener('loadeddata', handleVideo2Loaded);
            video1.removeEventListener('ended', handleVideoEnd);
            video2.removeEventListener('ended', handleVideoEnd);
        };
    }, [handleVideoEnd]);

    return { video1Ref, video2Ref, activeVideo, isTransitioning, videosLoaded };
};

// Stats Data
const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50K+', label: 'Products', icon: Zap },
    { value: '100+', label: 'Countries', icon: Globe },
    { value: '99.9%', label: 'Client Satisfaction', icon: CheckCircle2 },
];

// Premium Hero Component
const HeroSection: React.FC<HeroProps> = ({
    trustBadge,
    headline,
    subtitle,
    buttons,
    className = ""
}) => {
    const { video1Ref, video2Ref, activeVideo, isTransitioning, videosLoaded } = useVideoBackground();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black mb-6 sm:mb-10 ${className}`}>
            {/* Custom Animations */}
            <style jsx>{`
                /* Video Transition Styles */
                .video-layer {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .video-active {
                    opacity: 1;
                    z-index: 2;
                }

                .video-inactive {
                    opacity: 0;
                    z-index: 1;
                }

                /* Cinematic overlay for video enhancement */
                .cinematic-overlay {
                    background: 
                        linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.5) 100%),
                        radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%);
                }

                /* Subtle vignette effect */
                .vignette {
                    box-shadow: inset 0 0 150px rgba(0,0,0,0.5);
                }

                /* Custom Skew Button Styles */
                .btn-skew {
                    --color: #C4960C;
                    --color-hover: #1a1a1a;
                    padding: 1em 2.5em;
                    background-color: transparent;
                    border-radius: 8px;
                    border: 2px solid var(--color);
                    transition: .5s;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    z-index: 1;
                    font-weight: 600;
                    font-size: 16px;
                    font-family: inherit;
                    text-transform: uppercase;
                    color: var(--color);
                    letter-spacing: 0.05em;
                }
                .btn-skew::after, .btn-skew::before {
                    content: '';
                    display: block;
                    height: 100%;
                    width: 100%;
                    transform: skew(90deg) translate(-50%, -50%);
                    position: absolute;
                    inset: 50%;
                    left: 25%;
                    z-index: -1;
                    transition: .5s ease-out;
                    background-color: var(--color);
                }
                .btn-skew::before {
                    top: -50%;
                    left: -25%;
                    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
                }
                .btn-skew:hover::before {
                    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
                }
                .btn-skew:hover::after {
                    transform: skew(45deg) translate(-50%, -50%);
                }
                .btn-skew:hover {
                    color: var(--color-hover);
                }
                .btn-skew:active {
                    filter: brightness(.9);
                    transform: scale(.98);
                }

                /* Secondary Button - Teal variant */
                .btn-skew-secondary {
                    --color: #0D9488;
                    --color-hover: #ffffff;
                }

                /* Video loading pulse animation */
                @keyframes subtle-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }

                .loading-bg {
                    animation: subtle-pulse 2s ease-in-out infinite;
                }
            `}</style>

            {/* Video Background Container */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Loading background */}
                {(!videosLoaded.video1 || !videosLoaded.video2) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 loading-bg z-0" />
                )}

                {/* Video 1 */}
                <video
                    ref={video1Ref}
                    className={`video-layer ${activeVideo === 1 ? 'video-active' : 'video-inactive'}`}
                    muted
                    playsInline
                    preload="metadata"
                    title="Professional woman working"
                    aria-label="A professional woman working in a business environment"
                />

                {/* Video 2 */}
                <video
                    ref={video2Ref}
                    className={`video-layer ${activeVideo === 2 ? 'video-active' : 'video-inactive'}`}
                    muted
                    playsInline
                    preload="metadata"
                    title="Female engineer working"
                    aria-label="A female engineer working in an industrial setting"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 cinematic-overlay z-10" />

                {/* Vignette effect */}
                <div className="absolute inset-0 vignette z-10 pointer-events-none" />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Added darkness */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

            {/* Video Progress Indicators */}
            <div className="absolute bottom-32 sm:bottom-40 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeVideo === 1 ? 'bg-white scale-125' : 'bg-white/40'}`} />
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeVideo === 2 ? 'bg-white scale-125' : 'bg-white/40'}`} />
            </div>

            {/* Main Content with Container Scroll Animation */}
            <div className="relative z-20">
                <ContainerScroll
                    titleComponent={
                        <div className="flex flex-col items-center justify-center">
                            {/* Trust Badge */}
                            {trustBadge && (
                                <div className="inline-flex mb-6 sm:mb-8 animate-fade-in-up">
                                    <div className="relative group cursor-pointer">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                                        <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3].map((i) => (
                                                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold fill-brand-gold" />
                                                ))}
                                            </div>
                                            <span className="text-white font-semibold tracking-wide text-xs sm:text-sm">
                                                {trustBadge.text}
                                            </span>
                                            <ChevronRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                                <span className="text-yellow-400 italic font-serif block mb-2">
                                    {headline.line1}
                                </span>
                                <span className="text-teal-400">
                                    {headline.line2}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
                                {subtitle}
                            </p>

                            {/* Buttons */}
                            {buttons && (
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
                                    {buttons.primary && (
                                        <Link href="/products">
                                            <button
                                                onClick={buttons.primary.onClick}
                                                className="btn-skew flex items-center justify-center gap-3"
                                            >
                                                <span>{buttons.primary.text}</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    )}

                                    {buttons.secondary && (
                                        <Link href="/bom">
                                            <button
                                                onClick={buttons.secondary.onClick}
                                                className="btn-skew btn-skew-secondary flex items-center justify-center gap-3"
                                            >
                                                <Zap className="w-5 h-5" />
                                                <span>{buttons.secondary.text}</span>
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    }
                >
                    {/* Dashboard Mockup Card */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col gap-6">
                        {/* Header Bar */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-gray-400 text-sm font-mono">serente-dashboard.exe</div>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-brand-gold/50 transition-colors group flex flex-col items-center justify-center text-center">
                                    <div className="p-3 bg-brand-gold/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                        <stat.icon className="w-8 h-8 text-brand-gold" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}

                            {/* Chart Placeholder */}
                            <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white/5 rounded-xl p-6 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-end gap-2 h-32 w-full px-8 pb-4">
                                    {[40, 70, 45, 90, 65, 85, 50, 75, 60, 95, 80, 55].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-brand-gold/30 hover:bg-brand-gold transition-colors rounded-t-sm"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                                <div className="absolute top-4 left-6 text-white font-medium flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-brand-gold" />
                                    Monthly Growth
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerScroll>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-20" />
        </div>
    );
};

export default HeroSection;
