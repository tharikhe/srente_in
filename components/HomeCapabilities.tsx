'use client';

import { motion } from 'framer-motion';
import { Briefcase, Zap, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
    {
        title: "Design For Manufacturing",
        icon: Briefcase,
        description: "We bridge the gap between design and manufacturable product, ensuring cost-effectiveness and exceptional performance for today's market.",
        color: "text-[#2DAA9E]",
        bg: "bg-[#2DAA9E]/10"
    },
    {
        title: "Integrated Production",
        icon: Zap,
        description: "End-to-end EMS solutions allowing supply chain consolidation, maximizing manufacturing efficiency, and lowering overall overhead costs.",
        color: "text-[#E3D2C3]",
        bg: "bg-[#E3D2C3]/10"
    },
    {
        title: "Engineering Services",
        icon: Settings,
        description: "Standardizing operations and handling through Critical Components Planning, Manufacturing Frequency Estimates, and detailed tooling.",
        color: "text-[#2DAA9E]",
        bg: "bg-[#2DAA9E]/10"
    }
];

const staggerContainer = {
    whileInView: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
};

export default function HomeCapabilities() {
    return (
        <section className="py-20 md:py-32 bg-[#1A1A1A] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-2xl"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">
                            Core <span className="text-[#2DAA9E]">Capabilities</span>
                        </h2>
                        <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed">
                            From concept to mass production, we deliver manufacturable products, not just paper proposals. Experience true 360° integrated manufacturing.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-8 md:mt-0"
                    >
                        <Link href="/services" className="group inline-flex items-center gap-3 text-white border-b-2 border-white/20 pb-2 hover:border-[#2DAA9E] transition-colors duration-300 font-display font-bold uppercase tracking-widest text-sm">
                            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#2DAA9E]" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div 
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {capabilities.map((cap, idx) => (
                        <motion.div 
                            key={idx}
                            variants={fadeInUp}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className={`mb-8 inline-flex p-4 rounded-lg ${cap.bg} ${cap.color}`}>
                                <cap.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4 tracking-wide group-hover:text-[#2DAA9E] transition-colors duration-300">
                                {cap.title}
                            </h3>
                            <p className="font-mono text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {cap.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2DAA9E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E3D2C3]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        </section>
    );
}
