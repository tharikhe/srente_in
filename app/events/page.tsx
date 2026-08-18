
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics - Industry Events & Conferences",
    description: "Trusted distributor partners Such as Firstohm, Isocom and many more for BOM sourcing and electronics supply. Shop our extensive inventory here.",
    keywords: ['electronics supply chain partner', 'BOM sourcing and electronics supply', 'electronic components supplier', 'electronics parts suppliers', 'OEM & ODM', 'Firstohm', 'Isocom', 'semiconductor for EV', 'automotive semiconductor components', 'semiconductor distributor', 'semiconductor distributors', 'industrial semiconductor supplier', 'electronics procurement services', 'global electronics sourcing services', 'industrial electronics supplier', 'semiconductor devices', 'industrial semiconductor devices', 'semiconductor for solar inverter', 'semiconductor for telecom equipment', 'semiconductor for consumer electronics', 'semiconductor for IoT devices', 'SiC MOSFET', 'GaN semiconductor devices', 'wide bandgap semiconductors', 'automotive grade semiconductor', 'AI chip components', 'power electronics semiconductor'],
    alternates: {
        canonical: '/events',
    },
};

import EventsClient from './EventsClient';

export default function EventsPage() {
    return <EventsClient />;
}
