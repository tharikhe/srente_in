
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Serente Electronics",
    description: "Get in touch with Serente Electronics Pvt. Ltd. Your trusted partner for industrial & electronic systems solutions, EMS, and electronic component sourcing.",
    keywords: ['semiconductor distributors hong kong address', 'semiconductor distributors hong kong contact number', 'semiconductor distributors hong kong', 'top semiconductor distributors hong kong', 'serente electronics hong kong', 'industrial & electronic systems solutions', 'semiconductor companies in hong kong', 'electronic component distributor Hong Kong', 'electronic components supplier', 'electronics component supplier', 'electronics parts suppliers', 'OEM & ODM', 'Resistor and Condenser', 'YM Tech', 'Hongda', 'Romtronic', 'hong kong semiconductor distributor', 'semiconductor distributor', 'semiconductor distributors', 'semiconductor distribution companies hong kong', 'semiconductor distributors in hong kong', 'electronic components distributors in hong kong', 'electronic components supply company', 'electronic components distribution', 'semiconductor products distribution', 'authorized semiconductor distributor', 'connector & cable harnessing solutions', 'semiconductor components', 'semiconductor devices'],
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
