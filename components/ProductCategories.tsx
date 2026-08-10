'use client';

import { motion } from 'framer-motion';
import { Shield, Package, Wrench, CircuitBoard, Cable, MonitorSmartphone } from 'lucide-react';

const categories = [
    {
        icon: CircuitBoard,
        title: 'Integrated Circuits',
        items: ['Microcontrollers (MCU)', 'FPGA & SoC', 'Voltage Regulators', 'Op-Amps & Comparators'],
    },
    {
        icon: Shield,
        title: 'Power Semiconductors',
        items: ['MOSFETs & IGBTs', 'Schottky & Zener Diodes', 'Rectifier Bridges', 'Power Modules'],
    },
    {
        icon: Package,
        title: 'Passive Components',
        items: ['MLCC & Electrolytic Caps', 'Precision Resistors', 'Power Inductors', 'Crystal Oscillators'],
    },
    {
        icon: Cable,
        title: 'Interconnects',
        items: ['Board-to-Board Connectors', 'Wire Harness Assemblies', 'FPC / FFC Cables', 'Terminal Blocks'],
    },
    {
        icon: MonitorSmartphone,
        title: 'Displays & Sensors',
        items: ['LCD & OLED Modules', 'Touch Panels', 'Temperature Sensors', 'Current Sensors'],
    },
    {
        icon: Wrench,
        title: 'Electromechanical',
        items: ['Relays & Contactors', 'Fans & Heat Sinks', 'Switches & Encoders', 'Fuses & Circuit Breakers'],
    },
];

export default function ProductCategories() {
    return (
        <section className="py-24 md:py-36 bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-[#FFFF00] text-xs font-mono font-bold uppercase tracking-wider">
                        <span>Component Portfolio</span>
                    </div>
                    <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight uppercase leading-none">
                        What We <span className="text-[#FFFF00] drop-shadow-[0_0_8px_rgba(255,255,0,0.4)]">Source</span>
                    </h2>
                    <p className="font-mono text-gray-500 text-sm md:text-base leading-relaxed">
                        Spanning every major semiconductor category. From common passives to rare obsolete ICs — our global network delivers.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FFFF00] hover:shadow-[0_8px_40px_rgba(255,255,0,0.12)] transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-gray-100 border-l-[40px] border-l-transparent group-hover:border-t-[#FFFF00]/20 transition-colors duration-500" />
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#FFFF00] mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                                <cat.icon className="w-7 h-7" strokeWidth={1.8} />
                            </div>

                            {/* Title */}
                            <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-5 uppercase tracking-wider group-hover:text-[#1A1A1A]">
                                {cat.title}
                            </h3>

                            {/* Items List */}
                            <ul className="space-y-2.5 border-t border-gray-100 pt-5">
                                {cat.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-center gap-2.5 text-sm font-mono text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFFF00] shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
