'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Globe, Award, Zap, Users, ShieldCheck, ArrowRight, LayoutGrid, Cog } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 p-12 opacity-30">
                        <div className="w-64 h-64 border-2 border-brand-gold rounded-full blur-3xl"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-12 opacity-30">
                        <div className="w-64 h-64 border-2 border-brand-teal rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="relative container mx-auto px-4 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-sm font-medium tracking-wide">
                            ESTABLISHED 2023
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                            Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Innovation</span><br />
                            Connecting the World
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Your trusted global partner for electronic component distribution, bridging the gap between cutting-edge manufacturing and reliable supply chains.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative -mt-20 z-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8"
                >
                    {[
                        { label: 'Global Customers', value: '500+', icon: Globe },
                        { label: 'Components Shipped', value: '1M+', icon: Zap },
                        { label: 'Manufacturers', value: '50+', icon: LayoutGrid },
                        { label: 'Quality Guarantee', value: '100%', icon: ShieldCheck },
                    ].map((stat, index) => (
                        <div key={index} className="text-center space-y-2 p-4 group hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-2xl transition-colors">
                            <div className="w-12 h-12 mx-auto bg-brand-teal/10 dark:bg-brand-teal/20 rounded-full flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Bridging the Gap in <span className="text-brand-teal">Global Electronics</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-teal to-brand-gold rounded-full"></div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                            <p>
                                Serente Electronics HK Ltd is a premier Hong Kong-based distributor established in 2023. We specialize in the global supply of electronic components, catering to OEM and ODM projects with precision and speed.
                            </p>
                            <p>
                                With active operations in markets ranging from India to key international regions, we don't just supply parts; we provide comprehensive supply chain solutions. Our expertise extends to reverse engineering, legacy system support, and customized sourcing, making us the partner of choice for manufacturers seeking reliability in a volatile market.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4">
                            <Button className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-6 rounded-xl text-lg group">
                                Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-teal rounded-3xl rotate-3 opacity-10"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 aspect-[4/3] group">
                            <Image
                                src="/products-img/about-us1.webp"
                                alt="Serente Global Hub"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-lg">Global Distribution Hub</p>
                                    <p className="text-sm text-white/80">Hong Kong</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Driven by Purpose</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Our roadmap for the future is built on a foundation of excellence and global accessibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target className="w-32 h-32 text-brand-teal" />
                            </div>
                            <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                To deliver reliable, innovative, and cost-effective electronic components to OEM and ODM customers worldwide. we focus on pin-to-pin replacements and project-based support to ensure your production lines never stop.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Globe className="w-32 h-32 text-brand-gold" />
                            </div>
                            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-6">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                To dominate the APAC and European markets within the next five years. We are expanding our footprint to India, China, Japan, Germany, and beyond, becoming the go-to partner for global electronics manufacturing.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="space-y-4"
                            >
                                <div className="h-64 relative rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/products-img/about-us2.webp" alt="Quality Control" fill className="object-cover" />
                                </div>
                                <div className="h-48 relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 flex items-center justify-center p-6 text-center">
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-2">100% Genuine</h4>
                                        <p className="text-gray-400 text-sm">Valid Manufacturer Warranties</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="space-y-4 pt-12"
                            >
                                <div className="h-48 relative rounded-2xl overflow-hidden shadow-lg bg-brand-teal flex items-center justify-center p-6 text-center">
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-2">Fast Logistics</h4>
                                        <p className="text-teal-100 text-sm">Global Shipping Network</p>
                                    </div>
                                </div>
                                <div className="h-64 relative rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/products-img/aboutus-3.webp" alt="Warehouse" fill className="object-cover" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                The Serente Difference
                            </h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400">
                                Why leading manufacturers trust us with their supply chain.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Pin-to-Pin Compatibility",
                                    desc: "Drop-in replacements for major brands without redesigning your PCB.",
                                    icon: Cog
                                },
                                {
                                    title: "Reverse Engineering",
                                    desc: "Expert technical team capable of finding alternatives for obsolete parts.",
                                    icon: Zap
                                },
                                {
                                    title: "Legacy System Support",
                                    desc: "We ensure longevity for your established product lines.",
                                    icon: Award
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-white dark:bg-gray-800 shadow-md rounded-xl flex items-center justify-center text-brand-gold flex-shrink-0">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-teal-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/30 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Secure Your Supply Chain?</h2>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        Partner with Serente Electronics today and experience the difference of a truly global distributor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-brand-gold hover:bg-brand-gold-dark text-white text-lg px-8 py-6 rounded-xl">
                            Request a Quote
                        </Button>
                        <Button className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
                            View Line Card
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
