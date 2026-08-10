'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const images = [
    '/about-team.jpg',
    '/about-factory.jpg',
    '/about-cleanroom.png',
    '/about-testing.jpg',
    '/about-inspection.png'
];

export default function IndustrialAbout() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row shadow-lg border border-gray-200">
                    
                    {/* Left Side: Image Slider (50%) */}
                    <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] bg-[#1A1A1A] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImage}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${images[currentImage]})` }}
                            />
                        </AnimatePresence>
                        {/* Overlay for contrast */}
                        <div className="absolute inset-0 bg-black/20" />
                        
                        {/* Slider Nav Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            {images.map((_, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentImage === idx ? 'bg-[#FFFF00] w-6' : 'bg-white/50 hover:bg-white'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Text & Corporate Info (50%) */}
                    <div className="lg:w-1/2 bg-[#F8F9FA] p-8 md:p-16 flex flex-col justify-center">
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-[#1A1A1A] mb-2">
                            About Us
                        </h2>
                        <h3 className="font-mono text-sm md:text-base font-bold text-[#FFFF00] mb-8 uppercase tracking-wide">
                            Serente Electronics India Limited
                        </h3>
                        
                        <div className="space-y-6 font-mono text-sm text-gray-700 leading-relaxed">
                            <p>
                                Serente Electronics is a leading end-to-end and IoT solutions-enabled integrated electronics manufacturer globally. We have capabilities across the entire spectrum of ESDM services.
                            </p>
                            <p>
                                With decades of experience in providing Conceptual Design, Process Engineering, Integrated Manufacturing, and Life Cycle Support, we serve major players in the Automotive, Industrial, Aerospace and Defence, Medical, Railways, and IoT sectors.
                            </p>
                            <p>
                                We specialize in high-mix, high-value, and complex manufacturing, providing global supply chain resilience through our strategically located procurement hubs.
                            </p>
                        </div>
                        
                        <div className="mt-10">
                            <Link href="/about" className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#FFFF00] text-white px-8 py-3.5 font-display font-bold uppercase tracking-wider transition-colors duration-300">
                                Know More <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
