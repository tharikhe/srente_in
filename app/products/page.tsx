import { Suspense } from 'react';
import ProductTable from '@/components/ProductTable';

export default function ProductsPage() {
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
