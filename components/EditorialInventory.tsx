'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EditorialInventory() {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden relative">
            <div className="container-fluid mx-auto max-w-7xl">
                
                {/* Editorial Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[#EAEAEA] pb-12">
                    <h2 className="font-display fluid-text-large tracking-tighter text-[#1A1A1A] max-w-3xl leading-none">
                        THE <span className="text-[#2DAA9E]">HARDWARE</span><br/>ARCHIVE
                    </h2>
                    <div className="max-w-xs">
                        <p className="font-mono text-xs text-gray-500 mb-4 leading-relaxed">
                            [01] EXPLORE OUR EXTENSIVE CATALOG OF ACTIVE AND PASSIVE COMPONENTS. SOURCED GLOBALLY, DELIVERED LOCALLY.
                        </p>
                        <Link href="/products" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-[#2DAA9E] transition-colors">
                            View Full Inventory <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Asymmetrical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-8">
                    
                    {/* Item 1: Large Feature */}
                    <div className="md:col-span-8 group">
                        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-[#F5F5F5] editorial-border">
                            <Image 
                                src="/images/macro_pcb.png" 
                                alt="Printed Circuit Board" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div className="mt-6 flex justify-between items-start">
                            <div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1A1A1A]">INTEGRATED CIRCUITS</h3>
                                <p className="font-mono text-xs text-gray-500 mt-2">MICROCONTROLLERS • MEMORY • LOGIC</p>
                            </div>
                            <span className="font-mono text-sm font-bold text-[#2DAA9E]">SKU: IC-8902</span>
                        </div>
                    </div>

                    {/* Item 2: Tall Sidebar */}
                    <div className="md:col-span-4 flex flex-col gap-8 md:gap-4 lg:gap-8">
                        <div className="group flex-grow">
                            <div className="relative h-full min-h-[40vh] w-full overflow-hidden bg-[#F5F5F5] editorial-border">
                                <Image 
                                    src="/images/macro_pins.png" 
                                    alt="Gold Processor Pins" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-6 flex flex-col gap-2">
                                <h3 className="font-display text-xl md:text-2xl font-bold text-[#1A1A1A]">CONNECTORS & HEADERS</h3>
                                <div className="flex justify-between items-center w-full border-t border-[#EAEAEA] pt-4 mt-2">
                                    <p className="font-mono text-xs text-gray-500">PRECISION GOLD-PLATED</p>
                                    <span className="font-mono text-xs font-bold text-[#1A1A1A]">STOCK: 45K</span>
                                </div>
                            </div>
                        </div>

                        {/* Text Block */}
                        <div className="bg-[#1A1A1A] p-8 text-white editorial-border">
                            <h4 className="font-display text-xl mb-4 text-[#E3D2C3]">GLOBAL REACH</h4>
                            <p className="font-mono text-xs text-gray-400 leading-relaxed mb-6">
                                WE SECURE HARD-TO-FIND AND OBSOLETE COMPONENTS THROUGH OUR VAST INTERNATIONAL NETWORK. NO EXCUSES, JUST DELIVERY.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-white hover:text-[#2DAA9E] transition-colors">
                                Source a Part <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
