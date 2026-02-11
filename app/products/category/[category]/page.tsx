import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductTable from '@/components/ProductTable';
import { categories } from '@/data/products';
import { categoryToSlug, getCategoryPath, slugToCategory } from '@/lib/category-url';

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: categoryToSlug(category),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
    const { category: categorySlug } = await params;
    const category = slugToCategory(categorySlug);

    if (!category) {
        return {
            title: 'Category Not Found | Serente Electronics',
        };
    }

    return {
        title: `${category} Components | Product Catalog - Serente Electronics`,
        description: `Browse ${category} components from Serente Electronics product catalog.`,
        alternates: {
            canonical: getCategoryPath(category),
        },
    };
}

export default async function CategoryProductsPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = await params;
    const category = slugToCategory(categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-brand-teal">Product Search</h1>
                    <p className="text-gray-600 mt-1">Browse our inventory of electronic components.</p>
                </div>
            </div>
            <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
                <ProductTable />
            </Suspense>
        </div>
    );
}
