
import ManufacturersClient from './ManufacturersClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Manufacturers | Serente Electronics HK - Authorized Semiconductor Distributor Partners",
    description: "Authorized semiconductor distributor partners: Firstohm, Octea, GL Fiber, VITEK, Sonytek, Kingtronics, Palm Technology, Taimates, Isocom, Greenconn, JB Capacitors, Disen, Hongda, Microtech, Romtronic, Smico, Wipin, Yeebo, YM Tech. OEM & ODM semiconductor distribution company in Hong Kong. MOSFETs, IGBTs, diodes, transistors, resistors and more.",
    keywords: ['Firstohm', 'Octea', 'GL Fiber', 'VITEK', 'Sonytek', 'Kingtronics', 'Palm Technology', 'Taimates', 'Isocom', 'Greenconn', 'JB Capacitors', 'Disen', 'Hongda', 'Microtech', 'Romtronic', 'Smico', 'Wipin', 'Yeebo', 'YM Tech', 'OEM & ODM', 'authorized semiconductor distributor', 'industrial semiconductor supplier', 'semiconductor distribution company hong kong'],
    alternates: {
        canonical: '/manufacturers',
    },
};

export default function ManufacturersPage() {
    return <ManufacturersClient />;
}
