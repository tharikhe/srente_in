'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getCategoryPath } from '@/lib/category-url';

const banners = [
    {
        id: 1,
        title: "High-Performance Connectors",
        subtitle: "Reliable Board-to-Board Solutions",
        description: "Discover our premium range of connectors designed for durability and signal integrity.",
        image: "/products-img/board-to-board-connector.webp",
        bgGradient: "from-blue-600 to-cyan-500",
        link: getCategoryPath('Connectors')
    },
    {
        id: 2,
        title: "Industrial Relay Modules",
        subtitle: "Powering Automation",
        description: "Heavy-duty relays for industrial control systems and automation.",
        image: "/products-img/relays.jpg",
        bgGradient: "from-emerald-600 to-teal-500",
        link: getCategoryPath('Relays')
    },
    {
        id: 3,
        title: "Cooling Solutions",
        subtitle: "Efficient Thermal Management",
        description: "Keep your systems running at optimal temperatures with our advanced cooling fans.",
        image: "/products-img/fan.jpg",
        bgGradient: "from-indigo-600 to-purple-500",
        link: getCategoryPath('Fans')
    },
    {
        id: 4,
        title: "Massive Inventory",
        subtitle: "Ready to Ship Globally",
        description: "With over 50,000 SKUs in stock, we have the components you need, when you need them.", // General banner
        image: "/products-img/inventory.jpg",
        bgGradient: "from-amber-500 to-orange-500",
        link: "/products"
    }
];

export default function ProductBannerSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="container mx-auto px-4 mt-8 mb-16 relative z-10"> {/* Adjusted margins */}
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={`absolute inset-0 w-full h-full bg-gradient-to-r ${banners[currentIndex].bgGradient} flex items-center`}
                    >
                        {/* Content Container */}
                        <div className="w-full h-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 md:p-16 relative overflow-hidden">

                            {/* Decorative Background Patterns */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/4" />

                            {/* Text Content */}
                            <div className="relative z-10 w-full md:w-1/2 text-white flex flex-col items-start text-left mb-6 md:mb-0">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold mb-4 tracking-wider uppercase border border-white/10">
                                    {banners[currentIndex].subtitle}
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
                                    {banners[currentIndex].title}
                                </h2>
                                <p className="text-white/90 text-sm sm:text-lg mb-8 max-w-lg leading-relaxed font-light">
                                    {banners[currentIndex].description}
                                </p>
                                <Link
                                    href={banners[currentIndex].link}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95"
                                >
                                    Explore Products
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Image Content */}
                            <div className="relative z-10 w-full md:w-1/2 h-48 md:h-full flex items-center justify-center">
                                <div className="relative w-full h-full max-w-[400px] max-h-[300px]">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={banners[currentIndex].image}
                                            alt={banners[currentIndex].title}
                                            fill
                                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>

                                    {/* Floating Sparkle/Glow effect behind image */}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {banners.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
