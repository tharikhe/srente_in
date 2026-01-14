
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics HK - Premium Electronic Component Distributor",
    description: "We are Your Industrial & electronic systems solutions. Honoured Partner of semiconductor companies in Hong Kong. Trusted Partner of YM Tech, Hongda & Romtronic",
};

export default function ContactPage() {
    return <ContactClient />;
}
