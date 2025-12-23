import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText, Database } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-brand-teal text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-brand-teal-light text-lg max-w-2xl mx-auto">
                        Your privacy is important to us. This policy outlines how Serente Electronics HK Ltd. collects, uses, and protects your information.
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
                                <Database className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">1. Information We Collect</h2>
                            </div>
                            <p>
                                We collect information necessary to provide our services and process your orders. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and shipping address when you request a quote or contact us.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and pages visited.</li>
                                <li><strong>Order Details:</strong> Information regarding the products you inquire about or purchase (Part Numbers, Quantities).</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <Eye className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">2. How We Use Your Information</h2>
                            </div>
                            <p>
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>To process and respond to your quote requests and orders.</li>
                                <li>To communicate with you regarding your inquiries or account.</li>
                                <li>To improve our website functionality and user experience.</li>
                                <li>To send periodic emails regarding new products or services (only if you opt-in).</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <Lock className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">3. Data Security</h2>
                            </div>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <Shield className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">4. Third-Party Disclosure</h2>
                            </div>
                            <p>
                                We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-brand-teal">
                                <FileText className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">5. Cookies</h2>
                            </div>
                            <p>
                                Our website uses cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's systems to recognize your browser and capture and remember certain information.
                            </p>
                            <p className="mt-4">
                                You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings.
                            </p>
                        </section>

                        <div className="border-t border-gray-200 pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
                            <p className="mb-4">If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
                            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <strong>Serente Electronics HK Ltd.</strong><br />
                                Email: <a href="mailto:sales@serenthk.com" className="text-brand-teal hover:underline">sales@serenthk.com</a><br />
                                Phone: +91 80881 31316
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
