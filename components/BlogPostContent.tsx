'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import { BlogPost } from '@/data/blog';

interface BlogPostContentProps {
    post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-brand-teal/90 z-10 mix-blend-multiply"></div>
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20"></div>

                <div className="absolute bottom-0 left-0 w-full z-30 pb-12 pt-20">
                    <div className="container mx-auto px-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-brand-gold" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-brand-gold" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-brand-gold" />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 mt-12">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="prose prose-lg prose-headings:text-brand-teal prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-img:my-8 prose-li:marker:text-brand-teal prose-strong:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed max-w-none [&_.blog-banner-image]:w-full [&_.blog-banner-image]:max-w-2xl [&_.blog-banner-image]:mx-auto [&_.blog-banner-image]:rounded-xl [&_.blog-banner-image]:shadow-md [&_.blog-banner-image]:mb-8 [&_.blog-banner-image]:border [&_.blog-banner-image]:border-gray-100 [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-blue-400 [&_a:hover]:text-blue-800 [&_a:hover]:decoration-blue-600 [&_a]:transition-colors [&_a]:duration-200 [&_ul]:space-y-2 [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-xl [&_h3]:font-bold"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA Section */}
                    <div className="mt-12 bg-gradient-to-br from-brand-teal/5 to-brand-gold/5 rounded-2xl p-8 border border-brand-teal/10">
                        <h3 className="text-xl font-bold text-brand-teal mb-3">Looking for Quality Components?</h3>
                        <p className="text-gray-600 mb-5 leading-relaxed">
                            Serente Electronics HK LTD is your trusted partner for semiconductor components, connectors, resistors, displays, and more. Get in touch with us for competitive pricing and fast delivery.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center px-6 py-3 bg-brand-teal text-white rounded-lg font-semibold hover:bg-brand-teal/90 transition-colors shadow-md hover:shadow-lg"
                            >
                                Browse Products
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 bg-white text-brand-teal rounded-lg font-semibold border-2 border-brand-teal hover:bg-brand-teal hover:text-white transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
                        <div className="text-gray-500 text-sm">
                            Share this article:
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-brand-teal hover:text-white transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
