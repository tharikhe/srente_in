'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Globe2, Building2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToGoogleSheets } from '@/lib/google-sheets';

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const submissionData = {
            type: 'contact',
            ...formData
        };

        const result = await submitToGoogleSheets(submissionData);

        if (result.success) {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        } else {
            setIsSubmitting(false);
            alert('Failed to send message. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden font-sans">
            {/* Background Ambient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#2DAA9E]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#E3D2C3]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                
                {/* Hero Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2DAA9E]/10 border border-[#2DAA9E]/30 text-[#2DAA9E] text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#2DAA9E] animate-pulse"></span>
                        We're Here to Help
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DAA9E] to-emerald-400">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Have questions about our components? Need a custom quote? Reach out to our engineering and sales experts today.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-12 gap-8 lg:gap-12"
                >
                    {/* LEFT COLUMN: Contact Info & Maps */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div variants={itemVariants} className="bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Building2 className="w-6 h-6 text-[#2DAA9E]" />
                                Contact Details
                            </h3>
                            
                            <div className="space-y-8">
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#2DAA9E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2DAA9E] transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-[#2DAA9E] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400 mb-1">Email Us</p>
                                        <a href="mailto:hello@serenteelectronics.com" className="text-lg font-semibold text-white hover:text-[#2DAA9E] transition-colors break-all">
                                            hello@serenteelectronics.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#E3D2C3]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E3D2C3] transition-colors duration-300">
                                        <Phone className="w-5 h-5 text-[#E3D2C3] group-hover:text-[#1A1A1A] transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400 mb-1">Call Us</p>
                                        <a href="tel:+918660744258" className="text-lg font-semibold text-white hover:text-[#E3D2C3] transition-colors">
                                            +91 86607 44258
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                                        <Clock className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400 mb-1">Business Hours</p>
                                        <p className="text-lg font-semibold text-white">Mon - Sat: 9AM - 6PM</p>
                                        <p className="text-sm text-gray-500 mt-1">IST (Indian Standard Time)</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: The Form */}
                    <motion.div variants={itemVariants} className="lg:col-span-7">
                        <div className="bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
                            {/* Form Glowing Accents */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DAA9E]/10 rounded-full blur-[100px] pointer-events-none" />
                            
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-20"
                                    >
                                        <div className="w-24 h-24 bg-gradient-to-br from-[#2DAA9E] to-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(45,170,158,0.4)]">
                                            <Send className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                        <p className="text-gray-400 max-w-sm mb-8 text-lg">
                                            Thank you for reaching out. One of our specialists will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold transition-all"
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form 
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit} 
                                        className="space-y-6 relative z-10"
                                    >
                                        <div className="mb-8">
                                            <h2 className="text-3xl font-bold mb-2">Drop us a line</h2>
                                            <p className="text-gray-400">We'd love to hear from you. Please fill out the form below.</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-300">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedInput('name')}
                                                    onBlur={() => setFocusedInput(null)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]/50 focus:border-[#2DAA9E] transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-300">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedInput('email')}
                                                    onBlur={() => setFocusedInput(null)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]/50 focus:border-[#2DAA9E] transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-300">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedInput('phone')}
                                                    onBlur={() => setFocusedInput(null)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]/50 focus:border-[#2DAA9E] transition-all"
                                                    placeholder="+1 234 567 890"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-300">Company Name</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedInput('company')}
                                                    onBlur={() => setFocusedInput(null)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]/50 focus:border-[#2DAA9E] transition-all"
                                                    placeholder="Your Company Ltd."
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-300">Subject *</label>
                                            <select
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedInput('subject')}
                                                onBlur={() => setFocusedInput(null)}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]/50 focus:border-[#2DAA9E] transition-all appearance-none"
                                            >
                                                <option value="" disabled className="bg-[#1A1A1A]">Select a subject</option>
                                                <option value="quote" className="bg-[#1A1A1A]">Request a Quote</option>
                                                <option value="product" className="bg-[#1A1A1A]">Product Inquiry</option>
                                                <option value="technical" className="bg-[#1A1A1A]">Technical Support</option>
                                                <option value="other" className="bg-[#1A1A1A]">Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-300">Message *</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedInput('message')}
                                                onBlur={() => setFocusedInput(null)}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]/50 focus:border-[#2DAA9E] transition-all resize-none"
                                                placeholder="Please describe your requirements in detail..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-5 bg-gradient-to-r from-[#2DAA9E] to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(45,170,158,0.3)] hover:shadow-[0_0_30px_rgba(45,170,158,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending Message...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
