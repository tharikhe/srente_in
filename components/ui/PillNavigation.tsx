'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

export interface NavItem {
    label: string;
    href: string;
}

interface PillNavigationProps {
    items?: NavItem[];
    className?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Events', href: '/events' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

/**
 * Interactive Pill Navigation
 * Collapses to active item, expands on hover
 */
export function PillNavigation({
    items = DEFAULT_NAV_ITEMS,
    className = '',
}: PillNavigationProps) {
    const pathname = usePathname();
    const router = useRouter();

    const [expanded, setExpanded] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Spring animations for smooth width expansion
    const pillWidth = useSpring(140, { stiffness: 220, damping: 25, mass: 1 });

    // Handle hover expansion
    useEffect(() => {
        if (hovering) {
            setExpanded(true);
            pillWidth.set(520); // Width when expanded
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        } else {
            hoverTimeoutRef.current = setTimeout(() => {
                setExpanded(false);
                pillWidth.set(140); // Width when collapsed
            }, 400); // Slight delay before collapse
        }

        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, [hovering, pillWidth]);

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const handleSectionClick = (href: string) => {
        setIsTransitioning(true);
        router.push(href);
        setHovering(false); // Force collapse
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 400);
    };

    // Determine current active item
    const activeItem = items.find(
        (item) => pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
    ) || items[0];

    return (
        <motion.nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-full bg-[#111111]/85 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6),0_4px_12px_rgba(0,0,0,0.3)] ${className}`}
            style={{
                width: pillWidth,
                height: '52px',
                overflow: 'hidden',
            }}
        >
            {/* Active/Collapsed State */}
            {!expanded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {activeItem && !isTransitioning && (
                            <motion.div
                                key={activeItem.href}
                                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                                transition={{ duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
                                className="flex items-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
                                <span className="text-sm font-bold uppercase tracking-wider text-white whitespace-nowrap">
                                    {activeItem.label}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Expanded State (All links) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence>
                    {expanded && (
                        <div className="flex items-center justify-evenly w-full px-2 pointer-events-auto">
                            {items.map((item, index) => {
                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== '/' && pathname.startsWith(item.href));

                                return (
                                    <motion.button
                                        key={item.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{
                                            delay: index * 0.05,
                                            duration: 0.25,
                                            ease: 'easeOut',
                                        }}
                                        onClick={() => handleSectionClick(item.href)}
                                        className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap ${
                                            isActive
                                                ? 'bg-gradient-to-b from-[#FFFFFF] via-[#F8F8FA] to-[#EAEAEF] text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,1)]'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        <span className="relative z-10 flex items-center gap-1.5">
                                            {item.label}
                                            {isActive && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
                                            )}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default PillNavigation;
