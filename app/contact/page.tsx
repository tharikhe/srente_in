
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Serente Electronics HK | Semiconductor Distributors Hong Kong Address & Contact",
    description: "Contact Serente Electronics, your trusted semiconductor distributors in Hong Kong. Get semiconductor distributors Hong Kong address, contact number, and quotes. Industrial & electronic systems solutions, OEM & ODM semiconductor distributor. Partner of YM Tech, Hongda & Romtronic.",
    keywords: ['semiconductor distributors hong kong address', 'semiconductor distributors hong kong contact number', 'serente electronics hong kong', 'industrial & electronic systems solutions', 'semiconductor companies in hong kong', 'YM Tech', 'Hongda', 'Romtronic'],
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
