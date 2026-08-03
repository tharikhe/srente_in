'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/google-sheets';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-teal-dark text-white">
            {/* Newsletter Section */}
            <div className="bg-brand-teal py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                            <p className="text-white/80">Subscribe to our newsletter for the latest products and offers</p>
                        </div>
                        <div className="flex w-full md:w-auto flex-col gap-2">
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
                                className="flex w-full md:w-auto"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="flex-grow md:w-80 px-5 py-3.5 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-colors"
                                />
                                <button type="submit" className="px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-semibold rounded-r-xl transition-all duration-200 flex items-center gap-2 hover:shadow-glow-gold disabled:opacity-50 disabled:cursor-not-allowed">
                                    <Send className="w-5 h-5" />
                                    <span className="hidden sm:inline">Subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold text-brand-gold mb-6">Serente Electronics</h3>
                        <p className="text-white/70 text-sm mb-6 leading-relaxed">
                            Your trusted semiconductor distributors and EMS solutions provider. Authorized electronic components distributor specializing in integrated circuits, MOSFETs, IGBTs, diodes, passive components, LCD/OLED displays, and connector & cable harnessing solutions. OEM & ODM electronic solutions with full traceability.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: Twitter, href: '#', label: 'Twitter' },
                                { icon: Facebook, href: '#', label: 'Facebook' },
                                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                                { icon: Instagram, href: 'https://www.instagram.com/serenteelectronics_2020?igsh=MTQ0MndjbHpudmM2OA==', label: 'Instagram' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-all duration-200 group"
                                >
                                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Product Catalog', href: '/products' },
                                { label: 'Popular Parts', href: '/popular-parts' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Quality Control', href: '/quality-control' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-brand-gold transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Support</h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Request for Quotation', href: '/contact' },
                                { label: 'Upload BOM', href: '/bom' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-brand-gold transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-white/50 text-xs mb-1">Contact</p>
                                    <p className="text-white font-medium text-sm">Phone: +91 86607 44258</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-white/50 text-xs mb-1">Email</p>
                                    <p className="text-white font-medium">hello@serenteelectronics.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-white/50 text-xs mb-1">Address</p>
                                    <p className="text-white font-medium text-sm">Serente Electronics Pvt. Ltd.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Copyright */}
                        <p className="text-white/50 text-sm text-center">
                            © {currentYear} Serente Electronics. All Rights Reserved. | Electronics Manufacturing Services & Electronic Components Supplier
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/terms" className="text-white/50 hover:text-brand-gold transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy-policy" className="text-white/50 hover:text-brand-gold transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
