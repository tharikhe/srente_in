import BomUploader from '@/components/BomUploader';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "BOM Upload Tool | Electronics Parts Procurement - Serente Electronics HK",
    description: "Upload your Bill of Materials (BOM) for instant quotes on electronic components. BOM sourcing and electronics supply, electronics parts procurement company, OEM electronics sourcing solutions. Electronics vendor management services from top semiconductor distributors in Hong Kong.",
    keywords: ['BOM sourcing and electronics supply', 'electronics parts procurement company', 'OEM electronics sourcing solutions', 'electronics vendor management services', 'procurement and supply electronics solutions', 'electronic components supply company', 'semiconductor components price list', 'semiconductor distributors hong kong', 'electronic component distributor Hong Kong', 'electronics parts suppliers', 'OEM & ODM', 'electronic components supplier', 'electronics supply chain partner', 'global electronics sourcing services', 'custom electronics solutions provider', 'electronics procurement services', 'OEM semiconductor distributor', 'industrial electronics supplier', 'electronic components distribution', 'semiconductor products distribution', 'semiconductor components', 'semiconductor components supplier', 'semiconductor components wholesale', 'bulk semiconductor components', 'semiconductor components suppliers'],
    alternates: {
        canonical: '/bom',
    },
};

export default function BomPage() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-brand-teal">BOM Upload Tool</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Upload your Bill of Materials (Excel) to quickly check stock and pricing for multiple parts at once.
                </p>
            </div>
            <BomUploader />
        </div>
    );
}
