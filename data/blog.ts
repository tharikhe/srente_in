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
        title: 'The Future of Semiconductor Technology in 2025',
        slug: 'future-of-semiconductors-2025',
        excerpt: 'Explore the emerging trends in semiconductor technology, from AI-driven chip design to quantum computing advancements that are reshaping the industry.',
        content: `
            <p>The semiconductor industry is on the cusp of a major transformation as we approach 2025. With the rapid adoption of Artificial Intelligence (AI) and Machine Learning (ML), chip manufacturers are pushing the boundaries of performance and efficiency.</p>
            
            <h3>AI-Driven Chip Design</h3>
            <p>One of the most significant trends is the use of AI in the chip design process itself. Companies are leveraging generative AI to optimize layouts, reduce power consumption, and accelerate time-to-market. This shift allows for more complex architectures that were previously impossible to design manually.</p>
            
            <h3>The Rise of Silicon Photonics</h3>
            <p>As data centers demand higher bandwidth and lower latency, silicon photonics is emerging as a key technology. By using light instead of electricity to transfer data between chips, we can achieve unprecedented speeds while significantly reducing energy usage.</p>
            
            <h3>Quantum Computing on the Horizon</h3>
            <p>While still in its early stages, quantum computing is making steady progress. Semiconductor companies are investing heavily in developing the specialized chips required for quantum processors, which promise to solve complex problems in seconds that would take classical computers millennia.</p>
            
            <p>At Serente Electronics, we are committed to staying ahead of these trends and providing our customers with the latest and most advanced components to power their innovations.</p>
        `,
        date: 'October 15, 2024',
        author: 'Dr. Alan Chen',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        category: 'Industry Trends'
    },
    {
        id: '2',
        title: 'Optimizing Supply Chains for Electronic Components',
        slug: 'optimizing-supply-chains-electronics',
        excerpt: 'Learn strategies for building resilient supply chains in the electronics sector, ensuring steady availability of critical components even during global disruptions.',
        content: `
            <p>In today's interconnected world, a robust supply chain is essential for electronics manufacturers. Recent global events have highlighted the vulnerabilities in traditional supply chain models, prompting a shift towards more resilient and agile strategies.</p>
            
            <h3>Diversification of Suppliers</h3>
            <p>Relying on a single source for critical components is a risky strategy. By diversifying suppliers across different geographic regions, companies can mitigate the impact of localized disruptions, such as natural disasters or geopolitical tensions.</p>
            
            <h3>Just-in-Time vs. Just-in-Case</h3>
            <p>The "Just-in-Time" (JIT) inventory model, while efficient, has shown its limitations during shortages. Many companies are now adopting a "Just-in-Case" approach, maintaining strategic buffers of essential components to ensure continuity of production.</p>
            
            <h3>Digitalization and Visibility</h3>
            <p>Real-time visibility into the supply chain is crucial. Advanced tracking technologies and data analytics allow companies to monitor inventory levels, predict potential bottlenecks, and make informed decisions proactively.</p>
            
            <p>Serente Electronics leverages a global network of trusted partners and advanced logistics solutions to ensure that our customers receive their components on time, every time.</p>
        `,
        date: 'November 2, 2024',
        author: 'Sarah Jenkins',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        category: 'Supply Chain'
    },
    {
        id: '3',
        title: 'Understanding MLCC Capacitors: A Comprehensive Guide',
        slug: 'understanding-mlcc-capacitors-guide',
        excerpt: 'A deep dive into Multi-Layer Ceramic Capacitors (MLCCs), their construction, applications, and why they are the workhorse of modern electronics.',
        content: `
            <p>Multi-Layer Ceramic Capacitors (MLCCs) are ubiquitous in modern electronics, found in everything from smartphones to electric vehicles. Despite their small size, they play a critical role in circuit stability and performance.</p>
            
            <h3>What is an MLCC?</h3>
            <p>An MLCC consists of alternating layers of ceramic dielectric material and metal electrodes. This layered structure allows for a high capacitance value in a compact package, making them ideal for high-density circuit boards.</p>
            
            <h3>Key Applications</h3>
            <ul>
                <li><strong>Decoupling:</strong> Smoothing out voltage fluctuations in power supply lines.</li>
                <li><strong>Filtering:</strong> Removing unwanted noise from signals.</li>
                <li><strong>Timing:</strong> Controlling the timing of signals in oscillation circuits.</li>
            </ul>
            
            <h3>Choosing the Right MLCC</h3>
            <p>When selecting an MLCC, engineers must consider factors such as capacitance, voltage rating, temperature coefficient, and package size. Understanding these parameters is essential for ensuring the reliability and longevity of the final product.</p>
            
            <p>Serente Electronics offers a vast inventory of MLCCs from top manufacturers, catering to a wide range of applications and specifications.</p>
        `,
        date: 'November 20, 2024',
        author: 'Michael Ross',
        image: 'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=2070&auto=format&fit=crop',
        category: 'Technical Guides'
    },
    {
        id: '4',
        title: 'The Impact of 5G on IoT Device Development',
        slug: 'impact-of-5g-on-iot',
        excerpt: 'How 5G networks are unlocking new possibilities for the Internet of Things, enabling massive connectivity and ultra-low latency applications.',
        content: `
            <p>The rollout of 5G networks is a game-changer for the Internet of Things (IoT). With its high speed, low latency, and ability to support a massive number of devices, 5G is enabling a new generation of smart applications.</p>
            
            <h3>Massive Machine Type Communications (mMTC)</h3>
            <p>5G is designed to support up to a million devices per square kilometer. This density is crucial for smart cities, industrial automation, and large-scale sensor networks where thousands of devices need to communicate simultaneously.</p>
            
            <h3>Ultra-Reliable Low Latency Communications (URLLC)</h3>
            <p>For critical applications like autonomous driving and remote surgery, latency is a matter of life and death. 5G's URLLC capabilities ensure that data is transmitted with millisecond precision, enabling real-time control and response.</p>
            
            <h3>Energy Efficiency</h3>
            <p>New 5G standards also focus on energy efficiency, allowing IoT devices to operate for years on a single battery. This is vital for remote sensors and wearables that are difficult to service frequently.</p>
            
            <p>Explore our range of 5G-ready components and IoT modules at Serente Electronics to build the connected devices of tomorrow.</p>
        `,
        date: 'December 1, 2024',
        author: 'Elena Rodriguez',
        image: 'https://images.unsplash.com/photo-1614064641938-3e821efd8536?q=80&w=2070&auto=format&fit=crop',
        category: 'Connectivity'
    }
];

export function getAllPosts(): BlogPost[] {
    return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
