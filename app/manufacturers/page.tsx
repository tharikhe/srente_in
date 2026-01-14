
import ManufacturersClient from './ManufacturersClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics Hong Kong - industrial semiconductor supplier",
    description: "Your trusted partner for Authorized semiconductor distributor. Browse our extensive inventory of OEM & ODM, resistors, MOSFETs, IGBTs, diodes, transistors and more.",
};

export default function ManufacturersPage() {
    return <ManufacturersClient />;
}
