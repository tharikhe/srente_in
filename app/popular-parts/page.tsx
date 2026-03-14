
import PopularPartsClient from './PopularPartsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Popular Electronic Components | Semiconductor Components Wholesale - Serente Electronics HK",
    description: "Browse our most popular semiconductor components available for wholesale and bulk orders. Power MOSFETs, IGBT modules, integrated circuits, Schottky diodes, Zener diodes, capacitors, resistors, and more. Buy semiconductor components online from authorized distributor in Hong Kong.",
    keywords: ['semiconductor components wholesale', 'bulk semiconductor components', 'buy semiconductor components online', 'popular electronic components', 'power MOSFET', 'IGBT module', 'Schottky diode', 'semiconductor components price list', 'electronic components supplier', 'semiconductor components distributors in Hong Kong', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'electronic component distributor Hong Kong', 'electronics parts suppliers', 'OEM & ODM', 'Resistor and Condenser', 'semiconductor distributor', 'semiconductor distributors', 'hong kong semiconductor distributor', 'industrial semiconductor supplier', 'semiconductor components supplier', 'best semiconductor components suppliers', 'semiconductor distributors in hong kong', 'industrial electronics supplier', 'semiconductor components', 'semiconductor devices', 'power semiconductor devices', 'discrete semiconductor components', 'MOSFET transistor', 'NPN transistor', 'PNP transistor', 'Zener diode', 'rectifier diode', 'silicon diode', 'microcontroller IC', 'analog IC', 'digital IC', 'power management IC PMIC', 'integrated circuits', 'semiconductor components manufacturer', 'semiconductor components suppliers', 'semiconductor components exporters', 'SiC MOSFET', 'GaN semiconductor devices', 'power electronics semiconductor'],
    alternates: {
        canonical: '/popular-parts',
    },
};

export default function PopularPartsPage() {
    return <PopularPartsClient />;
}
