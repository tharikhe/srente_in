'use client';

import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex-1 py-3.5 px-6 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${added
                    ? 'bg-emerald-500 text-white'
                    : product.inStock
                        ? 'bg-brand-gold hover:bg-brand-gold-dark text-white shadow-glow-gold hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
        >
            {added ? (
                <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                </>
            ) : (
                <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Quote Request
                </>
            )}
        </button>
    );
}
