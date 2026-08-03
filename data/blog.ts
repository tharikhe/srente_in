export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Electronic Components',
        slug: 'future-of-electronic-components',
        excerpt: 'Discover the latest trends and innovations shaping the future of industrial electronic components and manufacturing.',
        content: `
            <h2>Embracing the Future</h2>
            <p>The electronics manufacturing industry is undergoing a massive transformation. With the rise of IoT, AI, and smart automation, the demand for highly reliable and efficient electronic components has never been greater.</p>
            <p>In this post, we explore how next-generation semiconductors and advanced materials are paving the way for smaller, faster, and more energy-efficient devices.</p>
            <h3>Key Trends:</h3>
            <ul>
                <li>Miniaturization of passive components</li>
                <li>Increased demand for high-temperature and high-voltage tolerances</li>
                <li>Sustainable manufacturing processes</li>
            </ul>
        `,
        date: 'August 10, 2026',
        author: 'Serente Engineering Team',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
        category: 'Industry Trends'
    },
    {
        id: '2',
        title: 'Understanding Supply Chain Resilience',
        slug: 'understanding-supply-chain-resilience',
        excerpt: 'How global component distributors are navigating shortages and building robust supply chains for the future.',
        content: `
            <h2>Building a Robust Supply Chain</h2>
            <p>Global supply chain disruptions have taught the electronics industry a valuable lesson about resilience and strategic sourcing.</p>
            <p>At Serente Electronics, we are leveraging our global network to ensure that our clients have access to critical components even during market shortages.</p>
            <h3>Our Strategy:</h3>
            <ul>
                <li>Diversified global sourcing</li>
                <li>Predictive inventory management</li>
                <li>Strong manufacturer partnerships</li>
            </ul>
        `,
        date: 'July 22, 2026',
        author: 'Serente Logistics',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
        category: 'Supply Chain'
    },
    {
        id: '3',
        title: 'Top 5 Connectors for Aerospace Applications',
        slug: 'top-5-connectors-for-aerospace',
        excerpt: 'A deep dive into the most reliable and high-performance connectors used in the aerospace and defense sectors.',
        content: `
            <h2>Reliability Where It Matters Most</h2>
            <p>Aerospace applications demand the highest level of reliability. Connectors must withstand extreme temperatures, vibrations, and pressure changes.</p>
            <p>We review the top 5 connectors that meet strict MIL-SPEC requirements and provide unmatched durability in the skies.</p>
            <p>Whether you need circular connectors or high-speed data transmission interfaces, selecting the right component is critical for mission success.</p>
        `,
        date: 'June 05, 2026',
        author: 'Serente Electronics',
        image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop',
        category: 'Product Spotlight'
    }
];
