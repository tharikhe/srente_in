import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Quote Request Cart | Serente Electronics",
    description: "Review your quote request cart. Add electronic components and submit your request for pricing and availability.",
    alternates: {
        canonical: '/cart',
    },
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
