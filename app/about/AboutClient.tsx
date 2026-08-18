'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Cpu,
    Package,
    Share2,
    Wrench,
    Monitor,
    Zap,
    Cog,
    Globe,
    Clock,
    ShieldCheck,
    Truck,
    Sparkles,
    Check,
    Building2,
    Factory,
    Award
} from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.08
        }
    }
};

const coreCapabilities = [
    { title: "Electronics Manufacturing Services (EMS)", icon: Factory, description: "End-to-end manufacturing solutions for low-, medium-, and high-volume production." },
    { title: "PCB Assembly (SMT & Through-Hole)", icon: Cpu, description: "Advanced SMT & Through-Hole assembly with stringent quality controls." },
    { title: "Box Build & System Integration", icon: Package, description: "Complete electromechanical box build and full system integration services." },
    { title: "Electronic Component Distribution", icon: Share2, description: "Global supply network for high-reliability electronic components." },
    { title: "Product Engineering & Design Support", icon: Wrench, description: "Design support, value engineering, and component selection expertise." },
    { title: "LCD, TFT & HMI Display Solutions", icon: Monitor, description: "Custom display solutions and HMI integrations for industrial applications." },
    { title: "Connector & Cable Assembly Solutions", icon: Zap, description: "Custom wiring harnesses and high-durability connector assemblies." },
    { title: "Custom Electromechanical Solutions", icon: Cog, description: "Tailored mechanical and electronic integration solutions for OEMs." },
    { title: "Global Strategic Sourcing", icon: Globe, description: "Strategic sourcing network partnering with qualified component manufacturers." },
    { title: "Component Lifecycle Management", icon: Clock, description: "Obsolescence tracking, alternate sourcing, and lifecycle sustainability." },
    { title: "Functional Testing & Quality Assurance", icon: ShieldCheck, description: "Globally recognized quality systems and rigorous functional testing." },
    { title: "Supply Chain & Logistics Management", icon: Truck, description: "Agile supply chain management ensuring shorter lead times and fast response." },
];

const whySerentePoints = [
    "Complete EMS partner from concept to production",
    "Global network of qualified manufacturing partners",
    "Strong technical engineering and sourcing expertise",
    "High-quality, cost-effective manufacturing solutions",
    "Long-term product lifecycle and obsolescence management",
    "Flexible production for prototype to mass manufacturing",
    "Customer-centric approach with fast engineering response",
    "Commitment to quality, innovation, and continuous improvement"
];

export default function AboutClient() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-b border-gray-100 dark:border-gray-800">
                <div className="absolute inset-0 bg-[#FFB800]/5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 text-xs md:text-sm font-semibold tracking-wider uppercase">
                            <Sparkles className="w-4 h-4" /> Electronics Manufacturing Services & Component Solutions
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] dark:text-white tracking-tight leading-tight">
                            About <span className="text-[#FFB800]">Serente Electronics</span> Pvt. Ltd.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
                            A technology-driven Electronics Manufacturing Services (EMS) and global electronic component solutions company, committed to delivering end-to-end manufacturing, engineering, and supply chain solutions to OEMs across diverse industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Photo Banner */}
            <section className="relative">
                <div className="container mx-auto px-4 mt-6 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                    >
                        <div className="relative h-64 sm:h-80 md:h-[420px]">
                            <Image
                                src="/about-team.jpg"
                                alt="Serente Electronics Team — Design, Manufacture, Deliver"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Gradient overlay at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFB800] text-white text-xs font-bold rounded-full shadow-lg">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        Our Team
                                    </span>
                                    <span className="text-white/90 text-sm sm:text-base font-semibold">
                                        Design · Manufacture · Deliver
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Detailed Company Overview Section */}
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <motion.div variants={fadeInUp} className="text-center space-y-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                Delivering End-to-End <span className="text-[#FFB800]">Manufacturing & Sourcing Excellence</span>
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFB800] to-brand-gold rounded-full mx-auto" />
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                variants={fadeInUp}
                                className="bg-gray-50 dark:bg-gray-800/60 p-8 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800]">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Global Sourcing & Comprehensive Support</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    With a strong global sourcing network and strategic partnerships with leading component manufacturers, Serente provides comprehensive support from product concept, component engineering, sourcing, PCB assembly, box-build integration, testing, and final product delivery. Our expertise enables customers to accelerate product development while optimizing cost, quality, and supply chain reliability.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="bg-gray-50 dark:bg-gray-800/60 p-8 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">High-Reliability Specialization</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We specialize in high-reliability electronic products for Industrial Automation, Medical Electronics, Automotive, Railway, Energy, EV Infrastructure, Consumer Electronics, IoT, Telecommunications, and Smart Devices. Our engineering team works closely with customers to provide design support, component selection, lifecycle management, value engineering, and alternate sourcing solutions that ensure long-term product sustainability.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={fadeInUp}
                            className="relative rounded-3xl overflow-hidden shadow-xl"
                        >
                            <div className="relative h-72 sm:h-80 md:h-96">
                                <Image
                                    src="/about-factory.jpg"
                                    alt="Serente Electronics PCB Assembly and Manufacturing Facility"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Quality Systems & Advanced Production</h3>
                                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base max-w-2xl">
                                        Our manufacturing ecosystem is backed by globally recognized quality systems, advanced production capabilities, and stringent quality assurance processes. Serente delivers consistent quality, shorter lead times, and dependable manufacturing services.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/30">
                                            <ShieldCheck className="w-3 h-3" /> ISO 9001:2015
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F39800]/20 text-[#F39800] border border-[#F39800]/30">
                                            <Factory className="w-3 h-3" /> SMT & Through-Hole
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#448ACA]/20 text-[#448ACA] border border-[#448ACA]/30">
                                            <Cpu className="w-3 h-3" /> PCB Assembly
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* State-of-the-art Facilities Gallery */}
            <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs font-semibold tracking-wider uppercase">
                            <Zap className="w-3.5 h-3.5" /> Our Facilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">State-of-the-Art <span className="text-blue-600">Infrastructure</span></h2>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                            Equipped with world-class cleanrooms, advanced robotic assembly lines, and rigorous quality inspection labs to ensure uncompromised precision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100"
                        >
                            <Image
                                src="/about-cleanroom.png"
                                alt="High-tech PCB manufacturing cleanroom"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                    <Factory className="w-4 h-4 text-[#FFB800]" /> Precision Assembly
                                </h4>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    Automated pick-and-place cleanroom environments.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100"
                        >
                            <Image
                                src="/about-testing.jpg"
                                alt="PCB Assembly Line Workers"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-[#F39800]" /> 100% Validation
                                </h4>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    Rigorous functional testing at every stage.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100"
                        >
                            <Image
                                src="/about-inspection.png"
                                alt="Quality Assurance and Inspection Lab"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                    <Monitor className="w-4 h-4 text-[#448ACA]" /> Quality Labs
                                </h4>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    Advanced microscopic inspection & QA.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Core Capabilities */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/40 border-y border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 text-xs font-semibold tracking-wider uppercase">
                            What We Offer
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Core Capabilities</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                            Comprehensive EMS, engineering, display, and supply chain solutions tailored for modern OEMs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {coreCapabilities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -4 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all flex flex-col justify-between group"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#FFB800]/10 dark:bg-[#FFB800]/20 rounded-xl flex items-center justify-center text-[#FFB800] group-hover:bg-[#FFB800] group-hover:text-white transition-colors duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#FFB800] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Serente? */}
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-xs font-semibold tracking-wider uppercase">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Why Serente?</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                            Strategic advantages that empower our global OEM partners.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {whySerentePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-sm hover:border-[#FFB800]/40 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#FFB800]/10 text-[#FFB800] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-5 h-5 stroke-[3]" />
                                </div>
                                <p className="text-gray-800 dark:text-gray-200 font-semibold text-base md:text-lg leading-snug">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Statement Highlight Banner */}
            <section className="py-16 bg-gradient-to-br from-[#FFB800]/10 via-white to-brand-gold/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-y border-gray-200/60 dark:border-gray-700">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="w-14 h-14 mx-auto bg-[#FFB800] text-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-lg">
                            <Award className="w-8 h-8" />
                        </div>
                        <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed italic">
                            &ldquo;At Serente Electronics Pvt. Ltd., we strive to be more than a manufacturing partner—we aim to become a trusted technology and supply chain partner, enabling customers worldwide to transform innovative ideas into reliable, high-quality electronic products.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </section>


        </div>
    );
}
