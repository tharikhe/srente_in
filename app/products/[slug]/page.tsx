import { products, Product } from '@/data/products';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Package, Building2, Tag, CheckCircle, XCircle } from 'lucide-react';
import AddToCartButton from './AddToCartButton';

// Helper function to create URL-safe slug from part number
export function createSlug(partNumber: string): string {
    return partNumber
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Helper function to find product by slug
export function findProductBySlug(slug: string): Product | undefined {
    return products.find(p => createSlug(p.partNumber) === slug);
}

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: createSlug(product.partNumber),
    }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = findProductBySlug(slug);

    if (!product) {
        return {
            title: 'Product Not Found | Serente Electronics',
        };
    }

    return {
        title: `${product.partNumber} | ${product.category} - Serente Electronics`,
        description: `${product.description}. ${product.manufacturer ? `Manufactured by ${product.manufacturer}.` : ''} Available at Serente Electronics.`,
        alternates: {
            canonical: `/products/${slug}`,
        },
        openGraph: {
            title: `${product.partNumber} - ${product.category}`,
            description: product.description,
            type: 'website',
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = findProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-brand-text-muted mb-6">
                <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-brand-teal transition-colors">Products</Link>
                <span>/</span>
                <span className="text-brand-text">{product.partNumber}</span>
            </nav>

            {/* Back Button */}
            <Link
                href="/products"
                className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal-dark mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
            </Link>

            {/* Product Card */}
            <div className="bg-white rounded-2xl shadow-soft border border-brand-border p-8">
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 bg-brand-surface text-brand-teal text-sm font-bold rounded-lg border border-brand-border">
                        {product.category}
                    </span>
                    {product.manufacturer && (
                        <span className="flex items-center gap-1.5 text-sm text-brand-text-muted">
                            <Building2 className="w-4 h-4" />
                            {product.manufacturer}
                        </span>
                    )}
                </div>

                {/* Part Number */}
                <h1 className="text-3xl font-bold text-brand-text font-mono mb-4">
                    {product.partNumber}
                </h1>

                {/* Description */}
                <p className="text-lg text-brand-text-muted mb-6">
                    {product.description}
                </p>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-8">
                    {product.inStock ? (
                        <>
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span className="text-emerald-600 font-medium">In Stock</span>
                        </>
                    ) : (
                        <>
                            <XCircle className="w-5 h-5 text-red-500" />
                            <span className="text-red-600 font-medium">Out of Stock</span>
                        </>
                    )}
                </div>

                {/* Product Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-4 bg-brand-surface rounded-xl border border-brand-border">
                    <div className="flex items-center gap-3">
                        <Package className="w-5 h-5 text-brand-text-light" />
                        <div>
                            <p className="text-xs text-brand-text-muted">Part Number</p>
                            <p className="font-mono font-medium text-brand-text">{product.partNumber}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Tag className="w-5 h-5 text-brand-text-light" />
                        <div>
                            <p className="text-xs text-brand-text-muted">Category</p>
                            <p className="font-medium text-brand-text">{product.category}</p>
                        </div>
                    </div>
                    {product.manufacturer && (
                        <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-brand-text-light" />
                            <div>
                                <p className="text-xs text-brand-text-muted">Manufacturer</p>
                                <p className="font-medium text-brand-text">{product.manufacturer}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <AddToCartButton product={product} />
                    <Link
                        href="/contact"
                        className="flex-1 py-3.5 px-6 border-2 border-brand-teal text-brand-teal font-semibold rounded-xl text-center hover:bg-brand-teal hover:text-white transition-all"
                    >
                        Request Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
