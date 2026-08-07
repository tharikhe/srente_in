'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Plane, Activity, Factory, Wifi, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
    {
        id: 'automotive',
        title: 'Automotive',
        icon: Car,
        image: '/images/industry_automotive.png',
        description: 'Advanced electronics manufacturing for modern EV systems, autonomous driving arrays, and ruggedized in-cabin controls.'
    },
    {
        id: 'aerospace',
        title: 'Aerospace & Defence',
        icon: Plane,
        image: '/images/industry_aerospace.png',
        description: 'High-reliability circuit boards and mission-critical assemblies strictly adhering to AS9100 quality standards.'
    },
    {
        id: 'medical',
        title: 'Medical Devices',
        icon: Activity,
        image: '/images/industry_medical.png',
        description: 'ISO 13485 compliant manufacturing for life-saving diagnostic equipment and wearable health monitors.'
    },
    {
        id: 'industrial',
        title: 'Industrial',
        icon: Factory,
        image: '/images/industry_industrial.png',
        description: 'Heavy-duty automation controllers, robust power supplies, and smart factory sensory nodes.'
    },
    {
        id: 'iot',
        title: 'IoT & Smart Tech',
        icon: Wifi,
        image: '/images/industry_iot.png',
        description: 'High-volume production for connected home devices, mesh networks, and environmental sensors.'
    }
];

export default function HomeIndustries() {
    const [hoveredIdx, setHoveredIdx] = useState<number>(0);

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-display font-bold text-4xl md:text-5xl text-[#1A1A1A] mb-6 uppercase tracking-wider"
                    >
                        Industries We <span className="text-[#2DAA9E]">Serve</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-2 bg-[#2DAA9E] mx-auto"
                    />
                </div>

                <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] border border-gray-200 shadow-xl overflow-hidden">
                    
                    {/* Navigation Sidebar */}
                    <div className="w-full lg:w-1/3 bg-[#F8F9FA] flex flex-col justify-center">
                        {industries.map((ind, idx) => (
                            <button
                                key={ind.id}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onClick={() => setHoveredIdx(idx)}
                                className={`group flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300 border-b border-gray-200 last:border-b-0 ${
                                    hoveredIdx === idx ? 'bg-[#1A1A1A] text-white' : 'hover:bg-white text-gray-500'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <ind.icon className={`w-6 h-6 transition-colors duration-300 ${
                                        hoveredIdx === idx ? 'text-[#2DAA9E]' : 'group-hover:text-[#1A1A1A]'
                                    }`} />
                                    <span className={`font-display font-bold text-xl tracking-wide transition-colors duration-300 ${
                                        hoveredIdx === idx ? 'text-white' : 'group-hover:text-[#1A1A1A]'
                                    }`}>
                                        {ind.title}
                                    </span>
                                </div>
                                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                                    hoveredIdx === idx ? 'opacity-100 translate-x-0 text-[#E3D2C3]' : 'opacity-0 -translate-x-4'
                                }`} />
                            </button>
                        ))}
                    </div>

                    {/* Image & Content Display */}
                    <div className="w-full lg:w-2/3 relative h-[400px] lg:h-full bg-[#1A1A1A] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={hoveredIdx}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {/* Background Image */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${industries[hoveredIdx].image})` }}
                                />
                                {/* Dark Gradient Overlay for Text Legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-[#1A1A1A]/10" />
                                
                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 flex flex-col justify-end h-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2DAA9E]/20 text-[#2DAA9E] border border-[#2DAA9E]/30 rounded-full font-mono text-xs font-bold uppercase tracking-widest mb-6">
                                            {industries[hoveredIdx].title} Sector
                                        </div>
                                        <p className="font-mono text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl border-l-4 border-[#E3D2C3] pl-6">
                                            {industries[hoveredIdx].description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
