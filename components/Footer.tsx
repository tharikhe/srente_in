import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

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
                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow md:w-80 px-5 py-3.5 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-colors"
                            />
                            <button className="px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold rounded-r-xl transition-all duration-200 flex items-center gap-2 hover:shadow-glow-gold">
                                <Send className="w-5 h-5" />
                                <span className="hidden sm:inline">Subscribe</span>
                            </button>
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
                            Your trusted partner for electronic components distribution. We provide high-quality parts with full traceability and exceptional service.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: Twitter, href: '#', label: 'Twitter' },
                                { icon: Facebook, href: '#', label: 'Facebook' },
                                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                                { icon: Instagram, href: '#', label: 'Instagram' },
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
                                { label: 'All Manufacturers A-Z', href: '#' },
                                { label: 'Popular Parts', href: '#' },
                                { label: 'Posts & Blogs', href: '#' },
                                { label: 'About Us', href: '#' },
                                { label: 'Quality Control', href: '#' },
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
                                { label: 'Request for Quotation', href: '#' },
                                { label: 'Delivery Information', href: '#' },
                                { label: 'Payment Information', href: '#' },
                                { label: 'Help Center', href: '#' },
                                { label: 'Track Your Order', href: '#' },
                                { label: 'Return Policy', href: '#' },
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
                                    <p className="text-white font-medium text-sm">Landline: +91 86607 44258</p>
                                    <p className="text-white font-medium text-sm">Phone: +91 93534 13620</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-white/50 text-xs mb-1">Email</p>
                                    <p className="text-white font-medium">Info@serentehk.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-white/50 text-xs mb-1">Address</p>
                                    <p className="text-white font-medium">123 Tech Park, Shenzhen, China</p>
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
                        {/* Payment Icons */}
                        {/* Payment Icons */}
                        <div className="flex items-center gap-4">
                            <div className="h-8 w-auto relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src="/payment-methods/visa-mastercard.png"
                                    alt="Visa Mastercard"
                                    width={100}
                                    height={32}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <div className="h-8 w-auto relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src="/payment-methods/paypal.png"
                                    alt="PayPal"
                                    width={80}
                                    height={32}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <div className="h-8 w-auto relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src="/payment-methods/alipay.png"
                                    alt="Alipay"
                                    width={80}
                                    height={32}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <div className="h-10 w-auto relative ml-2 group">
                                <Image
                                    src="/payment-methods/iso-certified.png"
                                    alt="ISO Certified"
                                    width={40}
                                    height={40}
                                    className="h-full w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>

                        {/* Copyright */}
                        <p className="text-white/50 text-sm text-center">
                            © {currentYear} Serente Electronics Limited. All Rights Reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="#" className="text-white/50 hover:text-brand-gold transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link href="#" className="text-white/50 hover:text-brand-gold transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
