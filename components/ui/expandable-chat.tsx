'use client';

import React from 'react';
import { cn } from '@/lib/utils';

// ── ExpandableChat ────────────────────────────────────────────────────────
interface ExpandableChatProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    position?: 'bottom-right' | 'bottom-left';
    icon?: React.ReactNode;
    className?: string;
}

export function ExpandableChat({
    children,
    size = 'md',
    position = 'bottom-right',
    icon,
    className,
}: ExpandableChatProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const sizeClasses = {
        sm: 'w-[320px] h-[420px]',
        md: 'w-[380px] h-[500px]',
        lg: 'w-[440px] h-[580px]',
    };

    const positionClasses = {
        'bottom-right': 'right-4 bottom-4',
        'bottom-left': 'left-4 bottom-4',
    };

    return (
        <div className={cn('fixed z-50', positionClasses[position])}>
            {isOpen && (
                <div
                    className={cn(
                        'mb-3 rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden',
                        sizeClasses[size],
                        className,
                    )}
                >
                    {children}
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFB800] text-[#1A1A1A] shadow-lg hover:bg-[#E5A500] transition-all active:scale-95 font-bold"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                ) : (
                    icon || (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    )
                )}
            </button>
        </div>
    );
}

// ── ExpandableChatHeader ──────────────────────────────────────────────────
interface ExpandableChatHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function ExpandableChatHeader({ children, className }: ExpandableChatHeaderProps) {
    return (
        <div className={cn('flex-shrink-0', className)}>
            {children}
        </div>
    );
}

// ── ExpandableChatBody ────────────────────────────────────────────────────
interface ExpandableChatBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const ExpandableChatBody = React.forwardRef<HTMLDivElement, ExpandableChatBodyProps>(
    ({ children, className }, ref) => {
        return (
            <div ref={ref} className={cn('flex-1 overflow-y-auto', className)}>
                {children}
            </div>
        );
    }
);
ExpandableChatBody.displayName = 'ExpandableChatBody';

// ── ExpandableChatFooter ──────────────────────────────────────────────────
interface ExpandableChatFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function ExpandableChatFooter({ children, className }: ExpandableChatFooterProps) {
    return (
        <div className={cn('flex-shrink-0', className)}>
            {children}
        </div>
    );
}
