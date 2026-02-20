
import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Serente Electronics HK | Best Semiconductor Components Suppliers | Authorized Distributor",
    description: "Your reliable partner for electronic component distribution. Authorized distributor of Greenconn, JB Capacitors, Microtech, Wipin, Isocom, Sonytek, and more. Connector & cable harnessing solutions, industrial & electronic systems solutions provider in Hong Kong.",
    keywords: ['serente electronics hong kong', 'serente electronics pvt ltd', 'serente electronics hk', 'best semiconductor components suppliers', 'connector & cable harnessing solutions', 'industrial & electronic systems solutions', 'authorized semiconductor distributor', 'Greenconn', 'JB Capacitors', 'Microtech', 'Wipin', 'Isocom', 'Sonytek'],
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
