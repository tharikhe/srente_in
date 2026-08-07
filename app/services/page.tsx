import ServicesClient from './ServicesClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Services & Operations | Serente Electronics Pvt. Ltd.",
    description: "End-to-end Electronics Manufacturing Services (EMS), Engineering Services, PCB Design, and Lifecycle Management. We deliver products, not just paper proposals.",
    keywords: ['EMS', 'Electronics Manufacturing Services', 'Design For Manufacturing', 'OEM Services', 'Supply Chain Cost Optimization'],
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
