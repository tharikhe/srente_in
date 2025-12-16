import { Metadata } from 'next';
import { Shield, Truck, Headphones, Award, Globe, Users, Target, History } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "About Us | Serente Electronics - Global Electronic Components Distributor",
    description: "Learn about Serente Electronics, a premier global distributor of electronic components since 2020. ISO 9001:2015 certified, serving OEMs, EMS, and research institutions in over 100 countries.",
};

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden mb-16 bg-brand-teal-dark text-white p-12 md:p-24 text-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Innovation Through Electronics</h1>
                    <p className="text-xl text-white/80 leading-relaxed">
                        Serente Electronics is a premier global distributor of electronic components, dedicated to fueling the future of technology with quality, speed, and reliability.
                    </p>
                </div>
            </div>

            {/* Legacy of Excellence */}
            <div className="bg-white rounded-3xl shadow-soft border border-brand-border p-8 md:p-12 mb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Legacy of Excellence</h2>
                        <h3 className="text-xl text-brand-gold font-medium tracking-wide uppercase">Electronics Distribution</h3>
                    </div>

                    <div className="space-y-6 text-brand-text-muted leading-relaxed text-lg">
                        <p>
                            <strong className="text-brand-text font-semibold">SERENTE ELECTRONICS</strong> is a well-known electronic components distributor. The company was founded in 2020 and is headquartered in Bangalore. Geared to the needs of industrial partners, accumulating more capacity, optimising the industrial supply chain, reducing costs and providing the most cost-effective professional services, this is our pursuit of the goal.
                        </p>
                        <p>
                            SERENTE has relationships with several famous international semiconductor manufacturers/distributors all over the world. The company is committed to the industry partners to provide a full range of semiconductor products technical services, professional agent distribution companies and other international well-known semiconductor products.
                        </p>
                        <p>
                            The company has a group of experienced professional sales and technical teams, to meet the needs of the growing customers at the same time, the company has been in Bangalore, to set up an operation with regional sales-technical representatives. Our logical goal is to become one of the world's best electronic components distributors.
                        </p>
                        <p>
                            Under the joint efforts of all staff, the company will continue to carry forward the <span className="italic text-brand-teal font-medium">"integrity, unity and progress, strives for realism the innovation, achievement of excellence"</span> spirit of enterprise, adhering to the <span className="italic text-brand-teal font-medium">"professional, enthusiastic, efficient"</span> service concept, continue to strengthen exchanges and cooperation with industry partners at home and abroad, as always for the terminal customers provide the most advanced product technology, the optimization of solution, the most flexible logistics services, the most competitive prices. Because of speciality, so the lead!
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-text mb-4">Why Choose Serente?</h2>
                    <p className="text-brand-text-muted max-w-2xl mx-auto">
                        We go beyond simple distribution. We are your strategic partner in navigating the complex world of electronic components.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Shield, title: 'Quality Guaranteed', desc: 'ISO 9001:2015 certified with rigorous anti-counterfeit testing labs.' },
                        { icon: Truck, title: 'Global Logistics', desc: 'Fast, reliable shipping to over 100 countries with real-time tracking.' },
                        { icon: Headphones, title: 'Expert Support', desc: 'Dedicated account managers and technical engineers at your service.' },
                        { icon: History, title: 'Proven Track Record', desc: 'Over 15 years of experience serving OEMs, EMS, and research institutions.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border hover:shadow-medium transition-all text-center">
                            <div className="w-12 h-12 mx-auto bg-brand-surface rounded-xl flex items-center justify-center mb-4 text-brand-teal">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-brand-text mb-2">{item.title}</h3>
                            <p className="text-sm text-brand-text-muted">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-brand-text text-white rounded-3xl p-12 mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {[
                        { label: 'Products in Stock', value: '5M+' },
                        { label: 'Manufacturers', value: '800+' },
                        { label: 'Countries Served', value: '100+' },
                        { label: 'Happy Clients', value: '10k+' },
                    ].map((stat, i) => (
                        <div key={i} className="p-4">
                            <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{stat.value}</div>
                            <div className="text-white/60 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-brand-teal to-brand-teal-light rounded-3xl p-12 md:p-16 text-white shadow-glow-teal">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                    Browse our extensive catalog or upload your Bill of Materials (BOM) for a quick, competitive quote.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                        href="/products"
                        className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-glow-gold hover:scale-105"
                    >
                        Browse Catalog
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    );
}
