'use client';

import Link from 'next/link';
import { ChevronRight, Cpu, Zap, Radio, Server, Grid, Battery, Disc, CircuitBoard, Gauge } from 'lucide-react';

const CATEGORIES = [
    { name: 'Integrated Circuits (ICs)', icon: Cpu },
    { name: 'Discrete Semiconductors', icon: Zap },
    { name: 'Capacitors', icon: Battery },
    { name: 'Resistors', icon: Grid },
    { name: 'Connectors', icon: Server },
    { name: 'Sensors, Transducers', icon: Radio },
    { name: 'Crystals, Oscillators', icon: Disc },
    { name: 'Inductors', icon: CircuitBoard },
    { name: 'Diodes', icon: Gauge },
];

export default function Sidebar() {
    return (
        <div className="w-64 flex-shrink-0 bg-white rounded-xl shadow-soft overflow-hidden self-start border border-brand-border">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-teal to-brand-teal-light px-4 py-3">
                <h3 className="text-white font-bold text-sm tracking-wide">BROWSE CATEGORIES</h3>
            </div>

            {/* Categories */}
            <div className="py-1">
                {CATEGORIES.map((cat, index) => (
                    <Link
                        key={index}
                        href="/products"
                        className="flex items-center justify-between px-4 py-3 group transition-all duration-200 border-l-4 border-transparent hover:border-brand-gold hover:bg-brand-surface"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-surface flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-200">
                                <cat.icon className="w-4 h-4 text-brand-teal group-hover:text-brand-gold transition-colors duration-200" />
                            </div>
                            <span className="text-sm font-medium text-brand-text group-hover:text-brand-teal transition-colors duration-200">
                                {cat.name}
                            </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                ))}
            </div>

            {/* View All Link */}
            <div className="border-t border-brand-border">
                <Link
                    href="/products"
                    className="flex items-center justify-center gap-2 px-4 py-4 text-sm font-bold text-brand-gold hover:text-brand-gold-dark hover:bg-brand-gold/5 transition-all duration-200 group"
                >
                    <span>View All Categories</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>
        </div>
    );
}
