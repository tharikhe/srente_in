import { getPostBySlug, getAllPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import BlogPostContent from '@/components/BlogPostContent';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostContent post={post} />;
}
