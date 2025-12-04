'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (partNumber: string) => void;
    updateQuantity: (partNumber: string, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('seretech_cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to parse cart data:', error);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('seretech_cart', JSON.stringify(items));
        }
    }, [items, isInitialized]);

    const addToCart = (product: Product) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.partNumber === product.partNumber);
            if (existingItem) {
                return currentItems.map(item =>
                    item.partNumber === product.partNumber
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (partNumber: string) => {
        setItems(currentItems => currentItems.filter(item => item.partNumber !== partNumber));
    };

    const updateQuantity = (partNumber: string, quantity: number) => {
        if (quantity < 1) return;
        setItems(currentItems =>
            currentItems.map(item =>
                item.partNumber === partNumber
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
