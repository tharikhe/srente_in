import { Suspense } from 'react';
import ProductTable from '@/components/ProductTable';
import { redirect } from 'next/navigation';
import { getCategoryPath } from '@/lib/category-url';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Product Catalog | Electronics Parts Suppliers - Serente Electronics",
    description: "Go to our extensive catalog of electronic components including capacitors,Ic's, IGBTs connectors, LCD / OLED displays and touch panels, semiconductor discrete parts.",
    keywords: ['electronics parts suppliers', 'semiconductor components supplier', 'buy semiconductor components online', 'MOSFET transistor', 'IGBT module', 'integrated circuits ICs', 'Schottky diode', 'Zener diode', 'passive components', 'LCD OLED displays', 'semiconductor components wholesale', 'semiconductor components price list', 'power semiconductor devices', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'electronic component distributor Hong Kong', 'electronic components supplier', 'electronics component supplier', 'OEM & ODM', 'Resistor and Condenser', 'semiconductor distributor', 'semiconductor distributors', 'hong kong semiconductor distributor', 'semiconductor distribution companies hong kong', 'industrial semiconductor supplier', 'best semiconductor components suppliers', 'electronic components distributors in hong kong', 'best electronic components distributors in hong kong', 'semiconductor distributors in hong kong', 'industrial electronics supplier', 'electronic components distribution', 'semiconductor products distribution', 'authorized semiconductor distributor', 'optocoupler transistor', 'semiconductor discrete parts', 'MOSFETs', 'IGBTs', 'diodes', 'transistors', 'capacitors', 'resistors', 'inductors', 'touch panels', 'semiconductor components', 'semiconductor devices', 'discrete semiconductor components', 'power MOSFET', 'NPN transistor', 'PNP transistor', 'rectifier diode', 'silicon diode', 'microcontroller IC', 'microprocessor chip', 'analog IC', 'digital IC', 'power management IC PMIC', 'RF IC', 'logic IC', 'memory IC', 'power semiconductor module', 'high voltage semiconductor', 'power rectifier module', 'thyristor module', 'silicon controlled rectifier SCR', 'triac', 'semiconductor components manufacturer', 'bulk semiconductor components', 'semiconductor components suppliers', 'semiconductor components distributors in Hong Kong', 'semiconductor components exporters', 'SiC MOSFET', 'GaN semiconductor devices', 'wide bandgap semiconductors', 'automotive grade semiconductor', 'AI chip components', 'power electronics semiconductor'],
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
