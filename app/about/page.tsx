
import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics HK - Best semiconductor components suppliers",
    description: "Your Reliable partner of electronic component Manufacturers such as Greenconn, JB Capacitors, Microtech and Wipin. We are Connector & cable harnessing solutions.",
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
