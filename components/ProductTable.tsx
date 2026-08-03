'use client';

import { useState, useEffect } from 'react';
import { products as staticProducts, categories as staticCategories, searchProducts, Product } from '@/data/products';
import { Search, FileText, ShoppingCart, Filter, ChevronLeft, Check, Package, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { getCategoryImage } from '@/lib/product-images';
import { getCategoryPath, slugToCategory } from '@/lib/category-url';
import Image from 'next/image';

export default function ProductTable() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    const categorySlugFromPath = pathname?.startsWith('/products/category/')
        ? pathname.replace('/products/category/', '').split('/')[0]
        : null;
    const categoryFromPath = categorySlugFromPath ? slugToCategory(decodeURIComponent(categorySlugFromPath)) : null;

    // Initialize state
    const [allProducts, setAllProducts] = useState<Product[]>(staticProducts);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(searchParam || '');
    const [selectedCategory, setSelectedCategory] = useState(categoryFromPath || categoryParam || 'All');
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedRow, setExpandedRow] = useState<string | null>(null);
    const itemsPerPage = 20;
    const { addToCart } = useCart();
    const [addedItems, setAddedItems] = useState<string[]>([]);

    // Live data categories (derived from merged products)
    const activeCategories = ['All', ...Array.from(new Set(allProducts.map(p => p.category))).sort()];

    // Fetch live data
    useEffect(() => {
        const fetchStock = async () => {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();

                if (data.success && Array.isArray(data.products)) {
                    // Merge logic:
                    // 1. Map existing products to update stock/desc if found in live data
                    // 2. Add new products from live data if not in existing

                    const liveDataMap = new Map<string, Product>(
                        (data.products as Product[]).map((p) => [p.partNumber.toLowerCase(), p])
                    );

                    const mergedProducts = staticProducts.map(localProd => {
                        const liveProd = liveDataMap.get(localProd.partNumber.toLowerCase());
                        if (liveProd) {
                            return {
                                ...localProd,
                                inStock: liveProd.inStock,
                                description: liveProd.description || localProd.description, // Prefer live description if present
                                // manufacturer: liveProd.manufacturer || localProd.manufacturer // Use local manufacturer as sheet might lack it
                            };
                        }
                        return localProd;
                    });

                    // Find new products in live data that weren't in static
                    const localMpns = new Set(staticProducts.map(p => p.partNumber.toLowerCase()));
                    const newProducts = (data.products as Product[]).filter((p) => !localMpns.has(p.partNumber.toLowerCase()));

                    setAllProducts([...mergedProducts, ...newProducts]);
                }
            } catch (error) {
                console.error('Failed to update stock data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStock();
    }, []);

    // Sync state with URL params when they change
    useEffect(() => {
        if (categoryFromPath) {
            setSelectedCategory(categoryFromPath);
        } else if (categoryParam) {
            setSelectedCategory(categoryParam);
        } else {
            setSelectedCategory('All');
        }
    }, [categoryFromPath, categoryParam]);

    // Keep legacy ?category= links working by converting them to /products/category/<slug>
    useEffect(() => {
        if (!categoryParam || categoryFromPath) return;

        const params = new URLSearchParams(searchParams.toString());
        params.delete('category');
        const query = params.toString();
        const categoryPath = getCategoryPath(categoryParam);
        router.replace(query ? `${categoryPath}?${query}` : categoryPath);
    }, [categoryFromPath, categoryParam, router, searchParams]);

    // Sync search query with URL param
    useEffect(() => {
        if (searchParam) {
            setSearchQuery(searchParam);
        } else {
            setSearchQuery('');
        }
    }, [searchParam]);

    // Handle category change
    const handleCategoryChange = (newCategory: string) => {
        setSelectedCategory(newCategory);
        setCurrentPage(1);

        const params = new URLSearchParams(searchParams.toString());
        params.delete('category');
        const query = params.toString();

        if (newCategory === 'All') {
            router.replace(query ? `/products?${query}` : '/products');
            return;
        }

        const categoryPath = getCategoryPath(newCategory);
        router.replace(query ? `${categoryPath}?${query}` : categoryPath);
    };

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        setAddedItems(prev => [...prev, product.partNumber]);
        setTimeout(() => {
            setAddedItems(prev => prev.filter(id => id !== product.partNumber));
        }, 2000);
    };

    // Filter products based on search and category
    const filteredProducts = (() => {
        let result = allProducts;

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.partNumber.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }

        return result;
    })();

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    const toggleRowExpand = (partNumber: string) => {
        setExpandedRow(expandedRow === partNumber ? null : partNumber);
    };

    return (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-medium overflow-hidden border border-brand-border">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-teal to-brand-teal-light text-white p-4 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center relative">
                        <Package className="w-5 h-5 sm:w-7 sm:h-7" />
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl sm:rounded-2xl">
                                <RefreshCw className="w-4 h-4 sm:w-6 sm:h-6 animate-spin text-white" />
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg sm:text-2xl font-bold mb-0.5 sm:mb-1">Product Catalog</h2>
                            {isLoading ? (
                                <span className="text-xs bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full animate-pulse border border-brand-gold/30">
                                    Updating Stocks...
                                </span>
                            ) : (
                                <span className="text-xs bg-emerald-500/20 text-emerald-100 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                    Live
                                </span>
                            )}
                        </div>
                        <p className="text-brand-gold font-medium text-xs sm:text-base">Browse our extensive inventory of electronic components</p>
                    </div>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="p-4 sm:p-6 bg-brand-surface border-b border-brand-border">
                <div className="flex flex-col gap-3 sm:gap-4">
                    {/* Search */}
                    <form onSubmit={handleSearch} className="flex">
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-brand-text-light" />
                            <input
                                type="text"
                                placeholder="Search by Part Number..."
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3.5 border-2 border-brand-border rounded-l-lg sm:rounded-l-xl focus:outline-none focus:border-brand-teal bg-white transition-colors text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 sm:px-8 py-2.5 sm:py-3.5 bg-brand-gold text-gray-900 font-semibold rounded-r-lg sm:rounded-r-xl hover:bg-brand-gold-dark transition-colors flex items-center gap-2"
                        >
                            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="hidden sm:inline">Search</span>
                        </button>
                    </form>

                    {/* Category Filter */}
                    <div className="flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border-2 border-brand-border w-full sm:w-auto">
                        <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-brand-text-muted" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                            className="bg-transparent focus:outline-none text-brand-text font-medium cursor-pointer flex-grow text-sm"
                        >
                            <option value="All">All Categories</option>
                            {activeCategories.filter(cat => cat !== 'All').map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results count */}
                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-brand-text-muted">
                    <span className="font-semibold text-brand-text">{filteredProducts.length}</span>
                    <span>products found</span>
                    {searchQuery && <span>for &quot;<span className="text-brand-teal">{searchQuery}</span>&quot;</span>}
                    {selectedCategory !== 'All' && <span className="hidden sm:inline">in <span className="text-brand-gold font-medium">{selectedCategory}</span></span>}
                </div>
            </div>

            {/* Desktop Table - Hidden on mobile */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-brand-teal-dark text-white">
                        <tr>
                            <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold tracking-wide">Image</th>
                            <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold tracking-wide">Part Number</th>
                            <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold tracking-wide">Description</th>
                            <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold tracking-wide">Manufacturer</th>
                            <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold tracking-wide">Category</th>
                            <th className="px-4 lg:px-6 py-4 text-center text-sm font-semibold tracking-wide">Stock</th>
                            <th className="px-4 lg:px-6 py-4 text-center text-sm font-semibold tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border">
                        {paginatedProducts.map((product, index) => (
                            <tr
                                key={`${product.partNumber}-${index}`}
                                className="hover:bg-brand-surface transition-colors duration-150 group"
                            >
                                <td className="px-4 lg:px-6 py-4">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-brand-border flex items-center justify-center overflow-hidden relative">
                                        <Image
                                            src={product.image || getCategoryImage(product.category)}
                                            alt={product.partNumber}
                                            fill
                                            sizes="48px"
                                            loading="lazy"
                                            className="object-contain p-1"
                                            onError={(e) => {
                                                // Fallback if category image is missing - hide image and show initial?
                                                // For now, next/image handles errors gracefully in newer versions, but we can set a state if needed.
                                                // Simpler: Just ensure the user uploads the files.
                                                const target = e.target as HTMLImageElement;
                                                target.style.opacity = '0.3'; // Placeholder effect
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <span className="font-mono text-sm font-bold text-brand-teal group-hover:text-brand-gold transition-colors">
                                        {product.partNumber}
                                    </span>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <span className="text-sm text-brand-text line-clamp-2">{product.description}</span>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <span className="text-sm text-brand-text-muted">{product.manufacturer || '-'}</span>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <span className="inline-flex items-center px-2 lg:px-3 py-1 lg:py-1.5 text-xs font-semibold bg-brand-gold/10 text-brand-gold-dark rounded-full">
                                        {product.category}
                                    </span>
                                </td>
                                <td className="px-4 lg:px-6 py-4 text-center">
                                    <span className={`inline-flex items-center px-2 lg:px-3 py-1 lg:py-1.5 text-xs font-semibold rounded-full ${product.inStock
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {product.inStock ? 'In Stock' : 'Out'}
                                    </span>
                                </td>
                                <td className="px-4 lg:px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className={`p-2 rounded-lg transition-all duration-200 ${addedItems.includes(product.partNumber)
                                                ? 'bg-emerald-500 text-white shadow-md scale-105'
                                                : 'bg-[#2DAA9E] text-white hover:bg-[#258B82] hover:shadow-lg hover:scale-105'
                                                }`}
                                            title="Add to Quote"
                                        >
                                            {addedItems.includes(product.partNumber) ? (
                                                <Check className="w-5 h-5" />
                                            ) : (
                                                <ShoppingCart className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View - Shown only on mobile */}
            <div className="md:hidden divide-y divide-brand-border">
                {paginatedProducts.map((product, index) => (
                    <div
                        key={`mobile-${product.partNumber}-${index}`}
                        className="p-4 hover:bg-brand-surface transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            {/* Product Image */}
                            <div className="w-14 h-14 rounded-lg bg-white border border-brand-border flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                                <Image
                                    src={product.image || getCategoryImage(product.category)}
                                    alt={product.partNumber}
                                    fill
                                    sizes="56px"
                                    loading="lazy"
                                    className="object-contain p-1"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-grow min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="font-mono text-sm font-bold text-brand-teal truncate">
                                            {product.partNumber}
                                        </p>
                                        <p className="text-xs text-brand-text-muted mt-0.5 line-clamp-2">
                                            {product.description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => toggleRowExpand(product.partNumber)}
                                        className="p-1 text-brand-text-muted flex-shrink-0"
                                    >
                                        {expandedRow === product.partNumber ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                {/* Tags Row */}
                                <div className="flex items-center gap-2 mt-2 flex-wrap">
                                    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-brand-gold/10 text-brand-gold-dark rounded-full">
                                        {product.category}
                                    </span>
                                    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${product.inStock
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {product.inStock ? 'In Stock' : 'Out'}
                                    </span>
                                </div>

                                {/* Expanded Details */}
                                {expandedRow === product.partNumber && (
                                    <div className="mt-3 pt-3 border-t border-brand-border space-y-2">
                                        {product.manufacturer && (
                                            <p className="text-xs text-brand-text-muted">
                                                <span className="font-medium">Manufacturer:</span> {product.manufacturer}
                                            </p>
                                        )}
                                        <p className="text-xs text-brand-text">
                                            {product.description}
                                        </p>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex items-center gap-2 mt-3">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${addedItems.includes(product.partNumber)
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-brand-gold text-gray-900 hover:bg-brand-gold-dark'
                                            }`}
                                    >
                                        {addedItems.includes(product.partNumber) ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Added
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart className="w-4 h-4" />
                                                Add to Cart
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {paginatedProducts.length === 0 && (
                <div className="p-8 sm:p-16 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Search className="w-8 h-8 sm:w-10 sm:h-10 text-brand-text-light" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-2">No products found</h3>
                    <p className="text-brand-text-muted max-w-md mx-auto text-sm sm:text-base">Try adjusting your search terms or filter criteria to find what you're looking for</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="p-4 sm:p-6 bg-brand-surface border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-brand-text-muted text-center sm:text-left">
                        Showing <span className="font-semibold text-brand-text">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                        <span className="font-semibold text-brand-text">{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</span> of{' '}
                        <span className="font-semibold text-brand-text">{filteredProducts.length}</span>
                    </p>

                    <div className="flex items-center gap-1 sm:gap-2">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-2 sm:p-2.5 border-2 border-brand-border rounded-lg hover:bg-brand-teal hover:text-white hover:border-brand-teal disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-brand-text transition-all duration-200"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 2) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 1) {
                                    pageNum = totalPages - 2 + i;
                                } else {
                                    pageNum = currentPage - 1 + i;
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium text-sm transition-all duration-200 ${currentPage === pageNum
                                            ? 'bg-brand-teal text-white shadow-md'
                                            : 'text-brand-text hover:bg-brand-surface'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 sm:p-2.5 border-2 border-brand-border rounded-lg hover:bg-brand-teal hover:text-white hover:border-brand-teal disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-brand-text transition-all duration-200"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
