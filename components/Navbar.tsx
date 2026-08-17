'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { PillNavigation, NavItem } from './ui/PillNavigation';
import { HamburgerMenu } from './ui/HamburgerMenu';

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Events', href: '/events' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll listener for collapsing navbar padding
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scroll when mobile menu is active
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu when pathname changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            {/* Main Floating Navigation Bar */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
                    isScrolled ? 'py-2.5 sm:py-3.5' : 'py-4 sm:py-6'
                }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between pointer-events-auto">
                        
                        {/* Brand Logo Capsule */}
                        <div className="flex-1 flex justify-start">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-2.5 sm:gap-3 bg-[#111111]/85 backdrop-blur-2xl border border-white/15 hover:border-[#FFB800]/50 px-3.5 sm:px-4 py-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group z-50"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Serente Electronics"
                                    width={36}
                                    height={36}
                                    className="h-6 sm:h-7 w-auto group-hover:scale-105 transition-transform"
                                    priority
                                />
                                <div className="flex flex-col">
                                    <span className="font-display font-black text-sm sm:text-base tracking-tight leading-none text-white">
                                        SERENTE
                                    </span>
                                    <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-[#FFB800] leading-none uppercase font-bold mt-0.5">
                                        Electronics
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Pill Navigation (Centered) */}
                        <div className="hidden lg:flex items-center justify-center">
                            <PillNavigation items={NAV_ITEMS} />
                        </div>

                        {/* Right Spacer for Desktop Balance */}
                        <div className="hidden lg:flex flex-1 justify-end" />

                        {/* Mobile Hamburger Menu Button */}
                        <div className="lg:hidden z-50">
                            <HamburgerMenu
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-3xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-6 sm:px-10 overflow-y-auto"
                    >
                        {/* Ambient Background Glows */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FFB800]/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-10 right-4 w-60 h-60 bg-[#FFB800]/5 rounded-full blur-[100px] pointer-events-none" />

                        {/* Navigation Links */}
                        <div className="relative z-10 flex flex-col gap-3 my-auto">
                            {NAV_ITEMS.map((item, index) => {
                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== '/' && pathname.startsWith(item.href));

                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{
                                            duration: 0.35,
                                            delay: index * 0.06,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`group flex items-center justify-between py-3.5 px-5 rounded-2xl border transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-[#181818] border-[#FFB800]/40 text-white'
                                                    : 'border-white/5 hover:bg-white/5 hover:border-white/10 text-gray-300'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`w-2 h-2 rounded-full ${
                                                    isActive
                                                        ? 'bg-[#FFB800] shadow-[0_0_8px_rgba(255,184,0,0.9)]'
                                                        : 'bg-white/20 group-hover:bg-[#FFB800]'
                                                } transition-colors`} />
                                                <span className="font-display font-bold text-2xl tracking-tight uppercase">
                                                    {item.label}
                                                </span>
                                            </div>

                                            <ArrowRight
                                                className={`w-5 h-5 transition-transform duration-300 ${
                                                    isActive
                                                        ? 'text-[#FFB800] translate-x-0'
                                                        : 'text-gray-500 group-hover:text-white group-hover:translate-x-1'
                                                }`}
                                            />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Bottom Info & Quick Contacts */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.35 }}
                            className="relative z-10 pt-6 border-t border-white/10 flex flex-col gap-4 mt-6"
                        >
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 rounded-xl bg-[#FFB800] text-[#1A1A1A] font-display font-extrabold uppercase text-center tracking-wider text-sm shadow-[0_4px_20px_rgba(255,184,0,0.3)] active:scale-[0.98] transition-transform"
                            >
                                Request a Quote
                            </Link>

                            <div className="grid grid-cols-2 gap-3 text-xs text-gray-400 font-mono">
                                <a
                                    href="tel:+918088131316"
                                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    <Phone className="w-3.5 h-3.5 text-[#FFB800]" />
                                    <span>+91 80881 31316</span>
                                </a>
                                <a
                                    href="mailto:hello@serenteelectronics.com"
                                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors truncate"
                                >
                                    <Mail className="w-3.5 h-3.5 text-[#FFB800]" />
                                    <span className="truncate">Email Sales</span>
                                </a>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono pt-2">
                                <span className="inline-flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFB800]" />
                                    ISO 9001:2015 Certified
                                </span>
                                <span>Bangalore, India</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
