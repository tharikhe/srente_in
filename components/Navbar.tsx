'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'HOME' },
        { href: '/services', label: 'SERVICES' },
        { href: '/blog', label: 'BLOG' },
        { href: '/events', label: 'EVENTS' },
        { href: '/about', label: 'ABOUT US' },
        { href: '/contact', label: 'CONTACT US' },
    ];

    return (
        <header className={`w-full fixed top-0 z-[100] transition-all duration-500 bg-transparent ${isScrolled ? 'backdrop-blur-md' : ''}`}>

            {/* Main Header Container */}
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between py-4">
                    
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 z-50 group flex-shrink-0"
                    >
                        <Image
                            src="/logo.png"
                            alt="Serente"
                            width={48}
                            height={48}
                            className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
                        />
                        <div className="flex flex-col">
                            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter leading-none transition-colors duration-500 text-white">
                                SERENTE
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-[#FFFF00] leading-none mt-1 uppercase font-bold">
                                Electronics
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="relative group py-2"
                                >
                                    <span className={`font-display text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${isActive ? 'text-[#FFFF00]' : 'text-white group-hover:text-[#FFFF00]'}`}>
                                        {link.label}
                                    </span>
                                    {/* Active Indicator underneath like Kaynes */}
                                    <span className={`absolute bottom-0 left-0 h-[2px] bg-[#FFFF00] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="flex items-center z-50">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-sm transition-all duration-500 text-white border border-white/20 hover:bg-white/10"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl"
                    >
                        <nav className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-display font-bold text-lg text-[#1A1A1A] hover:text-[#FFFF00] transition-colors py-4 border-b border-gray-100 uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
