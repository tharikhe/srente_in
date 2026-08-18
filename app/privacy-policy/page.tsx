import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText, Database, Globe, Bell, UserCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Serente Electronics",
    description: "Privacy policy for Serente Electronics Pvt. Ltd., leading electronics manufacturing services (EMS) and electronic components supplier. Learn how we protect your data.",
    keywords: ['electronic component distributor', 'electronic components supplier', 'Serente Electronics', 'semiconductor distributor', 'semiconductor distributors', 'electronic components distribution', 'authorized semiconductor distributor', 'semiconductor components'],
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-[#1A1A1A] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] text-xs font-bold uppercase tracking-wider mb-6">
                        <Shield className="w-4 h-4" />
                        <span>Your Privacy Matters</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Your privacy is important to us. This policy outlines how Serente Electronics Pvt. Ltd. collects, uses, and protects your information.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">

                    <Link href="/" className="inline-flex items-center text-[#1A1A1A] hover:text-[#FFB800] transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="text-sm text-gray-400 mb-8">Effective Date: August 18, 2026 &nbsp;|&nbsp; Last Updated: August 18, 2026</p>

                        <p className="text-base leading-relaxed mb-8">
                            Serente Electronics Pvt. Ltd. (&quot;Serente,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>serente.in</strong>, request a quotation, submit a contact form, or otherwise interact with us. By using our website, you consent to the practices described in this policy.
                        </p>

                        {/* Section 1 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Database className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">1. Information We Collect</h2>
                            </div>
                            <p className="font-semibold mt-4 mb-2">1.1 Personal Information You Provide</p>
                            <p>When you request a quotation, fill out a contact form, subscribe to our newsletter, or communicate with us, we may collect:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-3">
                                <li><strong>Identity Data:</strong> Full name, job title, company name.</li>
                                <li><strong>Contact Data:</strong> Email address, phone number, mailing address.</li>
                                <li><strong>Order Data:</strong> Part numbers, quantities, Bill of Materials (BOM) details, and any specifications you share.</li>
                                <li><strong>Communication Data:</strong> Messages, feedback, and correspondence sent to us via email, forms, or WhatsApp.</li>
                            </ul>

                            <p className="font-semibold mt-6 mb-2">1.2 Information Collected Automatically</p>
                            <p>When you browse our website, we may automatically collect:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-3">
                                <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device type.</li>
                                <li><strong>Usage Data:</strong> Pages visited, time spent on each page, referring URL, click patterns.</li>
                                <li><strong>Location Data:</strong> Approximate geographic location inferred from your IP address.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Eye className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">2. How We Use Your Information</h2>
                            </div>
                            <p>We process your personal data for the following lawful purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Quote Processing:</strong> To respond to your quote requests, prepare proforma invoices, and manage orders.</li>
                                <li><strong>Customer Support:</strong> To answer technical queries, provide component recommendations, and facilitate after-sales service.</li>
                                <li><strong>Communication:</strong> To send order confirmations, shipping updates, and service-related notifications.</li>
                                <li><strong>Marketing:</strong> To send newsletters about new product lines, industry insights, or event invitations (only with your explicit opt-in consent).</li>
                                <li><strong>Website Improvement:</strong> To analyze usage patterns and improve site performance, navigation, and user experience.</li>
                                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Globe className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">3. Sharing and Disclosure</h2>
                            </div>
                            <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share your data only in these circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Service Providers:</strong> Trusted vendors who assist with email delivery, analytics, hosting, and payment processing — bound by confidentiality agreements.</li>
                                <li><strong>Supply Chain Partners:</strong> When fulfilling your order requires coordinating with franchised distributors or manufacturers, we share only the minimum necessary order details.</li>
                                <li><strong>Legal Requirements:</strong> When required by law, regulation, court order, or governmental request.</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <FileText className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">4. Cookies and Tracking Technologies</h2>
                            </div>
                            <p>Our website uses cookies and similar technologies to enhance your experience:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Essential Cookies:</strong> Required for basic site functionality (e.g., cart sessions, form submissions).</li>
                                <li><strong>Analytics Cookies:</strong> Google Analytics and Google Tag Manager to understand visitor behavior and improve our services.</li>
                                <li><strong>Preference Cookies:</strong> To remember your settings and preferences across visits.</li>
                            </ul>
                            <p className="mt-4">
                                You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Lock className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">5. Data Security</h2>
                            </div>
                            <p>
                                We implement industry-standard technical and organizational safeguards to protect your personal data, including HTTPS encryption, access controls, and secure server infrastructure. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Bell className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">6. Data Retention</h2>
                            </div>
                            <p>
                                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Quote and order records are typically retained for a minimum of 7 years for accounting and compliance purposes.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <UserCheck className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">7. Your Rights</h2>
                            </div>
                            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                                <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
                                <li><strong>Right to Object:</strong> Object to processing of your data for direct marketing purposes.</li>
                                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent to marketing communications at any time by clicking &quot;unsubscribe&quot; in any email or contacting us directly.</li>
                            </ul>
                            <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:hello@serenteelectronics.com" className="text-[#1A1A1A] hover:text-[#FFB800] font-semibold underline">hello@serenteelectronics.com</a>.</p>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Shield className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">8. Third-Party Links</h2>
                            </div>
                            <p>
                                Our website may contain links to third-party websites (e.g., manufacturer pages, social media profiles). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <FileText className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">9. Changes to This Policy</h2>
                            </div>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated version will be indicated by the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this page periodically for the latest information.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <div className="border-t border-gray-200 pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">10. Contact Us</h3>
                            <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy, you may contact us at:</p>
                            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-1">
                                <strong className="text-lg">Serente Electronics Pvt. Ltd.</strong><br />
                                1787, 15th Main Rd, HBR Layout 5th Block, 1st Stage,<br />
                                HBR Layout, Bengaluru, Karnataka 560043, India<br /><br />
                                Email: <a href="mailto:hello@serenteelectronics.com" className="text-[#1A1A1A] hover:underline font-semibold">hello@serenteelectronics.com</a><br />
                                Phone: <a href="tel:+918088131316" className="text-[#1A1A1A] hover:underline font-semibold">+91 80881 31316</a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
