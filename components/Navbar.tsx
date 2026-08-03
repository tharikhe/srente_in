'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, Phone, Mail, ChevronDown, X, Zap, Clock, MapPin, ArrowRight, Sparkles, Cpu, Activity, Battery, Plug, Speaker, Gem, Monitor, Fan, ZapOff, Lightbulb, Box, Sliders, ToggleLeft, Eye, Repeat, Share2, Wrench, Layers, Fuel } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { categories, searchProducts, Product } from '@/data/products';
import { useRouter, usePathname } from 'next/navigation';
import { getCategoryPath } from '@/lib/category-url';
import ProductCatalogMenu from '@/components/ProductCatalogMenu';


const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Resistors': return Activity;
        case 'Capacitors': return Battery;
        case 'ICs': return Cpu;
        case 'Diodes': return Layers;
        case 'Connectors': return Plug;
        case 'Inductors': return Activity;
        case 'Transistors': return Share2;
        case 'Audio': return Speaker;
        case 'Crystals': return Gem;
        case 'Displays': return Monitor;
        case 'Fans': return Fan;
        case 'Fuses': return ZapOff;
        case 'LEDs': return Lightbulb;
        case 'Potentiometers': return Sliders;
        case 'Power': return Zap;
        case 'Relays': return ToggleLeft;
        case 'Sensors': return Eye;
        case 'Tools': return Wrench;
        case 'Transformers': return Repeat;
        case 'Modules': return Box;
        case 'Fuel Dispenser': return Fuel;
        default: return Sparkles;
    }
};

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Search Suggestions Logic
    useEffect(() => {
        if (searchQuery.length > 1) {
            const results = searchProducts(searchQuery).slice(0, 8);
            setSuggestions(results);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchQuery]);

    const handleSuggestionClick = (product: Product) => {
        setSearchQuery(product.partNumber);
        setShowSuggestions(false);
        router.push(`/products?search=${encodeURIComponent(product.partNumber)}`);
    };

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!searchQuery.trim()) return;

        router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
        setIsMobileMenuOpen(false); // Close mobile menu if open
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const navLinks: { href: string; label: string; badge?: string }[] = [
        { href: '/', label: 'HOME' },
        { href: '/products', label: 'PRODUCTS' },
        { href: '/manufacturers', label: 'LINE CARD' },
        { href: '/blog', label: 'BLOG' },
        { href: '/events', label: 'EVENTS' },
        { href: '/about', label: 'ABOUT US' },
        { href: '/contact', label: 'CONTACT' },
    ];

    return (
        <header className={`flex flex-col w-full sticky top-0 z-50 transition-all duration-500 bg-white ${isScrolled ? 'shadow-2xl' : ''}`}>
            {/* Premium Top Banner with Animation */}


            {/* Enhanced Contact Bar */}
            <div className="bg-[#EAEAEA] text-[#1A1A1A] text-[12px] py-1.5 hidden md:block border-b border-gray-200">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center divide-x divide-gray-300">
                        <a href="mailto:hello@serenteelectronics.com" className="flex items-center gap-1.5 hover:text-[#2DAA9E] transition-all duration-300 pr-4 group">
                            <div className="p-1 bg-[#2DAA9E]/10 rounded-full text-[#2DAA9E]">
                                <Mail className="w-3 h-3" />
                            </div>
                            <span className="font-medium text-gray-700">hello@serenteelectronics.com</span>
                        </a>
                        <a href="tel:+918660744258" className="flex items-center gap-1.5 hover:text-[#2DAA9E] transition-all duration-300 px-4 group">
                            <div className="p-1 bg-[#2DAA9E]/10 rounded-full text-[#2DAA9E]">
                                <Phone className="w-3 h-3" />
                            </div>
                            <span className="font-medium text-gray-700">+91 86607 44258</span>
                        </a>
                        <div className="flex items-center gap-1.5 px-4 text-gray-600">
                            <div className="p-1 bg-[#2DAA9E]/10 rounded-full text-[#2DAA9E]">
                                <Clock className="w-3 h-3" />
                            </div>
                            <span className="font-medium">Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-600 font-medium">
                        <Link href="/contact" className="hover:text-[#2DAA9E] transition-colors">
                            Help Center
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/contact" className="hover:text-[#2DAA9E] transition-colors">
                            Track Order
                        </Link>
                        <span className="text-gray-300">|</span>
                        <span className="flex items-center gap-1 cursor-pointer hover:text-[#2DAA9E]">
                            English <ChevronDown className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Header - Premium Design */}
            <div className={`relative z-[60] bg-white py-2.5 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
                <div className="container mx-auto px-4 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 hover:bg-[#2DAA9E]/10 rounded-xl transition-all duration-300 group"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-[#2DAA9E] group-hover:rotate-90 transition-transform duration-300" />
                        ) : (
                            <Menu className="w-6 h-6 text-[#2DAA9E] group-hover:scale-110 transition-transform" />
                        )}
                    </button>

                    {/* Logo with Hover Effect */}
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 sm:gap-4 group flex-shrink-0 relative z-50"
                    >
                        <div className="relative">
                            <Image
                                src="/logo.png"
                                alt="Serente Electronics"
                                width={56}
                                height={56}
                                priority
                                className="h-10 sm:h-12 w-auto relative transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-row items-baseline gap-1.5">
                            <span className="text-base sm:text-xl font-extrabold text-[#1A1A1A] tracking-tight leading-none">
                                Serente
                            </span>
                            <span className="text-base sm:text-xl font-extrabold text-[#2DAA9E] tracking-tight leading-none">
                                Electronics
                            </span>
                        </div>
                    </Link>

                    {/* Premium Search Bar */}
                    <div className={`hidden lg:block flex-grow max-w-2xl transition-all duration-500 ${isSearchFocused ? 'scale-[1.01]' : ''}`}>
                        <div className="relative z-50">
                            <div className="relative flex">
                                <div className="relative flex-grow">
                                    <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 ${isSearchFocused ? 'text-[#2DAA9E] scale-110' : 'text-gray-400'}`} />
                                    <input
                                        type="text"
                                        placeholder="Search by Part Number, Manufacturer or Description..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        onFocus={() => {
                                            setIsSearchFocused(true);
                                            if (searchQuery.length > 1) setShowSuggestions(true);
                                        }}
                                        onBlur={() => {
                                            setIsSearchFocused(false);
                                            setTimeout(() => setShowSuggestions(false), 200);
                                        }}
                                        className={`w-full pl-11 pr-4 py-2.5 border-2 rounded-l-xl transition-all duration-300 text-sm placeholder:text-gray-400 ${isSearchFocused
                                            ? 'border-[#2DAA9E] bg-white shadow-md'
                                            : 'border-[#EAEAEA] bg-white hover:border-gray-300'
                                            } focus:outline-none`}
                                    />

                                    {/* Search Suggestions Dropdown */}
                                    {showSuggestions && suggestions.length > 0 && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]">
                                            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                                                {suggestions.map((product, idx) => (
                                                    <div
                                                        key={idx}
                                                        onMouseDown={(e) => {
                                                            e.preventDefault();
                                                            handleSuggestionClick(product);
                                                        }}
                                                        className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors group/item"
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <p className="text-sm font-semibold text-gray-900 group-hover/item:text-[#2DAA9E]">
                                                                    {product.partNumber}
                                                                </p>
                                                                <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                                                            </div>
                                                            <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                                                                {product.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-2 bg-gray-50 border-t border-gray-100 text-center">
                                                <button
                                                    onMouseDown={(e) => {
                                                        e.preventDefault();
                                                        handleSearch();
                                                    }}
                                                    className="text-xs font-semibold text-[#2DAA9E] hover:text-[#258B82] transition-colors"
                                                >
                                                    View all results for "{searchQuery}"
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => handleSearch()}
                                    className="bg-[#2DAA9E] hover:bg-[#258B82] text-white px-6 rounded-r-xl transition-all duration-300 font-bold flex items-center gap-2 group shadow-sm"
                                >
                                    <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Premium Action Buttons */}
                    <div className="flex items-center space-x-2 flex-shrink-0">
                        <Link
                            href="/bom"
                            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-brand-teal hover:text-white bg-brand-teal/5 hover:bg-brand-teal rounded-lg transition-all duration-300 font-medium text-sm border-2 border-brand-teal/20 hover:border-brand-teal group"
                        >
                            <Zap className="w-3.5 h-3.5 group-hover:animate-pulse" />
                            <span>BOM Upload</span>
                        </Link>
                        <Link
                            href="/cart"
                            className="relative group block"
                        >
                            <div className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded-lg hover:shadow-lg hover:shadow-brand-teal/30 transition-all duration-300 font-medium text-sm relative overflow-hidden">
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform relative" />
                                <span className="hidden sm:inline relative">Cart</span>
                            </div>
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce shadow-lg z-10">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="lg:hidden container mx-auto px-4 mt-3">
                    <div className="relative flex">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search parts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onFocus={() => {
                                    if (searchQuery.length > 1) setShowSuggestions(true);
                                }}
                                onBlur={() => {
                                    setTimeout(() => setShowSuggestions(false), 200);
                                }}
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-l-xl focus:outline-none focus:border-brand-teal bg-gray-50 text-sm transition-colors"
                            />

                            {/* Mobile Search Suggestions */}
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]">
                                    <div className="max-h-[300px] overflow-y-auto">
                                        {suggestions.map((product, idx) => (
                                            <div
                                                key={idx}
                                                onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    handleSuggestionClick(product);
                                                }}
                                                className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0"
                                            >
                                                <p className="text-sm font-semibold text-gray-900">{product.partNumber}</p>
                                                <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-2 bg-gray-50 border-t border-gray-100 text-center">
                                        <button
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                handleSearch();
                                            }}
                                            className="text-xs font-semibold text-brand-teal"
                                        >
                                            View all results
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => handleSearch()}
                            className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white px-5 rounded-r-xl font-semibold flex items-center"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Navigation Bar - Desktop */}
            <div className="relative hidden lg:block border-t border-[#EAEAEA]">
                <div className="container mx-auto px-4 flex items-center justify-between relative">
                    {/* Motion Product Catalog Menu */}
                    <div className="flex-shrink-0 py-2 px-0 mr-4 relative z-50">
                        <ProductCatalogMenu />
                    </div>

                    {/* Main Navigation Links */}
                    <nav className="flex-grow flex items-center justify-center gap-1 font-bold text-sm">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`relative px-4 py-2.5 transition-colors duration-300 tracking-wide group ${isActive ? 'text-[#2DAA9E]' : 'text-[#1A1A1A] hover:text-[#2DAA9E]'}`}
                                >
                                    <span className="relative z-10 flex items-center gap-1.5 font-bold">
                                        {link.label}
                                    </span>

                                    {/* Bottom Indicator */}
                                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DAA9E] transition-all duration-300 rounded-full ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Quick Contact Button */}
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 px-4 py-2 text-[#2DAA9E] hover:text-white border-2 border-[#2DAA9E] hover:bg-[#2DAA9E] rounded-lg transition-all duration-300 font-bold text-sm group"
                    >
                        <Phone className="w-4 h-4 group-hover:animate-bounce" />
                        <span>Call Now</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay - Premium Design */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[135px] sm:top-[150px] bg-gradient-to-b from-white to-gray-50 z-40 overflow-y-auto">
                    <nav className="container mx-auto px-4 py-6">
                        {/* Mobile Nav Links */}
                        <div className="space-y-2">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-5 py-4 text-brand-teal font-semibold hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-teal-dark hover:text-white rounded-xl transition-all duration-300 group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="flex items-center gap-2">
                                        {link.label}
                                        {link.badge && (
                                            <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                                                {link.badge}
                                            </span>
                                        )}
                                    </span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Quick Actions */}
                        <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
                            <Link
                                href="/bom"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-semibold rounded-xl shadow-lg shadow-brand-teal/20"
                            >
                                <Zap className="w-5 h-5" />
                                BOM Upload Tool
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white font-semibold rounded-xl shadow-lg shadow-brand-gold/20"
                            >
                                <Phone className="w-5 h-5" />
                                Contact Sales Team
                            </Link>
                        </div>

                        {/* Mobile Contact Info */}
                        <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Contact Info</h4>
                            <a href="mailto:hello@serenteelectronics.com" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                                <div className="p-3 bg-brand-teal/10 rounded-xl">
                                    <Mail className="w-5 h-5 text-brand-teal" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Email us at</p>
                                    <p className="font-semibold text-gray-800">hello@serenteelectronics.com</p>
                                </div>
                            </a>
                            <a href="tel:+918660744258" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                                <div className="p-3 bg-brand-gold/10 rounded-xl">
                                    <Phone className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Call us at</p>
                                    <p className="font-semibold text-gray-800">+91 86607 44258</p>
                                </div>
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
