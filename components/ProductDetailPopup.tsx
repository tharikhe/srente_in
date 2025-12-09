'use client';

import React from 'react';
import { X, Check, Copy, MessageCircle, AlertCircle, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ProductDetailPopupProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToInquiry: (product: Product) => void;
}

export default function ProductDetailPopup({ product, isOpen, onClose, onAddToInquiry }: ProductDetailPopupProps) {
    if (!isOpen || !product) return null;

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md overflow-hidden flex flex-col max-h-[90vh] animate-scale-in">
                {/* Header */}
                <div className="bg-brand-teal p-4 flex items-start justify-between">
                    <div>
                        <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-medium mb-2 border border-white/10">
                            {product.category}
                        </div>
                        <h3 className="text-white font-bold text-lg leading-tight">{product.partNumber}</h3>
                        <p className="text-brand-teal-light text-sm mt-1">{product.manufacturer || 'Generic Manufacturer'}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/70 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-5 overflow-y-auto space-y-4">
                    {/* Status Badge */}
                    <div className={`p-3 rounded-lg border flex items-center gap-3 ${product.inStock
                            ? 'bg-green-50 border-green-100'
                            : 'bg-red-50 border-red-100'
                        }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${product.inStock ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                            }`}>
                            {product.inStock ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                        </div>
                        <div>
                            <p className={`font-semibold text-sm ${product.inStock ? 'text-green-800' : 'text-red-800'
                                }`}>
                                {product.inStock ? 'In Stock & Ready to Ship' : 'Currently Out of Stock'}
                            </p>
                            <p className="text-xs text-gray-500">
                                {product.inStock ? 'Ships within 24 hours' : 'Contact for lead time'}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                        <p className="text-gray-700 text-sm leading-relaxed border-l-2 border-brand-gold pl-3">
                            {product.description}
                        </p>
                    </div>

                    {/* Specs Mockup */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Specifications</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="text-gray-500 text-xs block">Category</span>
                                <span className="font-medium">{product.category}</span>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="text-gray-500 text-xs block">RoHS</span>
                                <span className="font-medium text-green-600">Compliant</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-gray-100 bg-gray-50 grid grid-cols-2 gap-3">
                    <Button
                        variant="outline"
                        className="w-full gap-2 border-brand-teal text-brand-teal hover:bg-brand-teal/5"
                        onClick={() => copyToClipboard(product.partNumber)}
                    >
                        <Copy className="w-4 h-4" />
                        Copy Part #
                    </Button>
                    <Button
                        className="w-full gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white shadow-md shadow-brand-gold/20"
                        onClick={() => {
                            onAddToInquiry(product);
                            onClose();
                        }}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Inquiry
                    </Button>
                </div>
            </div>
        </div>
    );
}
