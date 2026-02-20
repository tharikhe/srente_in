
import QualityControlClient from './QualityControlClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Quality Assurance | Authorized Semiconductor Distributor - Serente Electronics HK",
    description: "ISO 9001:2015 certified quality assurance for semiconductor components and electronic parts. Rigorous inspection of integrated circuits, MOSFETs, IGBTs, diodes, and passive components. Zero counterfeit policy from authorized semiconductor distributor in Hong Kong.",
    keywords: ['authorized semiconductor distributor', 'semiconductor components', 'electronic components distribution', 'ISO 9001:2015', 'semiconductor devices', 'integrated circuits', 'quality assurance', 'semiconductor manufacturing'],
    alternates: {
        canonical: '/quality-control',
    },
};

export default function QualityControlPage() {
    return <QualityControlClient />;
}
