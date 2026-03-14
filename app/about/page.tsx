
import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics HK - Best semiconductor components suppliers",
    description: "Your Reliable partner of electronic component Manufacturers such as Greenconn, JB Capacitors, Microtech and Wipin. We are Connector & cable harnessing solutions.",
    keywords: ['serente electronics hong kong', 'serente electronics pvt ltd', 'serente electronics hk', 'best semiconductor components suppliers', 'connector & cable harnessing solutions', 'industrial & electronic systems solutions', 'authorized semiconductor distributor', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'electronic component distributor Hong Kong', 'OEM & ODM', 'Resistor and Condenser', 'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers', 'Firstohm', 'Octea', 'GL Fiber', 'VITEK', 'Sonytek', 'Kingtronics', 'Palm Technology', 'Taimates', 'Isocom', 'Greenconn', 'JB Capacitors', 'Disen', 'Hongda', 'Microtech', 'Romtronic', 'Smico', 'Wipin', 'Yeebo', 'YM Tech', 'semiconductor companies in hong kong', 'hong kong semiconductor distributor', 'semiconductor distributor', 'semiconductor distributors', 'semiconductor distribution companies hong kong', 'OEM semiconductor distributor', 'industrial semiconductor supplier', 'semiconductor components supplier', 'best industrial semiconductor suppliers', 'semiconductor distribution company hong kong', 'semiconductor distribution companies in hong kong', 'electronic components distributors in hong kong', 'best electronic components distributors', 'best electronic components distributors in hong kong', 'semiconductor distributors in hong kong', 'electronic components supply company', 'custom electronics solutions provider', 'electronic components distribution', 'semiconductor products distribution', 'integrated circuits', 'optocoupler transistor', 'semiconductor discrete parts', 'MOSFETs', 'IGBTs', 'diodes', 'transistors', 'passive components', 'capacitors', 'resistors', 'inductors', 'LCD displays', 'OLED displays', 'touch panels', 'semiconductor components', 'semiconductor devices', 'semiconductor manufacturing'],
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
