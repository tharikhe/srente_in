'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Cpu, Clock, Award } from 'lucide-react';

const stats = [
    {
        icon: Cpu,
        value: '10M+',
        label: 'Components Distributed',
        description: 'Active, passive & electromechanical parts delivered worldwide.'
    },
    {
        icon: ShieldCheck,
        value: '99.85%',
        label: 'Quality & CoC Rate',
        description: 'ISO 9001:2015 certified inspection & full batch traceability.'
    },
    {
        icon: Truck,
        value: '500+',
        label: 'Global OEM Clients',
        description: 'Trusted by tier-1 automotive, industrial & medical manufacturers.'
    },
    {
        icon: Clock,
        value: '< 24h',
        label: 'BOM Quote Turnaround',
        description: 'Automated part cross-referencing and instant global pricing.'
    }
];

export default function HomeStats() {
    return (
        <section className="py-20 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden text-white">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 0, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 0, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header Badge */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-14">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#FFFF00] animate-pulse"></span>
                            <span>Proven Performance Track Record</span>
                        </div>
                        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight uppercase">
                            Global Scale. <span className="text-[#FFFF00]">Uncompromising Quality.</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md">
                        <Award className="w-6 h-6 text-[#FFFF00] shrink-0" />
                        <div>
                            <p className="font-display font-bold text-xs text-white uppercase tracking-wider">ISO 9001:2015 Certified</p>
                            <p className="font-mono text-[11px] text-gray-400">Quality Management System</p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-[#141414] border border-white/10 hover:border-[#FFFF00]/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#FFFF00]/10 border border-[#FFFF00]/30 flex items-center justify-center text-[#FFFF00] mb-6 group-hover:scale-110 group-hover:bg-[#FFFF00] group-hover:text-[#1A1A1A] transition-all duration-300">
                                <stat.icon className="w-6 h-6" strokeWidth={1.8} />
                            </div>

                            <p className="font-display font-black text-4xl lg:text-5xl text-[#FFFF00] mb-2 tracking-tight">
                                {stat.value}
                            </p>

                            <h3 className="font-display font-bold text-sm md:text-base text-white uppercase tracking-wider mb-2">
                                {stat.label}
                            </h3>

                            <p className="font-mono text-xs text-gray-400 leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
