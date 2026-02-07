
import { getAllPosts } from '@/data/blog';
import BlogCard from '@/components/BlogCard';
import { Newspaper } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Serente Electronics - Electronics supply chain partner Hong Kong",
    description: "We are a devoted partner of Sonytek and Palm Technology for Hong Kong semiconductor distributor. Browse our extensive inventory of ICs, capacitors, resistors etc.",
};

export default function BlogPage() {
    const posts = getAllPosts();
    // Latest blog posts fetched from data source

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="bg-brand-teal text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-teal/90"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                        <Newspaper className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Industry Insights & News
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Stay updated with the latest trends in electronics, supply chain strategies, and technical guides from Serente Electronics.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
