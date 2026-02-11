import { categories } from '@/data/products';

function slugify(value: string): string {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const categorySlugMap = new Map(categories.map((category) => [slugify(category), category]));

export function categoryToSlug(category: string): string {
    return slugify(category);
}

export function slugToCategory(slug: string): string | undefined {
    return categorySlugMap.get(slug.toLowerCase());
}

export function getCategoryPath(category: string): string {
    if (!category || category === 'All') return '/products';

    const matchedCategory = categories.find(
        (candidate) => candidate.toLowerCase() === category.toLowerCase()
    );

    if (!matchedCategory) return '/products';

    return `/products/category/${categoryToSlug(matchedCategory)}`;
}
