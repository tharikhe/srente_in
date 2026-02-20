import { MetadataRoute } from 'next';
import { products, categories } from '@/data/products';
import { getAllPosts } from '@/data/blog';
import { manufacturers } from '@/data/manufacturers';
import { categoryToSlug } from '@/lib/category-url';

export const dynamic = 'force-static';

// Helper function to create URL-safe slug from part number
function createSlug(partNumber: string): string {
    return partNumber
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.serentehk.com';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/manufacturers`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/bom`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/events`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/popular-parts`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/quality-control`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cart`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Product category pages
    const categoryPages: MetadataRoute.Sitemap = categories
        .filter((cat) => cat !== 'All')
        .map((category) => ({
            url: `${baseUrl}/products/category/${categoryToSlug(category)}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        }));

    // Individual blog post pages
    const blogPosts = getAllPosts();
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'daily' as const,
        priority: 0.7,
    }));

    // Individual manufacturer pages
    const manufacturerPages: MetadataRoute.Sitemap = manufacturers.map((manufacturer) => ({
        url: `${baseUrl}/manufacturers/${manufacturer.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic product pages
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${createSlug(product.partNumber)}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.6,
    }));

    // Manufacturer product search pages (brand-filtered product views)
    const manufacturerProductPages: MetadataRoute.Sitemap = manufacturers.map((manufacturer) => ({
        url: `${baseUrl}/products?search=${encodeURIComponent(manufacturer.name)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.5,
    }));

    return [
        ...staticPages,
        ...categoryPages,
        ...blogPages,
        ...manufacturerPages,
        ...productPages,
        ...manufacturerProductPages,
    ];
}
