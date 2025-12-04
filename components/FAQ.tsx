'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: 'What types of electronic components do you supply?',
        answer: 'We supply a comprehensive range of electronic components including resistors, capacitors, inductors, ICs, diodes, transistors, connectors, switches, and more. Our inventory covers both active and passive components from leading manufacturers worldwide.',
    },
    {
        question: 'Do you offer warranty on your products?',
        answer: 'Yes, all our products come with a manufacturer warranty. We are ISO 9001:2015 certified and provide full traceability documentation. If you receive any defective components, we offer hassle-free returns and replacements.',
    },
    {
        question: 'What is the minimum order quantity (MOQ)?',
        answer: 'Our MOQ varies by product. For most standard components, we offer flexible quantities starting from 1 piece. For bulk orders, we provide significant volume discounts. Contact our sales team for specific MOQ details.',
    },
    {
        question: 'How do I use the BOM Upload Tool?',
        answer: 'Our BOM (Bill of Materials) tool allows you to upload your component list in Excel or CSV format. Simply navigate to the BOM Tool page, upload your file, and receive instant quotes for all components. Our team will review and respond within 24 hours.',
    },
    {
        question: 'What are your shipping options and delivery times?',
        answer: 'We offer worldwide shipping with multiple options including express delivery (1-3 days), standard shipping (5-7 days), and economy shipping (10-15 days). We ship from our warehouses in India and Hong Kong for faster regional delivery.',
    },
    {
        question: 'Can you source obsolete or hard-to-find components?',
        answer: 'Yes! We specialize in sourcing obsolete, end-of-life, and hard-to-find electronic components. Our global network of suppliers allows us to locate rare parts. Submit your requirements and we\'ll do our best to find what you need.',
    },
    {
        question: 'Do you provide technical datasheets?',
        answer: 'Absolutely. We provide complete technical documentation including datasheets, application notes, and compliance certificates for all products. These can be downloaded directly from product pages or requested from our support team.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including bank transfers, credit/debit cards, PayPal, and letters of credit for large orders. For established customers, we also offer flexible payment terms. Contact us for more details.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
                        <HelpCircle className="w-4 h-4 text-brand-gold" />
                        <span className="text-sm font-semibold text-brand-gold uppercase tracking-wider">FAQ</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked
                        <span className="bg-gradient-to-r from-brand-teal to-brand-gold bg-clip-text text-transparent"> Questions</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Find answers to common questions about our products, services, and ordering process
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${openIndex === index
                                        ? 'border-brand-teal shadow-lg shadow-brand-teal/10'
                                        : 'border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${openIndex === index
                                                ? 'bg-brand-teal text-white'
                                                : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className={`font-semibold text-base sm:text-lg transition-colors ${openIndex === index ? 'text-brand-teal' : 'text-gray-900'
                                            }`}>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index
                                                ? 'transform rotate-180 text-brand-teal'
                                                : 'text-gray-400'
                                            }`}
                                    />
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}>
                                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16 sm:pl-[72px]">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Still Have Questions CTA */}
                <div className="mt-12 sm:mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-r from-brand-teal/5 via-white to-brand-gold/5 rounded-2xl border border-gray-100">
                        <div className="p-4 bg-brand-teal/10 rounded-2xl">
                            <MessageCircle className="w-8 h-8 text-brand-teal" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Still have questions?</h3>
                            <p className="text-gray-600">Our support team is here to help you</p>
                        </div>
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-brand-teal hover:bg-brand-teal-dark text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/30"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
