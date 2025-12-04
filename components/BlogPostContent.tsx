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
                        className="prose prose-lg prose-headings:text-brand-teal prose-a:text-brand-teal hover:prose-a:text-brand-gold prose-img:rounded-xl max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
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
