'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export interface NavItem {
    label: string;
    href: string;
}

interface PillNavigationProps {
    items?: NavItem[];
    className?: string;
    onItemClick?: (href: string) => void;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Events', href: '/events' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export function PillNavigation({
    items = DEFAULT_NAV_ITEMS,
    className = '',
    onItemClick,
}: PillNavigationProps) {
    const pathname = usePathname();
    const [hoveredHref, setHoveredHref] = useState<string | null>(null);

    return (
        <nav
            aria-label="Main Navigation"
            className={`relative flex items-center gap-1 p-1.5 rounded-full bg-[#111111]/85 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 ${className}`}
        >
            {items.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                const isHovered = hoveredHref === item.href;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => onItemClick?.(item.href)}
                        onMouseEnter={() => setHoveredHref(item.href)}
                        onMouseLeave={() => setHoveredHref(null)}
                        className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 select-none z-10 ${
                            isActive
                                ? 'text-[#1A1A1A]'
                                : 'text-gray-300 hover:text-white'
                        }`}
                    >
                        {/* Tactile 3D Active Pill Indicator */}
                        {isActive && (
                            <motion.div
                                layoutId="pill-active-indicator"
                                transition={{
                                    type: 'spring',
                                    stiffness: 420,
                                    damping: 32,
                                }}
                                className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FFFFFF] via-[#F8F8FA] to-[#EAEAEF] shadow-[0_4px_14px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.08)] -z-10"
                            />
                        )}

                        {/* Subtle Inactive Hover Highlight */}
                        {!isActive && isHovered && (
                            <motion.div
                                layoutId="pill-hover-indicator"
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 35,
                                }}
                                className="absolute inset-0 rounded-full bg-white/10 -z-10"
                            />
                        )}

                        <span className="relative z-10 flex items-center gap-1.5">
                            {item.label}
                            {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
                            )}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}

export default PillNavigation;
