'use client';

import Image from 'next/image';



import Link from 'next/link';
import { manufacturers } from '@/data/manufacturers';

export default function AuthorisedLines() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-teal mb-3">
                        Authorised Lines
                    </h2>
                    <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We are proud to be authorised distributors for these leading electronic component manufacturers.
                    </p>
                </div>

                <div className="relative w-full overflow-hidden mask-gradient-sides">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="flex w-max animate-scroll">
                        {/* First Set of Logos */}
                        <div className="flex gap-16 items-center px-8">
                            {manufacturers.map((brand, index) => (
                                <Link
                                    key={`1-${index}`}
                                    href={`/manufacturers/${brand.slug}`}
                                    className="w-[180px] h-24 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={brand.logo}
                                            alt={`${brand.name} logo`}
                                            fill
                                            loading="lazy"
                                            className="object-contain"
                                            sizes="180px"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Duplicate Set for Seamless Loop */}
                        <div className="flex gap-16 items-center px-8">
                            {manufacturers.map((brand, index) => (
                                <Link
                                    key={`2-${index}`}
                                    href={`/manufacturers/${brand.slug}`}
                                    className="w-[180px] h-24 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={brand.logo}
                                            alt={`${brand.name} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="180px"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
