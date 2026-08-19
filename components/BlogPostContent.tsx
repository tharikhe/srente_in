'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';

interface SanityBlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    content: any[];
    date: string;
    author: string;
    image: any;
    category: string;
}

interface BlogPostContentProps {
    post: SanityBlogPost;
}

// Custom components for Portable Text rendering
const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) return null;
            return (
                <img
                    src={urlFor(value).width(800).url()}
                    alt={value.alt || 'Blog image'}
                    className="blog-banner-image w-full max-w-2xl mx-auto rounded-xl shadow-md mb-8 border border-gray-100"
                />
            );
        },
    },
    marks: {
        link: ({ children, value }: any) => {
            const href = value?.href || '';
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 underline underline-offset-2 decoration-yellow-400 hover:text-yellow-800 hover:decoration-yellow-600 transition-colors duration-200"
                >
                    {children}
                </a>
            );
        },
    },
};

export default function BlogPostContent({ post }: BlogPostContentProps) {
    const imageUrl = post.image
        ? urlFor(post.image).width(1200).height(600).url()
        : '';

    const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : '';

    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20"></div>

                <div className="absolute bottom-0 left-0 w-full z-30 pb-12 pt-20">
                    <div className="container mx-auto px-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 text-[#FFB800]" />
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#FFB800] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-[#FFB800]" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#FFB800]" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#FFB800]" />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 mt-12">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-headings:text-[#1A1A1A] prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-img:my-8 prose-li:marker:text-[#FFB800] prose-strong:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed max-w-none [&_ul]:space-y-2 [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-xl [&_h3]:font-bold">
                        <PortableText
                            value={post.content}
                            components={portableTextComponents}
                        />
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 bg-gradient-to-br from-[#FFB800]/10 to-gray-50 rounded-2xl p-8 border border-[#FFB800]/30">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Looking for Quality Components?</h3>
                        <p className="text-gray-600 mb-5 leading-relaxed">
                            Serente Electronics Pvt. Ltd. is your trusted partner for semiconductor components, connectors, resistors, displays, and more. Get in touch with us for competitive pricing and fast delivery.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 bg-[#1A1A1A] text-[#FFB800] rounded-lg font-bold border-2 border-[#1A1A1A] hover:bg-black transition-colors"
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
                            <button
                                onClick={async () => {
                                    const shareData = {
                                        title: post.title,
                                        text: post.excerpt,
                                        url: window.location.href,
                                    };
                                    try {
                                        if (navigator.share) {
                                            await navigator.share(shareData);
                                        } else {
                                            await navigator.clipboard.writeText(window.location.href);
                                            alert('Link copied to clipboard!');
                                        }
                                    } catch (err) {
                                        // User cancelled share or clipboard failed
                                        if ((err as Error).name !== 'AbortError') {
                                            await navigator.clipboard.writeText(window.location.href);
                                            alert('Link copied to clipboard!');
                                        }
                                    }
                                }}
                                className="p-2 rounded-full bg-gray-100 hover:bg-[#FFB800] hover:text-[#1A1A1A] transition-colors"
                            >
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
