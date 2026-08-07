'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCatalogMenu from '@/components/ProductCatalogMenu';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'HOME' },
        { href: '/products', label: 'PRODUCTS' },
        { href: '/services', label: 'SERVICES' },
        { href: '/blog', label: 'BLOG' },
        { href: '/events', label: 'EVENTS' },
        { href: '/about', label: 'ABOUT US' },
        { href: '/contact', label: 'CONTACT US' },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className={`w-full fixed top-0 z-[100] bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-none'}`}>
            
            {/* Top Utility Bar */}
            <div className="bg-[#1A1A1A] text-[#EAEAEA] py-2 hidden lg:block border-b border-white/10">
                <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center text-xs font-mono font-medium tracking-wide">
                    <div className="flex gap-6">
                        <a href="mailto:hello@serenteelectronics.com" className="flex items-center gap-2 hover:text-[#2DAA9E] transition-colors">
                            <Mail className="w-3.5 h-3.5 text-[#2DAA9E]" /> hello@serenteelectronics.com
                        </a>
                        <a href="tel:+918088131316" className="flex items-center gap-2 hover:text-[#2DAA9E] transition-colors">
                            <Phone className="w-3.5 h-3.5 text-[#2DAA9E]" /> +91 80881 31316
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/bom" className="hover:text-[#2DAA9E] transition-colors">BOM UPLOAD</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/contact" className="hover:text-[#2DAA9E] transition-colors">HELP CENTER</Link>
                    </div>
                </div>
            </div>

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
                            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-[#1A1A1A] leading-none">
                                SERENTE
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-[#2DAA9E] leading-none mt-1 uppercase font-bold">
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
                                    <span className={`font-display text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-[#2DAA9E]' : 'text-[#1A1A1A] group-hover:text-[#2DAA9E]'}`}>
                                        {link.label}
                                    </span>
                                    {/* Active Indicator underneath like Kaynes */}
                                    <span className={`absolute bottom-0 left-0 h-[2px] bg-[#2DAA9E] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions (Search, Cart, Menu Toggle) */}
                    <div className="flex items-center gap-4 z-50">
                        {/* Search Bar (Desktop) */}
                        <form onSubmit={handleSearch} className="hidden lg:flex relative">
                            <input 
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-4 pr-10 py-1.5 border border-gray-200 rounded-sm font-mono text-xs focus:outline-none focus:border-[#2DAA9E] w-48 transition-all"
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2DAA9E]">
                                <Search className="w-4 h-4" />
                            </button>
                        </form>

                        <Link href="/cart" className="relative p-2 group bg-gray-50 hover:bg-gray-100 rounded-sm transition-colors border border-gray-200">
                            <ShoppingCart className="w-5 h-5 text-[#1A1A1A] group-hover:text-[#2DAA9E] transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2DAA9E] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        
                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-[#1A1A1A] border border-gray-200 rounded-sm hover:bg-gray-50"
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
                            {/* Mobile Search */}
                            <form onSubmit={handleSearch} className="relative mb-6">
                                <input 
                                    type="text"
                                    placeholder="Search parts..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-sm font-mono text-sm focus:outline-none focus:border-[#2DAA9E]"
                                />
                                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Search className="w-5 h-5" />
                                </button>
                            </form>

                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-display font-bold text-lg text-[#1A1A1A] hover:text-[#2DAA9E] transition-colors py-4 border-b border-gray-100 uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-6 flex flex-col gap-3 font-mono text-sm">
                                <a href="mailto:hello@serenteelectronics.com" className="text-gray-600 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[#2DAA9E]"/> hello@serenteelectronics.com
                                </a>
                                <a href="tel:+918088131316" className="text-gray-600 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-[#2DAA9E]"/> +91 80881 31316
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
