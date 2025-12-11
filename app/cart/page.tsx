'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { submitToGoogleSheets } from '@/lib/google-sheets';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Send, CheckCircle, AlertCircle, X, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, cartCount, clearCart } = useCart();
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const handleSubmitQuote = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const submissionData = {
                type: 'quote',
                customerInfo: formData,
                items: items.map(item => ({
                    partNumber: item.partNumber,
                    description: item.description,
                    category: item.category,
                    manufacturer: item.manufacturer,
                    quantity: item.quantity,
                })),
            };

            const result = await submitToGoogleSheets(submissionData);

            if (result.success) {
                setSubmitStatus('success');
                // Clear the cart after successful submission
                setTimeout(() => {
                    clearCart();
                    setShowForm(false);
                    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting quote:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (items.length === 0 && submitStatus !== 'success') {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="w-24 h-24 bg-brand-surface rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-12 h-12 text-brand-text-light" />
                </div>
                <h1 className="text-3xl font-bold text-brand-text mb-4">Your Quote Request is Empty</h1>
                <p className="text-brand-text-muted mb-8 max-w-md">
                    Looks like you haven't added any components to your quote request yet. Browse our catalog to find what you need.
                </p>
                <Link
                    href="/products"
                    className="px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-glow-gold flex items-center gap-2"
                >
                    Browse Catalog
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        );
    }

    // Success state
    if (submitStatus === 'success' && items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="w-12 h-12 text-emerald-500" />
                </div>
                <h1 className="text-3xl font-bold text-brand-text mb-4">Quote Request Submitted!</h1>
                <p className="text-brand-text-muted mb-8 max-w-md">
                    Thank you for your request. Our sales team will review your quote and respond with pricing and availability within 24 hours.
                </p>
                <Link
                    href="/products"
                    className="px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-glow-gold flex items-center gap-2"
                >
                    Continue Shopping
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-brand-text mb-8">Quote Request ({cartCount} items)</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.partNumber}
                            className="bg-white p-6 rounded-2xl shadow-soft border border-brand-border flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-brand-gold transition-colors"
                        >
                            {/* Product Image */}
                            <div className="w-20 h-20 flex-shrink-0 bg-brand-surface rounded-xl border border-brand-border flex items-center justify-center overflow-hidden">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.partNumber}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <span className="text-2xl font-bold text-brand-text-light">
                                            {item.partNumber.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-2.5 py-1 bg-brand-surface text-brand-teal text-xs font-bold rounded-md border border-brand-border">
                                        {item.category}
                                    </span>
                                    {item.manufacturer && (
                                        <span className="text-xs text-brand-text-muted font-medium">
                                            {item.manufacturer}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-brand-text font-mono mb-1 group-hover:text-brand-teal transition-colors">
                                    {item.partNumber}
                                </h3>
                                <p className="text-sm text-brand-text-muted line-clamp-2">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3 bg-brand-surface rounded-lg p-1 border border-brand-border">
                                    <button
                                        onClick={() => updateQuantity(item.partNumber, item.quantity - 1)}
                                        className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all disabled:opacity-50"
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus className="w-4 h-4 text-brand-text" />
                                    </button>
                                    <span className="w-8 text-center font-bold text-brand-text text-sm">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.partNumber, item.quantity + 1)}
                                        className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all"
                                    >
                                        <Plus className="w-4 h-4 text-brand-text" />
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFromCart(item.partNumber)}
                                    className="p-2 text-brand-text-light hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Remove item"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-brand-border sticky top-24">
                        <h2 className="text-xl font-bold text-brand-text mb-6">Request Summary</h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-brand-text-muted">Total Items</span>
                                <span className="font-bold text-brand-text">{cartCount}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-brand-text-muted">Part Numbers</span>
                                <span className="font-bold text-brand-text">{items.length}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full py-4 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold rounded-xl transition-all duration-200 shadow-glow-gold hover:shadow-lg hover:scale-[1.02] mb-4 flex items-center justify-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Submit Quote Request
                        </button>

                        <p className="text-xs text-center text-brand-text-muted">
                            Our sales team will review your request and respond with pricing and availability within 24 hours.
                        </p>
                    </div>
                </div>
            </div>

            {/* Quote Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-brand-border flex items-center justify-between">
                            <h2 className="text-xl font-bold text-brand-text">Submit Quote Request</h2>
                            <button
                                onClick={() => setShowForm(false)}
                                className="p-2 hover:bg-brand-surface rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-brand-text-muted" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmitQuote} className="p-6 space-y-4">
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm">Failed to submit. Please try again or contact us directly.</p>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-brand-text mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-text mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-text mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-text mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                                    placeholder="Your company (optional)"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-text mb-2">
                                    Additional Message
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all resize-none"
                                    placeholder="Any special requirements or notes..."
                                />
                            </div>

                            <div className="pt-4 border-t border-brand-border">
                                <p className="text-sm text-brand-text-muted mb-4">
                                    <strong>{items.length}</strong> items with total quantity of <strong>{cartCount}</strong> will be included in this quote request.
                                </p>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-brand-gold hover:bg-brand-gold-dark disabled:bg-brand-gold/50 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Submit Quote Request
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
