'use client';

import { ShoppingCart, Phone, Mail, MessageCircle, ArrowUp, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <img src="/whatsapp-logo.png" alt="WhatsApp" className={className} />
);

import { useCart } from '@/context/CartContext';

export default function FloatingMenu() {
    const [isVisible, setIsVisible] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems: {
        icon: any;
        label: string;
        href: string;
        color: string;
        badge?: string;
        badgeColor?: string;
    }[] = [
            {
                icon: Phone,
                label: 'Call Us',
                href: 'tel:+918088131316',
                color: 'text-[#F39800]', // Orange
            },
            {
                icon: Mail,
                label: 'Email Us',
                href: 'mailto:sales@serenthk.com',
                color: 'text-[#448ACA]', // Blue
            },
            {
                icon: WhatsAppIcon,
                label: 'WhatsApp',
                href: 'https://wa.me/+918088131316',
                color: '', // Image has its own color
            },
        ];

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-lg bg-white rounded-l-lg overflow-hidden border border-gray-100">
            {menuItems.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="relative w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 group"
                    title={item.label}
                >
                    <item.icon className={`w-6 h-6 ${item.color}`} />

                    {/* Badge for Cart */}
                    {item.badge && (
                        <span className={`absolute top-1 right-1 w-4 h-4 ${item.badgeColor} text-white text-[10px] font-bold rounded-full flex items-center justify-center`}>
                            {item.badge}
                        </span>
                    )}

                    {/* Tooltip */}
                    <span className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {item.label}
                    </span>
                </a>
            ))}

            {/* Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors border-t-2 border-gray-100 group ${isVisible ? 'block' : 'hidden'}`}
                title="Back to Top"
            >
                <ArrowUp className="w-6 h-6 text-[#333333]" />
            </button>
        </div>
    );
}
