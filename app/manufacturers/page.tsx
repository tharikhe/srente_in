
import ManufacturersClient from './ManufacturersClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics Hong Kong - industrial semiconductor supplier",
    description: "Your trusted partner for Authorized semiconductor distributor. Browse our extensive inventory of OEM & ODM, resistors, MOSFETs, IGBTs, diodes, transistors and more.",
    keywords: ['Firstohm', 'Octea', 'GL Fiber', 'VITEK', 'Sonytek', 'Kingtronics', 'Palm Technology', 'Taimates', 'Isocom', 'Greenconn', 'JB Capacitors', 'Disen', 'Hongda', 'Microtech', 'Romtronic', 'Smico', 'Wipin', 'Yeebo', 'YM Tech', 'OEM & ODM', 'authorized semiconductor distributor', 'industrial semiconductor supplier', 'semiconductor distribution company hong kong', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'electronic component distributor Hong Kong', 'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers', 'Resistor and Condenser', 'semiconductor companies in hong kong', 'hong kong semiconductor distributor', 'semiconductor distributor', 'semiconductor distributors', 'semiconductor distribution companies hong kong', 'OEM semiconductor distributor', 'best semiconductor components suppliers', 'best industrial semiconductor suppliers', 'semiconductor distribution companies in hong kong', 'electronic components distributors in hong kong', 'best electronic components distributors', 'best electronic components distributors in hong kong', 'semiconductor distributors in hong kong', 'electronic components distribution', 'semiconductor products distribution', 'connector & cable harnessing solutions', 'integrated circuits', 'MOSFETs', 'IGBTs', 'diodes', 'transistors', 'passive components', 'semiconductor components', 'semiconductor devices', 'semiconductor components suppliers', 'semiconductor components manufacturers', 'semiconductor components exporters'],
    alternates: {
        canonical: '/manufacturers',
    },
};

export default function ManufacturersPage() {
    return <ManufacturersClient />;
}
