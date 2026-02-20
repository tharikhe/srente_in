import { Suspense } from 'react';
import ProductTable from '@/components/ProductTable';
import { redirect } from 'next/navigation';
import { getCategoryPath } from '@/lib/category-url';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Product Catalog | Electronic Components & Semiconductor Parts Supplier - Serente Electronics HK",
    description: "Browse our extensive catalog of semiconductor components: integrated circuits (ICs), MOSFET transistors, IGBT modules, Schottky diodes, Zener diodes, capacitors, resistors, inductors, LCD/OLED displays, touch panels, connectors, and semiconductor discrete parts. Buy semiconductor components online from Hong Kong.",
    keywords: ['electronics parts suppliers', 'semiconductor components supplier', 'buy semiconductor components online', 'MOSFET transistor', 'IGBT module', 'integrated circuits ICs', 'Schottky diode', 'Zener diode', 'passive components', 'LCD OLED displays', 'semiconductor components wholesale', 'semiconductor components price list', 'power semiconductor devices'],
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
                    <h1 className="text-3xl font-bold text-brand-teal">Semiconductor & Electronic Components Catalog</h1>
                    <p className="text-gray-600 mt-1">Browse our inventory of semiconductor components, ICs, MOSFETs, diodes, capacitors, resistors, connectors and more from authorized distributors.</p>
                </div>
            </div>
            <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
                <ProductTable />
            </Suspense>
        </div>
    );
}
