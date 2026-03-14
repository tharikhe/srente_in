
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics HK - Premium Electronic Component Distributor",
    description: "We are Your Industrial & electronic systems solutions. Honoured Partner of semiconductor companies in Hong Kong. Trusted Partner of YM Tech, Hongda & Romtronic .",
    keywords: ['semiconductor distributors hong kong address', 'semiconductor distributors hong kong contact number', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'serente electronics hong kong', 'industrial & electronic systems solutions', 'semiconductor companies in hong kong', 'electronic component distributor Hong Kong', 'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers', 'OEM & ODM', 'Resistor and Condenser', 'YM Tech', 'Hongda', 'Romtronic', 'hong kong semiconductor distributor', 'semiconductor distributor', 'semiconductor distributors', 'semiconductor distribution companies hong kong', 'semiconductor distributors in hong kong', 'electronic components distributors in hong kong', 'electronic components supply company', 'electronic components distribution', 'semiconductor products distribution', 'authorized semiconductor distributor', 'connector & cable harnessing solutions', 'semiconductor components', 'semiconductor devices'],
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
