'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-glow-teal transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {post.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            <span>{post.author}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center text-brand-teal font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 mt-auto">
                        Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
