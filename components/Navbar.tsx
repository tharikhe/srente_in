'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, Phone, Mail, ChevronDown, X, Zap, Clock, MapPin, ArrowRight, Sparkles, Cpu, Activity, Battery, Plug, Speaker, Gem, Monitor, Fan, ZapOff, Lightbulb, Box, Sliders, ToggleLeft, Eye, Repeat, Share2, Wrench, Layers, Fuel } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { categories, searchProducts, Product } from '@/data/products';
import { useRouter } from 'next/navigation';


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
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-xs py-2.5 hidden md:block border-b border-gray-700/50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center divide-x divide-gray-600">
                        <a href="mailto:sales@serenthk.com" className="flex items-center gap-2 hover:text-brand-gold transition-all duration-300 pr-5 group">
                            <div className="p-1.5 bg-brand-teal/20 rounded-full group-hover:bg-brand-gold/20 transition-colors">
                                <Mail className="w-3 h-3" />
                            </div>
                            <span className="font-medium">sales@serenthk.com</span>
                        </a>
                        <a href="tel:+91808813136" className="flex items-center gap-2 hover:text-brand-gold transition-all duration-300 px-5 group">
                            <div className="p-1.5 bg-brand-teal/20 rounded-full group-hover:bg-brand-gold/20 transition-colors">
                                <Phone className="w-3 h-3" />
                            </div>
                            <span className="font-medium">+91 80881 3136</span>
                        </a>
                        <div className="flex items-center gap-2 px-5 text-gray-400">
                            <div className="p-1.5 bg-gray-700 rounded-full">
                                <Clock className="w-3 h-3" />
                            </div>
                            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>India & Hong Kong</span>
                        </div>
                        <div className="h-4 w-px bg-gray-600" />
                        <Link href="/contact" className="flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-light transition-colors font-medium group">
                            <span>Get Quote</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header - Premium Design */}
            <div className={`relative z-[60] bg-white py-3 sm:py-4 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-soft'}`}>
                <div className="container mx-auto px-4 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 hover:bg-brand-teal/10 rounded-xl transition-all duration-300 group"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-brand-teal group-hover:rotate-90 transition-transform duration-300" />
                        ) : (
                            <Menu className="w-6 h-6 text-brand-teal group-hover:scale-110 transition-transform" />
                        )}
                    </button>

                    {/* Logo with Hover Effect */}
                    <Link href="/" className="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal/20 to-brand-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Image
                                src="/logo.png"
                                alt="Serente Electronics"
                                width={56}
                                height={56}
                                priority
                                className="h-10 sm:h-14 w-auto relative transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-row items-baseline gap-1">
                            <span className="text-base sm:text-xl font-bold text-brand-teal tracking-tight leading-none group-hover:text-brand-teal-dark transition-colors">
                                Serente Electronics
                            </span>
                            <span className="text-base sm:text-lg font-bold text-brand-teal tracking-tight leading-none group-hover:text-brand-teal-dark transition-colors">
                                HK LTD
                            </span>
                        </div>
                    </Link>

                    {/* Premium Search Bar */}
                    <div className={`hidden lg:block flex-grow max-w-2xl transition-all duration-500 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                        <div className="relative z-50">
                            {/* Glow Effect on Focus */}
                            <div className={`absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-gold rounded-2xl blur-md transition-opacity duration-300 ${isSearchFocused ? 'opacity-40' : 'opacity-0'}`} />

                            <div className="relative flex">
                                <div className="relative flex-grow">
                                    <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 ${isSearchFocused ? 'text-brand-teal scale-110' : 'text-gray-400'}`} />
                                    <input
                                        type="text"
                                        placeholder="Search by Part Number, Manufacturer, or Description..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        onFocus={() => {
                                            setIsSearchFocused(true);
                                            if (searchQuery.length > 1) setShowSuggestions(true);
                                        }}
                                        onBlur={() => {
                                            setIsSearchFocused(false);
                                            // Delay hiding to allow click event on suggestion
                                            setTimeout(() => setShowSuggestions(false), 200);
                                        }}
                                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-l-2xl transition-all duration-300 text-sm placeholder:text-gray-400 ${isSearchFocused
                                            ? 'border-brand-teal bg-white shadow-lg'
                                            : 'border-gray-200 bg-gray-50/80 hover:border-gray-300 hover:bg-white'
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
                                                                <p className="text-sm font-semibold text-gray-900 group-hover/item:text-brand-teal">
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
                                                        e.preventDefault(); // Prevent blur
                                                        handleSearch();
                                                    }}
                                                    className="text-xs font-semibold text-brand-teal hover:text-brand-gold transition-colors"
                                                >
                                                    View all results for "{searchQuery}"
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => handleSearch()}
                                    className="bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-dark hover:to-brand-gold text-white px-8 rounded-r-2xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30 font-semibold flex items-center gap-2 group"
                                >
                                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Premium Action Buttons */}
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                        <Link
                            href="/bom"
                            className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-brand-teal hover:text-white bg-brand-teal/5 hover:bg-brand-teal rounded-xl transition-all duration-300 font-medium text-sm border-2 border-brand-teal/20 hover:border-brand-teal group"
                        >
                            <Zap className="w-4 h-4 group-hover:animate-pulse" />
                            <span>BOM Upload</span>
                        </Link>
                        <Link
                            href="/cart"
                            className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded-xl hover:shadow-lg hover:shadow-brand-teal/30 transition-all duration-300 font-medium text-sm group overflow-hidden"
                        >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform relative" />
                            <span className="hidden sm:inline relative">Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce shadow-lg">
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
            <div className="relative hidden lg:block border-t border-gray-100">
                <div className="container mx-auto px-4 flex items-center relative">
                    {/* Premium Product Catalog Button */}
                    <div className="w-64 flex-shrink-0 py-3 px-0 mr-6 group relative z-50">
                        <button className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-xl flex items-center justify-between hover:bg-brand-teal-dark transition-all duration-300 shadow-md hover:shadow-lg relative z-20">
                            <div className="flex items-center gap-3">
                                <Menu className="w-5 h-5" />
                                <span className="tracking-wide">Product Catalog</span>
                            </div>
                            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            onWheel={(e) => e.stopPropagation()}
                            className="absolute top-full left-0 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-6 grid grid-cols-2 gap-4 mt-2 max-h-[80vh] overflow-y-auto overscroll-contain">
                            {categories.map((category) => {
                                const Icon = getCategoryIcon(category);
                                return (
                                    <Link
                                        key={category}
                                        href={`/products?category=${encodeURIComponent(category)}`}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-surface transition-colors group/item"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover/item:bg-brand-teal group-hover/item:text-white transition-colors">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover/item:text-brand-teal transition-colors">{category}</h4>
                                            <p className="text-xs text-gray-500">Browse {category}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                                    </Link>
                                );
                            })}
                            <div className="col-span-2 mt-2 pt-4 border-t border-gray-100">
                                <Link
                                    href="/products"
                                    className="flex items-center justify-center gap-2 text-brand-gold font-semibold hover:text-brand-gold-dark transition-colors"
                                >
                                    <span>View All Categories</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Main Navigation Links */}
                    <nav className="flex-grow flex items-center justify-center gap-1 font-semibold text-sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative px-4 py-3 text-gray-600 hover:text-brand-teal transition-colors duration-300 tracking-wide group"
                            >
                                {/* Link Text */}
                                <span className="relative z-10 flex items-center gap-1.5">
                                    {link.label}
                                    {link.badge && (
                                        <span className="px-1.5 py-0.5 bg-brand-gold text-white text-[10px] font-bold rounded-full">
                                            {link.badge}
                                        </span>
                                    )}
                                </span>

                                {/* Bottom Indicator */}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100" />
                            </Link>
                        ))}
                    </nav>

                    {/* Quick Contact Button */}
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 px-5 py-2.5 ml-6 text-brand-gold hover:text-white border-2 border-brand-gold hover:bg-brand-gold rounded-xl transition-all duration-300 font-bold text-sm group"
                    >
                        <Phone className="w-4 h-4 group-hover:animate-bounce" />
                        <span>Call Now</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay - Premium Design */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[60px] sm:top-[72px] bg-gradient-to-b from-white to-gray-50 z-40 overflow-y-auto">
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
                            <a href="mailto:sales@serenthk.com" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                                <div className="p-3 bg-brand-teal/10 rounded-xl">
                                    <Mail className="w-5 h-5 text-brand-teal" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Email us at</p>
                                    <p className="font-semibold text-gray-800">sales@serenthk.com</p>
                                </div>
                            </a>
                            <a href="tel:+91808813136" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                                <div className="p-3 bg-brand-gold/10 rounded-xl">
                                    <Phone className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Call us at</p>
                                    <p className="font-semibold text-gray-800">+91 80881 3136</p>
                                </div>
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
