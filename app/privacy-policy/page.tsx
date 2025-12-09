'use client';

import { Lock, Eye, Database, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto pb-16 space-y-12">
            {/* Header */}
            <section className="text-center py-12 border-b border-gray-100">
                <h1 className="text-4xl font-bold text-brand-teal mb-4">Privacy Policy</h1>
                <p className="text-gray-600">Last updated: December 8, 2024</p>
            </section>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-600">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                    <p className="m-0 text-green-800 font-medium">
                        At Serente Electronics, we are committed to protecting your privacy and ensuring the security of your personal information.
                    </p>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
                            <Database className="w-6 h-6 text-brand-gold" />
                            1. Information We Collect
                        </h2>
                        <p>
                            We collect information that you provide directly to us, such as when you create an account, request a quote, make a purchase, or contact our support team. This may include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>Name, email address, phone number, and company details.</li>
                            <li>Billing and shipping addresses.</li>
                            <li>Payment information (processed securely by third-party providers).</li>
                            <li>Files you upload (e.g., BOM lists).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
                            <Eye className="w-6 h-6 text-brand-gold" />
                            2. How We Use Your Information
                        </h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>Process and fulfill your orders and quote requests.</li>
                            <li>Communicate with you about your account, orders, and products.</li>
                            <li>Send you technical notices, updates, and support messages.</li>
                            <li>Detect and prevent fraudulent transactions and other illegal activities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
                            <Lock className="w-6 h-6 text-brand-gold" />
                            3. Data Security
                        </h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect the security of your personal information. We use SSL/TLS encryption for data transmission and store data in secure data centers.
                        </p>
                    </section>

                    <section>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
                            <Shield className="w-6 h-6 text-brand-gold" />
                            4. Sharing of Information
                        </h2>
                        <p>
                            We do not sell, rent, or trade your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users (e.g., shipping carriers, payment processors), so long as those parties agree to keep this information confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>
                </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center mt-12">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Privacy Concerns?</h3>
                <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy, please contact our Data Protection Officer.</p>
                <a href="mailto:privacy@serente.com" className="inline-block px-6 py-3 bg-brand-teal text-white rounded-xl font-bold hover:bg-brand-teal-dark transition-colors">
                    Contact Privacy Team
                </a>
            </div>
        </div>
    );
}
