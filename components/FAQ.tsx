'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What type of electronic components do you supply?',
        answer: 'We supply a comprehensive range of electronic components including integrated circuits (ICs), MOSFET transistors, IGBT modules, Schottky diodes, Zener diodes, rectifier diodes, NPN/PNP transistors, capacitors, resistors, inductors, connectors, and optocoupler transistors from leading manufacturers worldwide.',
    },
    {
        question: 'Do you offer warranty on your products?',
        answer: 'Yes, all our semiconductor components and electronic parts come with a manufacturer warranty. We are ISO 9001:2015 certified and provide full traceability documentation. If you receive any defective components, we offer hassle-free returns and replacements.',
    },
    {
        question: 'How do I use the BOM Upload Tool?',
        answer: 'Our BOM sourcing tool allows you to upload your component list in Excel or CSV format. Simply navigate to the BOM Tool page, upload your file, and receive instant quotes for all semiconductor and electronic components.',
    },
    {
        question: 'Can you Source Obsolete or Hard-to-Find Components?',
        answer: 'Yes! We specialize in sourcing obsolete, end-of-life, and hard-to-find electronic components including integrated circuits, MOSFETs, IGBTs, and discrete semiconductor parts. Our global network ensures we locate rare parts.',
    }
];

export default function FAQ() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#1A1A1A] py-32 relative overflow-hidden min-h-screen flex flex-col justify-center">
            
            <div className="container-fluid mx-auto max-w-7xl relative z-20">
                <div className="mb-24 flex items-baseline gap-4">
                    <span className="font-mono text-[#E3D2C3] text-sm font-bold">[ FAQ ]</span>
                    <h2 className="font-display text-4xl md:text-6xl text-white font-bold tracking-tighter">INQUIRIES</h2>
                </div>

                <div className="flex flex-col border-t border-white/10">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx}
                            className="group relative border-b border-white/10 py-12 md:py-16 transition-colors duration-500 hover:border-white/40 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:items-center">
                                <span className="font-mono text-[#2DAA9E] text-2xl font-bold">0{idx + 1}</span>
                                <h3 className={`font-display text-3xl md:text-5xl font-bold transition-colors duration-500 ${hoveredIndex === idx ? 'text-white' : 'text-white/40'}`}>
                                    {faq.question}
                                </h3>
                            </div>

                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, y: 10 }}
                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: 10 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="font-mono text-sm md:text-base text-[#E3D2C3] mt-8 max-w-2xl leading-relaxed uppercase tracking-wide">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Liquid Glass Overlay Effect on Hover */}
            <div 
                className={`absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none z-10 ${hoveredIndex !== null ? 'opacity-40' : 'opacity-0'}`} 
            />

        </section>
    );
}
