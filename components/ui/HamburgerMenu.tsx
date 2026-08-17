'use client';

import React from 'react';

interface HamburgerMenuProps {
    isOpen: boolean;
    onClick: () => void;
}

export function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
    return (
        <button
            onClick={onClick}
            aria-label="Toggle menu"
            className="group relative flex items-center h-[42px] w-[120px] rounded-full border-none bg-[#111111]/85 backdrop-blur-2xl text-[#FFB800] text-sm font-bold tracking-wider transition-all duration-500 overflow-hidden hover:shadow-[0_0_15px_rgba(255,184,0,0.2)] focus:outline-none"
        >
            <span className="absolute flex h-[42px] w-[50px] items-center justify-center transition-all duration-500 group-hover:w-[120px] group-active:scale-90">
                <svg viewBox="0 0 100 80" width={24} height={24}>
                    <rect width={100} height={15} fill="#FFB800" rx={8} />
                    <rect y={32} width={100} height={15} fill="#FFB800" rx={8} />
                    <rect y={64} width={100} height={15} fill="#FFB800" rx={8} />
                </svg>
            </span>
            <span className="ml-[45px] uppercase transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                {isOpen ? 'CLOSE' : 'MENU'}
            </span>
        </button>
    );
}
