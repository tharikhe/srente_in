import Link from 'next/link';
import { ArrowLeft, FileCheck, AlertCircle, Scale, DollarSign, Truck, Shield, RotateCcw, Globe, Ban, FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions | Serente Electronics",
    description: "Terms and conditions for Serente Electronics Pvt. Ltd., top semiconductor distributors and electronic component distributor.",
    keywords: ['electronic component distributor', 'electronic components supplier', 'OEM & ODM', 'Serente Electronics', 'semiconductor distributor', 'semiconductor distributors', 'electronic components distribution', 'authorized semiconductor distributor', 'semiconductor components'],
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-[#1A1A1A] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] text-xs font-bold uppercase tracking-wider mb-6">
                        <Scale className="w-4 h-4" />
                        <span>Legal Agreement</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms &amp; Conditions</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before using our website or engaging our services.
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
                            These Terms and Conditions (&quot;Terms&quot;) govern your use of the website <strong>serente.in</strong> and any related services provided by Serente Electronics Pvt. Ltd. (&quot;Serente,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company registered in Bengaluru, Karnataka, India. By accessing our website, submitting inquiries, requesting quotations, or placing orders, you agree to be bound by these Terms. If you do not agree, please discontinue use of our website and services.
                        </p>

                        {/* Section 1 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Scale className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">1. Acceptance of Terms</h2>
                            </div>
                            <p>
                                By using this website, you confirm that you are at least 18 years of age and are legally capable of entering into binding agreements. These Terms apply to all visitors, users, customers, and any other parties who access or use our website and services. We reserve the right to update or modify these Terms at any time. Changes become effective upon posting. Continued use of our site after modifications constitutes acceptance of the revised Terms.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <FileCheck className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">2. Products, Services &amp; Orders</h2>
                            </div>
                            <p>All products and services listed on our website are subject to availability. We reserve the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Modify, discontinue, or update any product listing, pricing, or specification without prior notice.</li>
                                <li>Limit the quantities of any products or services offered.</li>
                                <li>Refuse or cancel any order at our sole discretion, including orders that appear to violate our policies or contain errors.</li>
                            </ul>
                            <p className="mt-4">
                                Product images displayed on our website are for illustrative purposes only and may differ from the actual product. All component specifications, datasheets, and technical data are provided by the original manufacturers and are subject to change.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <DollarSign className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">3. Pricing, Quotations &amp; Payment</h2>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Pricing:</strong> All prices are subject to change without notice. Prices quoted are valid for the period specified in the quotation (typically 7–14 business days unless stated otherwise).</li>
                                <li><strong>Quotations:</strong> Quotations provided via email or our website are non-binding until a formal Proforma Invoice (PI) is issued and accepted by both parties.</li>
                                <li><strong>Payment Terms:</strong> Payment terms are as specified in the Proforma Invoice. Accepted methods include bank wire transfer, PayPal, and other methods as agreed upon.</li>
                                <li><strong>Taxes:</strong> Prices may exclude applicable taxes (GST, customs duties, import levies). The buyer is responsible for all applicable taxes and duties unless otherwise stated.</li>
                                <li><strong>Currency:</strong> Unless otherwise specified, all prices are quoted in USD or INR. Currency conversion rates at the time of payment apply.</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Truck className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">4. Shipping &amp; Delivery</h2>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Shipping Methods:</strong> We ship globally via trusted logistics partners (DHL, FedEx, UPS, and local couriers). Shipping method and carrier selection depend on order size, destination, and customer preference.</li>
                                <li><strong>Lead Times:</strong> Estimated lead times are provided at the time of quotation and are subject to component availability. We make every effort to meet stated delivery timelines but cannot guarantee exact delivery dates.</li>
                                <li><strong>Risk of Loss:</strong> Title and risk of loss transfer to the buyer upon delivery to the shipping carrier (FOB Shipping Point), unless otherwise agreed in writing.</li>
                                <li><strong>Inspection:</strong> The buyer must inspect all shipments upon receipt and report any discrepancies, damage, or shortages within 48 hours of delivery.</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <RotateCcw className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">5. Returns, Refunds &amp; Cancellations</h2>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Returns:</strong> Returns are accepted within 30 days of delivery for defective or incorrect items only. Products must be in original, unopened packaging with all labels intact. A Return Merchandise Authorization (RMA) number must be obtained from us prior to returning any goods.</li>
                                <li><strong>Refunds:</strong> Upon verification of the returned product, we will issue a replacement, credit note, or refund at our discretion. Refunds are processed within 15 business days of receiving the returned goods.</li>
                                <li><strong>Cancellations:</strong> Orders may be cancelled before shipment without penalty. Once shipped, cancellation is subject to our return policy. Custom or special-order items are non-cancellable and non-refundable.</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <AlertCircle className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">6. Warranty &amp; Limitation of Liability</h2>
                            </div>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Product Warranty:</strong> All components are sourced from authorized distributors and vetted manufacturers. We warrant that products will be free from defects in material and workmanship for 30 days from the date of shipment, backed by full Certificate of Conformance (CoC) documentation.</li>
                                <li><strong>Limitation:</strong> Our total liability for any claim shall not exceed the purchase price of the specific product(s) giving rise to the claim.</li>
                                <li><strong>Exclusions:</strong> We shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, arising from the use or inability to use our products or services.</li>
                                <li><strong>No Guarantee:</strong> This website and its contents are provided &quot;as is&quot; without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.</li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Shield className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">7. Intellectual Property</h2>
                            </div>
                            <p>
                                All content on this website — including but not limited to text, graphics, logos, images, product descriptions, and software — is the property of Serente Electronics Pvt. Ltd. or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, or publicly display any content from this website without prior written consent.
                            </p>
                            <p className="mt-4">
                                All trademarks, brand names, and logos of third-party manufacturers displayed on this website are the property of their respective owners and are used solely for product identification purposes.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Ban className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">8. Prohibited Uses</h2>
                            </div>
                            <p>You agree not to use this website:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>For any unlawful purpose or in violation of any applicable laws or regulations.</li>
                                <li>To transmit malicious code, viruses, or any other harmful software.</li>
                                <li>To scrape, harvest, or collect data from our website without authorization.</li>
                                <li>To impersonate any person or entity or misrepresent your affiliation.</li>
                                <li>To interfere with the proper functioning of the website or its infrastructure.</li>
                            </ul>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <Globe className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">9. Governing Law &amp; Dispute Resolution</h2>
                            </div>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
                            </p>
                            <p className="mt-4">
                                Both parties agree to attempt to resolve any dispute through good-faith negotiation before resorting to legal proceedings. If negotiations fail, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="mb-10">
                            <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                                <FileText className="w-6 h-6" />
                                <h2 className="text-2xl font-bold m-0">10. Force Majeure</h2>
                            </div>
                            <p>
                                Serente Electronics shall not be liable for any delay or failure in performance resulting from causes beyond our reasonable control, including but not limited to natural disasters, acts of war, terrorism, pandemics, government restrictions, supply chain disruptions, semiconductor shortages, or failures of third-party suppliers or carriers.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <div className="border-t border-gray-200 pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">11. Contact Information</h3>
                            <p className="mb-4">If you have any questions about these Terms &amp; Conditions, please contact us:</p>
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
