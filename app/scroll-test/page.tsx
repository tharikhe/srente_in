'use client';

import Image from 'next/image';

export default function ScrollTestPage() {
    // Generate 20 placeholder product cards
    const products = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Premium Component ${i + 1}`,
        price: `$${(Math.random() * 100).toFixed(2)}`,
        image: `https://picsum.photos/seed/${i + 1}/400/300`, // Placeholder image service
    }));

    return (
        <div className="max-w-7xl mx-auto py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Smooth Scroll Test</h1>
                <p className="text-xl text-gray-600">
                    Scroll down to feel the "weighted" damping effect.
                    <br />
                    Notice how it glides to a stop instead of halting abruptly.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                unoptimized // Allow external images for this test
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-brand-gold font-bold text-lg">{product.price}</p>
                            <p className="text-gray-500 mt-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="mt-4 w-full py-3 bg-brand-teal text-white rounded-xl font-semibold hover:bg-brand-teal-dark transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center text-gray-400">
                <p>End of test content</p>
            </div>
        </div>
    );
}
