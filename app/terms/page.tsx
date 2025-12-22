import Link from 'next/link';
import { ArrowLeft, FileCheck, AlertCircle, Scale, DollarSign, HelpCircle } from 'lucide-react';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-brand-teal text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-brand-teal-light text-lg max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before using our website or placing an order.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">

                    <Link href="/" className="inline-flex items-center text-brand-teal hover:text-brand-gold transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="text-sm text-gray-400 mb-8">Last Updated: December 11, 2025</p>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <Scale className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">1. Acceptance of Terms</h2>
                            </div>
                            <p>
                                By accessing this website (Serente Electronics HK Ltd.) and placing an order, you agree to be bound by these standard Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <FileCheck className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">2. Products and Orders</h2>
                            </div>
                            <p>
                                All products listed on our website are subject to availability. We reserve the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Modify or discontinue any product or service without notice.</li>
                                <li>Limit the quantities of any products or services that we offer.</li>
                                <li>Refuse any order you place with us if we believe it violates our policies.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <DollarSign className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">3. Pricing and Payments</h2>
                            </div>
                            <p>
                                Prices for our products are subject to change without notice. We make every effort to display accurate pricing, but errors may occur. In the event of a pricing error, we will notify you before processing your order.
                            </p>
                            <p className="mt-4">
                                Payment terms are as agreed upon in the proforma invoice or quotation provided to you.
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <AlertCircle className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">4. Warranty and Liability</h2>
                            </div>
                            <p>
                                We warrant that our products will be free from defects in material and workmanship for a period of [Insert Warranty Period, e.g., 30 days] from the date of shipment.
                            </p>
                            <p className="mt-4">
                                Our liability is limited to the repair, replacement, or refund of the defected product. We shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products.
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <HelpCircle className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">5. Governing Law</h2>
                            </div>
                            <p>
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of Hong Kong.
                            </p>
                        </section>

                        <div className="border-t border-gray-200 pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Questions?</h3>
                            <p className="mb-4">If you have any questions about these Terms & Conditions, please contact us:</p>
                            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <strong>Serente Electronics HK Ltd.</strong><br />
                                Email: <a href="mailto:sales@serenthk.com" className="text-brand-teal hover:underline">sales@serenthk.com</a><br />
                                Phone: +91 80881 3136
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
