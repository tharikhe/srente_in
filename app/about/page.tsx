
import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Serente Electronics Pvt. Ltd. | EMS & Component Solutions",
    description: "Serente Electronics Pvt. Ltd. is a technology-driven Electronics Manufacturing Services (EMS) and global electronic component solutions company delivering end-to-end manufacturing, engineering, and supply chain solutions.",
    keywords: ['serente electronics pvt ltd', 'serente electronics', 'electronics manufacturing services', 'EMS provider', 'best semiconductor components suppliers', 'connector & cable harnessing solutions', 'industrial & electronic systems solutions', 'authorized semiconductor distributor', 'electronic component distributor', 'OEM & ODM', 'Resistor and Condenser', 'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers', 'Firstohm', 'Octea', 'GL Fiber', 'VITEK', 'Sonytek', 'Kingtronics', 'Palm Technology', 'Taimates', 'Isocom', 'Greenconn', 'JB Capacitors', 'Disen', 'Hongda', 'Microtech', 'Romtronic', 'Smico', 'Wipin', 'Yeebo', 'YM Tech', 'semiconductor distributor', 'semiconductor distributors', 'OEM semiconductor distributor', 'industrial semiconductor supplier', 'semiconductor components supplier', 'best industrial semiconductor suppliers', 'best electronic components distributors', 'electronic components supply company', 'custom electronics solutions provider', 'electronic components distribution', 'semiconductor products distribution', 'integrated circuits', 'optocoupler transistor', 'semiconductor discrete parts', 'MOSFETs', 'IGBTs', 'diodes', 'transistors', 'passive components', 'capacitors', 'resistors', 'inductors', 'LCD displays', 'OLED displays', 'touch panels', 'semiconductor components', 'semiconductor devices', 'semiconductor manufacturing'],
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
