'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    Briefcase,
    Zap,
    Code,
    Settings,
    Factory,
    TrendingDown,
    Truck,
    Eye,
    Calendar,
    RefreshCw,
    Shield
} from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    whileInView: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const services = [
    {
        title: "Design For Manufacturing",
        icon: Briefcase,
        description: "We deliver product not just paper proposal. Our team knows how to fill the gaps between design/prototype and manufacturable product. Whether it's a consumer who needs an exceptional user experience where product performance makes the difference or diagnostics labs where precision and accuracy make difference in results - We can meet all different design demands and requirements making sure design and development is easy to manufacture and cost effective for today's market."
    },
    {
        title: "Engineering Services",
        icon: Settings,
        description: "All our design activities have an objective of simplifying manufacturing activities, minimizing the diversity of components, and standardizing the handling and assembly operations. During our design, we pay special attention to Critical Components Planning, Manufacturing Frequency Estimates and Tooling or other one-time activities that require special attention to quality and detail."
    },
    {
        title: "Electronics Design Services",
        icon: Cpu,
        description: "Our electrical and electronics services include both ANALOG and designs: Power Management, Real-Time Embedded Systems Design, FPGA/ASIC Systems, RF & RFID circuitry, Data Acquisition Systems, RTOS-Based Programmable Logic etc. Some of the digital platforms we have worked with run on ARM7, ARM9, Leon3, PowerPC, Micro Blaze processors and microprocessors."
    },
    {
        title: "Software Design Services",
        icon: Code,
        description: "Whether it is embedded software design, FPGAs designs, desktop GUIs running on top of operating system, web applications, or app designs, we have dealt with it all. Some of many technologies we have worked with: .NET Compact framework, Win CE, Java Swing Framework, JPA2 Mapper for Embedded Database, D2XX Communication Drivers etc."
    }
];

const operations = [
    {
        title: "OEM Services",
        icon: Factory,
        description: "Quality Manufacturing Processes (QMP) is in our DNA. Whether it's evaluating a vendor or processing incoming materials or assembling a device, we strictly follow Quality Manufacturing processes and standards. Continuous correcting and preventive actions (CAPA) are core in our process assuring long-lasting quality in every OEM product we manufacture, test, verify and distribute through our OEM partners."
    },
    {
        title: "360° Integrated Production",
        icon: Zap,
        description: "SERENTE ELECTRONICS PVT LTD offers complete end-to-end equipment manufacturing services, allowing our customers to gain the benefit of supply chain consolidation, manufacturing efficiency and lower costs. We are constantly integrating innovative technologies and processes with forward-thinking ideas cultivated in our labs and in collaboration with outside partners."
    },
    {
        title: "Optimize Your Product Cost",
        icon: TrendingDown,
        description: "Once mass manufacturing is set in motion, we move on to optimizing costs through Material and Resource Planning Optimization. With 10 years of experience, we have partnered with the biggest component suppliers to create cost-effective component purchase processes, meeting the strictest quality demands needed for product manufacturing."
    },
    {
        title: "Improve Your Supply Chain Cost",
        icon: Truck,
        description: "With our integrated fulfilment across a network of industries, suppliers and distribution partners, you get improved visibility with minimized overhead, and a more stable, balanced supply chain, responsive to fluctuating market demands. We have distribution and service tie-up centers located across India, Asia, USA, UK, Europe and South America to help you deliver your product and service with quality, time, and cost-savings in mind."
    },
    {
        title: "Vendor Transparency",
        icon: Eye,
        description: "We transparently share any logistics, quality certificates from our vendors. Leverage on this knowledge to optimize your supply chain for quality."
    },
    {
        title: "Integrated Planning",
        icon: Calendar,
        description: "When you partner with SERENTE ELECTRONICS PVT LTD, you will become a seamless and integrated part of our own SAP-based processes. Plan, schedule and monitor manufacturing resources to ensuring timely delivery of your products."
    },
    {
        title: "Lifecycle Management",
        icon: RefreshCw,
        description: "It does not end with the product being out of our door and we know that. Whether it is repair, spare parts or refurbishing, we are ready and equipped to support you every step of your way."
    },
    {
        title: "IP Protection",
        icon: Shield,
        description: "We Built This Company To Be Your OEM Partner. Having a long history with our own and our partner's IP we know the value and importance of securing sensitive data. Along those lines we pro-actively establish, monitor and enforce security protocols to limit access to sensitive content."
    }
];

export default function ServicesClient() {
    return (
        <div className="min-h-screen bg-[#EAEAEA] pt-24 pb-16">
            
            {/* Cinematic Hero */}
            <section className="bg-[#1A1A1A] text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/macro_pins.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-tight">
                            End-to-End <br/><span className="text-[#FFFF00]">Capabilities</span>
                        </h1>
                        <p className="font-mono text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl border-l-4 border-[#FFFF00] pl-6">
                            From concept to mass production, we deliver manufacturable products, not just paper proposals. Experience true 360° integrated manufacturing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1A1A1A] mb-4 uppercase tracking-wider">
                            Our <span className="text-[#FFFF00]">Services</span>
                        </h2>
                        <div className="w-24 h-2 bg-[#FFFF00]"></div>
                    </motion.div>

                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                    >
                        {services.map((service, idx) => (
                            <motion.div 
                                key={idx}
                                variants={fadeInUp}
                                className="group bg-gray-50 p-8 md:p-10 hover:bg-[#1A1A1A] transition-colors duration-500 border border-gray-100 shadow-sm hover:shadow-xl"
                            >
                                <div className="mb-6 inline-flex p-4 rounded-full bg-[#EAEAEA] group-hover:bg-[#FFFF00]/20 text-[#1A1A1A] group-hover:text-[#FFFF00] transition-colors duration-500">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-white mb-4 transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="font-mono text-sm md:text-base text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Operations Section */}
            <section className="py-20 md:py-32 bg-[#1A1A1A] text-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
                            Our <span className="text-[#E3D2C3]">Operations</span>
                        </h2>
                        <div className="w-24 h-2 bg-[#E3D2C3]"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                        {operations.map((op, idx) => (
                            <motion.div 
                                key={idx}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="relative pl-12 md:pl-16 border-l-2 border-gray-800 hover:border-[#E3D2C3] transition-colors duration-500 group"
                            >
                                <div className="absolute left-[-21px] top-0 p-2 bg-[#1A1A1A] border-2 border-gray-800 group-hover:border-[#E3D2C3] rounded-full text-gray-500 group-hover:text-[#E3D2C3] transition-colors duration-500">
                                    <op.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4 tracking-wide group-hover:text-[#E3D2C3] transition-colors duration-500">
                                    {op.title}
                                </h3>
                                <p className="font-mono text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                                    {op.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#E3D2C3]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-[#1A1A1A] mb-8 uppercase tracking-wide">
                        Ready to Optimize Your Manufacturing?
                    </h2>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] text-white px-10 py-5 font-display font-bold uppercase tracking-widest transition-all duration-300 text-lg shadow-2xl">
                        Partner With Us <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
