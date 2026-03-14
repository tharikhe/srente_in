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
        title: `${category} Components | Electronic Component Distributor Hong Kong - Serente Electronics`,
        description: `Browse ${category} components from Serente Electronics, top semiconductor distributors in Hong Kong. Wide selection of ${category.toLowerCase()} from authorized electronics parts suppliers. OEM & ODM electronic components supplier with competitive pricing.`,
        keywords: [category.toLowerCase(), 'electronics parts suppliers', 'electronic components supplier', 'electronic component distributor Hong Kong', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'OEM & ODM', 'Resistor and Condenser', 'semiconductor distributor', 'semiconductor distributors', 'hong kong semiconductor distributor', 'semiconductor components supplier', 'industrial semiconductor supplier', 'electronic components distributors in hong kong', 'semiconductor distributors in hong kong', 'industrial electronics supplier', 'electronic components distribution', 'semiconductor products distribution', 'semiconductor components', 'semiconductor devices', 'discrete semiconductor components', 'power semiconductor devices', 'buy semiconductor components online', 'semiconductor components wholesale'],
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
