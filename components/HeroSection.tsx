'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const videos = [
    '/hero-sec/Engineer_assembling_electronic_PCB_202608071248.webm',
    '/hero-sec/Engineers_stand_in_research_labo…_202608071251.webm'
];

export default function HeroSection() {
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full pt-[104px]">
            {/* Cinematic Hero Container */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center bg-[#1A1A1A]">
                {/* Looping Video Background */}
                <div className="absolute inset-0 w-full h-full opacity-50">
                    <AnimatePresence mode="wait">
                        <motion.video
                            key={currentVideo}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            src={videos[currentVideo]}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>
                
                {/* Content Overlay */}
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-2xl">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-[1.1] mb-6"
                        >
                            Excellence<br />
                            <span className="text-[#2DAA9E]">Engineered</span><br />
                            For Life.
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-mono text-sm md:text-base text-gray-300 max-w-lg mb-10 leading-relaxed"
                        >
                            Serente Electronics is a leading Electronics System & Design Manufacturing Company (ESDM). ISO 9001:2015 Certified.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link href="/about" className="inline-block border-2 border-[#2DAA9E] text-white hover:bg-[#2DAA9E] px-8 py-3 font-display font-bold uppercase tracking-wider transition-all duration-300">
                                Read More
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scrolling Marquee / Notice Ticker */}
            <div className="w-full bg-[#EAEAEA] border-b border-gray-300 py-3 overflow-hidden whitespace-nowrap relative">
                <div className="inline-block min-w-full animate-[scroll-left_25s_linear_infinite] whitespace-nowrap">
                    <span className="font-mono font-bold text-sm text-[#1A1A1A] px-4">
                        <span className="text-[#2DAA9E] mr-2">⚠️ LATEST UPDATE:</span> 
                        Serente Electronics announces expansion of our global supply chain network for active and passive semiconductor components. 
                        <span className="mx-8 text-gray-400">|</span>
                        <span className="text-[#2DAA9E] mr-2">CERTIFICATION:</span>
                        ISO 9001:2015 Certified for Quality Management Systems.
                        <span className="mx-8 text-gray-400">|</span>
                    </span>
                    <span className="font-mono font-bold text-sm text-[#1A1A1A] px-4">
                        <span className="text-[#2DAA9E] mr-2">⚠️ LATEST UPDATE:</span> 
                        Serente Electronics announces expansion of our global supply chain network for active and passive semiconductor components. 
                        <span className="mx-8 text-gray-400">|</span>
                        <span className="text-[#2DAA9E] mr-2">CERTIFICATION:</span>
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
            `}</style>
        </section>
    );
}
