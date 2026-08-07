'use client';

import { Phone, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <img src="/whatsapp-logo.png" alt="WhatsApp" className={className} />
);

export default function FloatingMenu() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        {
            icon: Phone,
            label: 'Call Us',
            href: 'tel:+918088131316',
            hoverColor: 'group-hover:text-[#E3D2C3]', // Brand Gold
            bgHover: 'hover:bg-[#1A1A1A]',
        },
        {
            icon: Mail,
            label: 'Email Us',
            href: 'mailto:hello@serenteelectronics.com',
            hoverColor: 'group-hover:text-[#2DAA9E]', // Brand Teal
            bgHover: 'hover:bg-[#1A1A1A]',
        },
        {
            icon: WhatsAppIcon,
            label: 'WhatsApp',
            href: 'https://wa.me/918088131316',
            hoverColor: '', 
            bgHover: 'hover:bg-[#1A1A1A]',
            isImage: true
        },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="fixed right-5 bottom-24 z-50 flex flex-col gap-4 items-center"
        >
            {/* Main Interaction Pill */}
            <div className="flex flex-col gap-2 p-2 bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50 dark:border-white/10">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-400 ${item.bgHover} group`}
                        title={item.label}
                    >
                        {item.isImage ? (
                            <item.icon className="w-5 h-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400" />
                        ) : (
                            <item.icon className={`w-5 h-5 text-gray-600 dark:text-gray-400 ${item.hoverColor} group-hover:scale-110 transition-all duration-400`} />
                        )}

                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 bg-[#1A1A1A] text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap shadow-lg border border-white/10">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-16 h-16 bg-white/70 dark:bg-black/40 hover:bg-[#2DAA9E] backdrop-blur-xl border border-white/50 dark:border-white/10 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-400 group"
                        title="Back to Top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
