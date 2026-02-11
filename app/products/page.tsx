import { Suspense } from 'react';
import ProductTable from '@/components/ProductTable';
import { redirect } from 'next/navigation';
import { getCategoryPath } from '@/lib/category-url';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Product Catalog | Electronics Parts Suppliers - Serente Electronics",
    description: "Go to our extensive catalog of electronic components including capacitors,Ic's, IGBTs connectors, LCD / OLED displays and touch panels, semiconductor discrete parts.",
    alternates: {
        canonical: '/products',
    },
};

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
    const resolvedSearchParams = await searchParams;
    const categoryParam = resolvedSearchParams.category;
    const categoryValue = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;

    if (categoryValue) {
        const params = new URLSearchParams();

        for (const [key, value] of Object.entries(resolvedSearchParams)) {
            if (key === 'category' || value === undefined) continue;

            if (Array.isArray(value)) {
                value.forEach((item) => {
                    if (item) params.append(key, item);
                });
            } else if (value) {
                params.set(key, value);
            }
        }

        const categoryPath = getCategoryPath(categoryValue);
        const query = params.toString();
        redirect(query ? `${categoryPath}?${query}` : categoryPath);
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
