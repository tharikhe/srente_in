import CartClient from './CartClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Quote Request Cart | Electronics Parts Suppliers - Serente Electronics HK",
    description: "Submit your quote request for electronic components from Serente Electronics, top semiconductor distributors in Hong Kong. Competitive semiconductor distributors Hong Kong price for resistors, condensers, ICs, and more. OEM & ODM electronic components supplier.",
    keywords: ['electronics parts suppliers', 'electronic components supplier', 'semiconductor distributors hong kong price', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'OEM & ODM', 'Resistor and Condenser', 'electronic component distributor Hong Kong', 'semiconductor distributor', 'semiconductor distributors', 'hong kong semiconductor distributor', 'semiconductor components supplier', 'electronic components supply company', 'electronics procurement services', 'semiconductor distributors in hong kong', 'semiconductor components', 'semiconductor devices', 'electronic components distribution', 'buy semiconductor components online', 'semiconductor components wholesale', 'semiconductor components price list', 'bulk semiconductor components'],
    alternates: {
        canonical: '/cart',
    },
};

export default function CartPage() {
    return <CartClient />;
}
