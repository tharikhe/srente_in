import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Globe, ShieldCheck } from 'lucide-react';
import { manufacturers } from '@/data/manufacturers';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ManufacturerPage({ params }: PageProps) {
    const { slug } = await params;
    const manufacturer = manufacturers.find((m) => m.slug === slug);

    if (!manufacturer) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            {/* Header / Banner */}
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <Link
                        href="/manufacturers"
                        className="inline-flex items-center text-gray-500 hover:text-brand-teal transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Manufacturers
                    </Link>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="w-32 h-32 relative bg-white rounded-2xl shadow-sm border border-gray-100 p-4 shrink-0">
                            <Image
                                src={manufacturer.logo}
                                alt={`${manufacturer.name} logo`}
                                fill
                                className="object-contain p-2"
                                sizes="128px"
                                priority
                            />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                {manufacturer.name}
                            </h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-teal/10 text-brand-teal">
                                    <ShieldCheck className="w-4 h-4 mr-1.5" />
                                    Authorised Distributor
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                                    {manufacturer.country}
                                </span>
                            </div>
                            <p className="text-xl text-gray-600 max-w-2xl">
                                {manufacturer.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: About */}
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {manufacturer.name}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {manufacturer.longDescription}
                            </p>

                            {manufacturer.website && (
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <a
                                        href={manufacturer.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-brand-teal font-medium hover:underline"
                                    >
                                        <Globe className="w-5 h-5 mr-2" />
                                        Visit Official Website
                                    </a>
                                </div>
                            )}
                        </section>

                        <section className="bg-brand-teal/5 rounded-2xl p-8 border border-brand-teal/10">
                            <h2 className="text-xl font-bold text-brand-teal mb-4">Why Buy {manufacturer.name} from Us?</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start text-gray-700">
                                    <ShieldCheck className="w-5 h-5 text-brand-gold mr-3 mt-0.5 shrink-0" />
                                    <span>100% Genuine and Original Components</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <ShieldCheck className="w-5 h-5 text-brand-gold mr-3 mt-0.5 shrink-0" />
                                    <span>Full Manufacturer Warranty & Traceability</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <ShieldCheck className="w-5 h-5 text-brand-gold mr-3 mt-0.5 shrink-0" />
                                    <span>Technical Support & Datasheets Available</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: CTA or Quick Links */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Interested in {manufacturer.name} Products?</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Browse our catalog or request a quote for specific parts.
                            </p>
                            <Link
                                href={`/products?search=${manufacturer.name}`}
                                className="block w-full text-center bg-brand-teal text-white py-3 rounded-xl font-medium hover:bg-brand-teal-dark transition-colors mb-3"
                            >
                                Browse Products
                            </Link>
                            <Link
                                href="/quote"
                                className="block w-full text-center bg-white border-2 border-brand-teal text-brand-teal py-3 rounded-xl font-medium hover:bg-brand-teal/5 transition-colors"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
