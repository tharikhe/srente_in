'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/google-sheets';

export default function ContactPage() {
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

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 py-20">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        Have questions about our products? Need a quote? Our team is ready to help you find the right components for your project.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    Reach out to us through any of the following channels. We typically respond within 24 hours.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                                        <p className="text-gray-600 dark:text-gray-300">+91 80881 31316</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-300">sales@serentehk.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            2/F Tern Ctr Tower 1<br />
                                            237 Queen's Rd Central<br />
                                            Hong Kong
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Monday - Saturday: 9:00 AM - 5:30 PM</p>
                                        <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Hong Kong Time (GMT+8)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Send Us a Message
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Message Sent Successfully!
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            Thank you for contacting us. We'll respond to your inquiry within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-teal-600 dark:text-teal-400 font-medium hover:underline"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                    placeholder="+1 234 567 8900"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="quote">Request a Quote</option>
                                                <option value="product">Product Inquiry</option>
                                                <option value="availability">Stock Availability</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="partnership">Partnership Opportunity</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Please describe your inquiry in detail. Include part numbers if applicable..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Our Location
                    </h2>
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.688657697472!2d114.1517865759521!3d22.28983634237146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040063260cbed9%3A0x6fda752f9c340d21!2sTern%20Centre%20Tower%201!5e0!3m2!1sen!2shk!4v1703640000000!5m2!1sen!2shk"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Serente Electronics Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
