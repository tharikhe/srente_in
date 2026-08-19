import { sanityFetch } from '@/sanity/lib/client';
import { blogPostBySlugQuery, blogPostSlugsQuery } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import BlogPostContent from '@/components/BlogPostContent';

export async function generateStaticParams() {
    const slugs = await sanityFetch<{ slug: string }[]>(blogPostSlugsQuery, undefined, []);
    return slugs.map((item) => ({
        slug: item.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await sanityFetch<any>(blogPostBySlugQuery, { slug }, null);

    if (!post) {
        notFound();
    }

    return <BlogPostContent post={post} />;
}
