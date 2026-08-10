'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <img src="/whatsapp-logo.png" alt="WhatsApp" className={className} />
);

export default function FloatingMenu() {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="fixed right-6 bottom-6 z-50 flex items-center justify-center"
        >
            <a
                href="https://wa.me/918088131316"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center transition-all duration-300 shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:scale-110 group"
                title="Chat on WhatsApp"
            >
                <WhatsAppIcon className="w-7 h-7 text-white" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 bg-[#1A1A1A] text-white font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap shadow-xl border border-white/10 font-bold">
                    Chat on WhatsApp
                </span>
            </a>
        </motion.div>
    );
}
