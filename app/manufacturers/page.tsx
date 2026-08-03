
import ManufacturersClient from './ManufacturersClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics - Industrial Electronic Component Suppliers & Partners",
    description: "Your trusted partner for Authorized semiconductor distribution & EMS. Browse our line card of OEM & ODM partners, resistors, MOSFETs, IGBTs, diodes, transistors and more.",
    keywords: ['Firstohm', 'Octea', 'GL Fiber', 'VITEK', 'Sonytek', 'Kingtronics', 'Palm Technology', 'Taimates', 'Isocom', 'Greenconn', 'JB Capacitors', 'Disen', 'Hongda', 'Microtech', 'Romtronic', 'Smico', 'Wipin', 'Yeebo', 'YM Tech', 'OEM & ODM', 'authorized semiconductor distributor', 'industrial semiconductor supplier', 'electronic component distributor', 'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers', 'Resistor and Condenser', 'semiconductor distributor', 'semiconductor distributors', 'OEM semiconductor distributor', 'best semiconductor components suppliers', 'best industrial semiconductor suppliers', 'best electronic components distributors', 'electronic components distribution', 'semiconductor products distribution', 'connector & cable harnessing solutions', 'integrated circuits', 'MOSFETs', 'IGBTs', 'diodes', 'transistors', 'passive components', 'semiconductor components', 'semiconductor devices', 'semiconductor components suppliers', 'semiconductor components manufacturers', 'semiconductor components exporters'],
    alternates: {
        canonical: '/manufacturers',
    },
};

export default function ManufacturersPage() {
    return <ManufacturersClient />;
}
