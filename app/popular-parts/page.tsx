
import PopularPartsClient from './PopularPartsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Popular Electronic Components | Semiconductor Components Wholesale - Serente Electronics HK",
    description: "Browse our most popular semiconductor components available for wholesale and bulk orders. Power MOSFETs, IGBT modules, integrated circuits, Schottky diodes, Zener diodes, capacitors, resistors, and more. Buy semiconductor components online from authorized distributor in Hong Kong.",
    keywords: ['semiconductor components wholesale', 'bulk semiconductor components', 'buy semiconductor components online', 'popular electronic components', 'power MOSFET', 'IGBT module', 'Schottky diode', 'semiconductor components price list', 'electronic components supplier', 'semiconductor components distributors in Hong Kong'],
    alternates: {
        canonical: '/popular-parts',
    },
};

export default function PopularPartsPage() {
    return <PopularPartsClient />;
}
