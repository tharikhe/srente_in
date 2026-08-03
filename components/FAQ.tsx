'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
        question: 'What is the minimum order quantity (MOQ)?',
        answer: 'Our MOQ varies by product. For most standard semiconductor components, we offer flexible quantities starting from 1 piece. For bulk semiconductor components and wholesale orders, we provide significant volume discounts.',
    },
    {
        question: 'How do I use the BOM Upload Tool?',
        answer: 'Our BOM sourcing tool allows you to upload your component list in Excel or CSV format. Simply navigate to the BOM Tool page, upload your file, and receive instant quotes for all semiconductor and electronic components.',
    },
    {
        question: 'What are your Shipping Options and Delivery Time?',
        answer: 'We offer worldwide shipping with multiple options including express delivery (1-3 days), standard shipping (5-7 days), and economy shipping (10-15 days). We ship from our warehouses in India and Hong Kong for faster regional delivery.',
    },
    {
        question: 'Can you Source Obsolete or Hard-to-Find Components?',
        answer: 'Yes! We specialize in sourcing obsolete, end-of-life, and hard-to-find electronic components including integrated circuits, MOSFETs, IGBTs, and discrete semiconductor parts. Our global network ensures we locate rare parts.',
    },
    {
        question: 'Do you Provide Technical Datasheets?',
        answer: 'Absolutely. We provide complete technical documentation including datasheets, application notes, and compliance certificates for all semiconductor devices and electronic components. These can be downloaded directly or requested from our support team.',
    },
    {
        question: 'What Payment Methods do you accept?',
        answer: 'We accept various payment methods including bank transfers, credit/debit cards, PayPal, and letters of credit for large orders. For established customers, we also offer flexible payment terms.',
    },
    {
        question: 'What types of semiconductor devices do you distribute?',
        answer: 'We distribute power MOSFETs, NPN and PNP transistors, SiC MOSFETs, GaN semiconductor devices, IGBT modules, power rectifier modules, thyristor modules, silicon controlled rectifiers (SCR), triacs, microcontroller ICs, memory ICs, and wide bandgap semiconductors.',
    },
    {
        question: 'Which industries do you serve?',
        answer: 'We provide semiconductor components for automotive and EV applications, solar inverters, telecom equipment, consumer electronics, IoT devices, industrial automation, railways, medical devices, and lighting industries.',
    },
];

/**
 * FaqCard
 * Reusable card for a single FAQ item.
 */
export const FaqCard = ({ question, answer }: { question: string; answer: string }) => {
    return (
        <div className="flex flex-col items-start gap-4 p-8 bg-[#141414] border border-white/10 rounded-3xl shadow-xl w-[450px] flex-shrink-0 group hover:border-[#2DAA9E]/50 hover:shadow-[0_0_30px_rgba(45,170,158,0.15)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-white group-hover:text-[#2DAA9E] transition-colors">{question}</h3>
            <p className="text-base text-gray-400 leading-relaxed">{answer}</p>
        </div>
    );
};

/**
 * HorizontalScroller
 * Wraps children and creates a seamless horizontal looping animation.
 */
export const HorizontalScroller = ({ 
    children, 
    speed = '40s', 
    direction = 'left' 
}: { 
    children: React.ReactNode; 
    speed?: string; 
    direction?: 'left' | 'right'; 
}) => {
    const animationClass = direction === 'right' ? 'animate-scroll-horizontal-reverse' : 'animate-scroll-horizontal';

    const style = { '--scroll-duration': speed } as React.CSSProperties;

    return (
        <div className="w-full overflow-hidden group relative">
            {/* Fade masks for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling track */}
            <div className={`flex w-max ${animationClass} hover:[animation-play-state:paused]`} style={style}>
                <div className="flex items-stretch justify-center flex-shrink-0 gap-6 px-3">
                    {children}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-stretch justify-center flex-shrink-0 gap-6 px-3" aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function FAQ() {
    // Split FAQs into two rows for the double marquee effect
    const row1 = faqs.slice(0, 5);
    const row2 = faqs.slice(5, 10);

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden font-sans">
            {/* Background Ambient Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#2DAA9E]/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#E3D2C3]/5 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center gap-16">
                
                {/* Section Header */}
                <div className="flex flex-col items-center gap-6 text-center max-w-3xl px-4 mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2DAA9E]/10 border border-[#2DAA9E]/30 text-[#2DAA9E] text-sm font-semibold"
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span className="uppercase tracking-wider">FAQ</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DAA9E] to-emerald-400">Questions</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 font-medium"
                    >
                        Find answers to common questions about our electronic components, services, and the global ordering process.
                    </motion.p>
                </div>

                {/* Infinite Scrolling Rows */}
                <div className="flex flex-col gap-6 w-full">
                    {/* Top Row - Scrolls Left */}
                    <HorizontalScroller speed="45s" direction="left">
                        {row1.map((item, index) => (
                            <FaqCard key={index} question={item.question} answer={item.answer} />
                        ))}
                    </HorizontalScroller>

                    {/* Bottom Row - Scrolls Right */}
                    <HorizontalScroller speed="55s" direction="right">
                        {row2.map((item, index) => (
                            <FaqCard key={index} question={item.question} answer={item.answer} />
                        ))}
                    </HorizontalScroller>
                </div>
                
            </div>
        </section>
    );
}
