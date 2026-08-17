'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/google-sheets';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Company',
        links: [
            { title: 'About Us', href: '/about' },
            { title: 'Services', href: '/services' },
            { title: 'Events', href: '/events' },
            { title: 'Blog', href: '/blog' },
            { title: 'Contact Us', href: '/contact' },
        ],
    },
    {
        label: 'Legal',
        links: [
            { title: 'Privacy Policy', href: '/privacy-policy' },
            { title: 'Terms & Conditions', href: '/terms' },
        ],
    },
    {
        label: 'Social Links',
        links: [
            { title: 'LinkedIn', href: '#', icon: Linkedin },
            { title: 'Instagram', href: 'https://www.instagram.com/serenteelectronics_2020?igsh=MTQ0MndjbHpudmM2OA==', icon: Instagram },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl md:rounded-t-6xl border-t border-white/10 bg-[#0D0D0D] bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,184,0,0.12),transparent)] px-6 py-12 lg:py-16 text-white overflow-hidden">
            {/* Top Glowing Blur Line */}
            <div className="bg-[#FFB800] absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur shadow-[0_0_15px_#FFB800]" />

            <div className="grid w-full gap-10 xl:grid-cols-3 xl:gap-8">
                {/* Brand & Newsletter Column */}
                <AnimatedContainer className="space-y-6">
                    <Link href="/" className="inline-flex items-center gap-3 group">
                        <Image
                            src="/logo.png"
                            alt="Serente Logo"
                            width={44}
                            height={44}
                            className="h-10 w-auto group-hover:scale-105 transition-transform"
                        />
                        <div className="flex flex-col">
                            <span className="font-display font-black text-xl tracking-tighter leading-none text-white">
                                SERENTE
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-[#FFB800] leading-none mt-1 uppercase font-bold">
                                Electronics
                            </span>
                        </div>
                    </Link>

                    <p className="text-white/70 text-sm leading-relaxed max-w-sm font-medium">
                        Your trusted semiconductor distributor & EMS solutions provider. Delivering end-to-end component sourcing and manufacturing excellence.
                    </p>

                    {/* Newsletter Subscription Form */}
                    <div className="pt-2">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-[#FFB800] mb-3">
                            Subscribe to Newsletter
                        </h4>
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const emailInput = form.elements.namedItem('email') as HTMLInputElement;
                                const email = emailInput.value;

                                if (!email) return;

                                const btn = form.querySelector('button');
                                if (btn) {
                                    btn.disabled = true;
                                    btn.textContent = 'Subscribing...';
                                }

                                try {
                                    await submitToGoogleSheets({
                                        type: 'contact',
                                        name: 'Newsletter Subscriber',
                                        email: email,
                                        subject: 'Newsletter Subscription',
                                        message: 'User requested to subscribe to the newsletter via website footer.'
                                    });
                                    alert('Thank you for subscribing!');
                                    emailInput.value = '';
                                } catch (error) {
                                    alert('Something went wrong. Please try again.');
                                } finally {
                                    if (btn) {
                                        btn.disabled = false;
                                        btn.innerHTML = '<span class="hidden sm:inline">Subscribe</span>';
                                    }
                                }
                            }}
                            className="flex w-full max-w-sm"
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="flex-grow px-4 py-2.5 rounded-l-xl bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#FFB800] transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-5 py-2.5 bg-[#FFB800] hover:bg-[#E5A500] text-[#1A1A1A] font-bold text-sm rounded-r-xl transition-all duration-200 flex items-center gap-2 shadow-md disabled:opacity-50"
                            >
                                <Send className="w-4 h-4 text-[#1A1A1A]" />
                                <span className="hidden sm:inline">Subscribe</span>
                            </button>
                        </form>
                    </div>

                    <p className="text-white/40 text-xs pt-4">
                        © {new Date().getFullYear()} Serente Electronics Pvt. Ltd. All rights reserved.
                    </p>
                </AnimatedContainer>

                {/* Footer Nav Sections */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-xs uppercase tracking-widest font-bold text-[#FFB800] mb-4">
                                    {section.label}
                                </h3>
                                <ul className="text-white/70 space-y-2.5 text-sm font-medium">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                className="hover:text-[#FFB800] inline-flex items-center transition-all duration-300 gap-2 group"
                                            >
                                                {link.icon && <link.icon className="size-4 text-[#FFB800] group-hover:scale-110 transition-transform" />}
                                                <span>{link.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
