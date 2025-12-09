'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck } from 'lucide-react';

const authorisedLines = [
    { name: 'Firstohm', logo: '/brands/firstohm.png', description: 'Specialized Resistors', country: 'Taiwan' },
    { name: 'OCETA', logo: '/brands/oceta.png', description: 'Connector Solutions', country: 'Taiwan' },
    { name: 'GL Fiber', logo: '/brands/gl-fiber.png', description: 'Optical Components', country: 'China' },
    { name: 'ViTEK', logo: '/brands/vitek.png', description: 'LCD & Displays', country: 'Taiwan' },
    { name: 'SONYTEK', logo: '/brands/sonytek.png', description: 'Semiconductors', country: 'Japan' },
    { name: 'Kingtronics', logo: '/brands/kingtronics.png', description: 'Potentiometers & Capacitors', country: 'Hong Kong' },
    { name: 'Palm Technology', logo: '/brands/palm-technology.png', description: 'LCD Modules', country: 'Taiwan' },
    { name: 'Taimates', logo: '/brands/taimates.png', description: 'Battery Holders', country: 'Taiwan' },
    { name: 'Isocom', logo: '/brands/isocom.png', description: 'Optocouplers', country: 'UK' },
];

const otherBrands = [
    'YAGEO', 'Samsung', 'Murata', 'TDK', 'Vishay', 'KEMET', 'AVX', 'Panasonic',
    'Texas Instruments', 'STMicroelectronics', 'NXP', 'Infineon', 'Microchip',
    'Analog Devices', 'Onsemi', 'Diodes Inc', 'Bourns', 'TE Connectivity',
    'Molex', 'JST', 'Hirose', 'Wurth Elektronik'
];

export default function ManufacturersPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAuthorised = authorisedLines.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredOther = otherBrands.filter(brand =>
        brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-12 pb-16">
            {/* Header */}
            <section className="text-center py-12 md:py-20 bg-gradient-to-b from-brand-teal/5 to-transparent rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6 relative z-10">
                    Trusted Manufacturers
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 px-4 relative z-10">
                    We partner with world-class manufacturers to bring you high-quality electronic components with full traceability and reliability.
                </p>

                {/* Search Bar */}
                <div className="max-w-md mx-auto relative px-4 z-10">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search manufacturers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none shadow-sm"
                        />
                    </div>
                </div>
            </section>

            {/* Authorised Lines Grid */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <ShieldCheck className="w-6 h-6 text-brand-gold" />
                    <h2 className="text-2xl font-bold text-gray-800">Authorised Lines</h2>
                </div>

                {filteredAuthorised.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredAuthorised.map((brand) => (
                            <Link
                                key={brand.name}
                                href={`/products?search=${brand.name}`}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-teal/30 transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 relative bg-gray-50 rounded-xl p-2 flex items-center justify-center">
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            fill
                                            className="object-contain p-2"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-teal transition-colors">
                                            {brand.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-1">{brand.description}</p>
                                        <p className="text-xs text-brand-text-muted bg-gray-100 px-2 py-0.5 rounded-full inline-block">
                                            {brand.country}
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 italic">No authorised distributors found matching "{searchQuery}"</p>
                )}
            </section>

            {/* Other Brands */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Other Leading Brands Distributed</h2>
                {filteredOther.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredOther.map((brand) => (
                            <Link
                                key={brand}
                                href={`/products?search=${brand}`}
                                className="bg-white p-4 rounded-xl border border-gray-100 text-center font-medium text-gray-600 hover:text-brand-teal hover:border-brand-teal/30 hover:shadow-md transition-all truncate"
                            >
                                {brand}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 italic">No other brands found matching "{searchQuery}"</p>
                )}
            </section>
        </div>
    );
}
