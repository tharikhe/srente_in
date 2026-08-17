'use client';

import { motion } from 'framer-motion';

interface HamburgerMenuProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

export function HamburgerMenu({
    isOpen,
    onClick,
    className = '',
}: HamburgerMenuProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className={`relative w-11 h-11 rounded-full bg-[#111111]/85 backdrop-blur-xl border border-white/20 hover:border-[#FFB800]/50 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95 group z-50 ${className}`}
        >
            {/* Top Bar */}
            <motion.span
                animate={
                    isOpen
                        ? { rotate: 45, y: 7.5, width: 20 }
                        : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] bg-white group-hover:bg-[#FFB800] rounded-full transition-colors origin-center block"
            />

            {/* Middle Bar */}
            <motion.span
                animate={
                    isOpen
                        ? { opacity: 0, x: -10 }
                        : { opacity: 1, x: 0, width: 14 }
                }
                transition={{ duration: 0.2 }}
                className="h-[2px] bg-white group-hover:bg-[#FFB800] rounded-full transition-colors origin-center block self-center"
            />

            {/* Bottom Bar */}
            <motion.span
                animate={
                    isOpen
                        ? { rotate: -45, y: -7.5, width: 20 }
                        : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] bg-white group-hover:bg-[#FFB800] rounded-full transition-colors origin-center block"
            />
        </button>
    );
}

export default HamburgerMenu;
