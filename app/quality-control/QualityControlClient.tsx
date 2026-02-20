'use client';

import { ShieldCheck, Microscope, FileCheck, Award, CheckCircle } from 'lucide-react';

export default function QualityControlClient() {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-b from-brand-teal/5 to-transparent rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6 relative z-10">
                    Quality Assurance
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4 relative z-10">
                    At Serente Electronics, quality is not just a promise—it's our core operational principle. As an authorized semiconductor distributor in Hong Kong, we implement rigorous testing and visual inspections to ensure every electronic component meets the highest industry standards for semiconductor devices and discrete parts.
                </p>
            </section>

            {/* Core Pillars */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: ShieldCheck,
                        title: "ISO 9001:2015 Certified",
                        desc: "Our quality management systems are certified to international standards, ensuring consistent performance and service for all semiconductor components and electronic parts we distribute."
                    },
                    {
                        icon: Microscope,
                        title: "Rigorous Inspection",
                        desc: "Every incoming batch of integrated circuits, MOSFETs, IGBTs, diodes, transistors, and passive components undergoes a comprehensive 3-tier inspection process: Visual, Dimensional, and Functional testing."
                    },
                    {
                        icon: FileCheck,
                        title: "Full Traceability",
                        desc: "We maintain complete documentation and lot traceability for all semiconductor devices — from microcontroller ICs and power management ICs to discrete components — from manufacturer to delivery."
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-brand-teal/30 hover:shadow-lg transition-all text-center">
                        <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Inspection Process */}
            <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-brand-text mb-12 text-center">Our Inspection Protocol</h2>
                <div className="space-y-8">
                    {[
                        { step: "01", title: "Visual Inspection", desc: "Examination of packaging, labels, and physical condition of semiconductor components for any signs of damage, oxidation, or counterfeiting." },
                        { step: "02", title: "Dimensional Verification", desc: "Measurement of component dimensions against manufacturer datasheets to ensure exact specifications for ICs, MOSFETs, diodes, and passive components." },
                        { step: "03", title: "X-Ray Analysis", desc: "Non-destructive testing to verify internal die structure and bond wire integrity for complex integrated circuits and power semiconductor modules." },
                        { step: "04", title: "Solderability Testing", desc: "Ensuring proper lead termination and wetting characteristics for reliable PCB assembly of all electronic components." }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-white font-bold text-lg rounded-xl flex items-center justify-center shadow-lg">
                                {step.step}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications Badge Area */}
            <section className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-teal text-white rounded-full shadow-lg hover:shadow-glow-teal transition-all">
                    <Award className="w-6 h-6" />
                    <span className="font-bold tracking-wide">ZERO COUNTERFEIT POLICY</span>
                </div>
                <p className="mt-6 text-sm text-gray-500 max-w-2xl mx-auto">
                    We strictly adhere to IDEA-STD-1010-B standards for the inspection of electronic components and semiconductor devices. As an authorized semiconductor distributor, we have a zero-tolerance policy for counterfeit parts across all product categories including integrated circuits, power semiconductors, and discrete components.
                </p>
            </section>
        </div>
    );
}
