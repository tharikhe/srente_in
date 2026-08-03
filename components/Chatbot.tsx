'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Search, Package, HelpCircle, Trash2, ThumbsUp, ThumbsDown, Sparkles, ExternalLink, Smartphone, Mail, ChevronRight, Info } from 'lucide-react';
import { searchProducts, categories, getProductsByCategory, Product } from '@/data/products';
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from '@/components/ui/expandable-chat';
import { Button } from '@/components/ui/button';
import ProductDetailPopup from './ProductDetailPopup';

interface Message {
    id: number;
    type: 'user' | 'bot';
    content: string;
    products?: Product[];
    timestamp: Date;
    reactions?: {
        helpful?: boolean;
    };
    relatedQuestions?: string[];
}

const quickActions = [
    { icon: <Search className="w-3.5 h-3.5" />, label: 'Search Parts', action: 'search' },
    { icon: <Package className="w-3.5 h-3.5" />, label: 'Categories', action: 'categories' },
    { icon: <Smartphone className="w-3.5 h-3.5" />, label: 'WhatsApp', action: 'whatsapp' },
];

const WHATSAPP_NUMBER = "918660744258"; // Removed spaces/symbols for link

export default function Chatbot() {
    // State
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: 'bot',
            content: "👋 Hi! I'm your Serente Electronics assistant. I can help you find components (e.g., '10K resistor', '0805 capacitor'), check stock, or connect via WhatsApp.",
            timestamp: new Date(),
            relatedQuestions: ["Show me resistors", "Check stock for RC0805", "Contact sales"]
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Refs
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatBodyRef = useRef<HTMLDivElement>(null);

    // Initial mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Scroll to bottom on new messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    // Parse advanced search query
    const parseSearchQuery = (query: string) => {
        const lowerQuery = query.toLowerCase();

        // Extract potential package sizes
        const packageMatch = lowerQuery.match(/(0402|0603|0805|1206|1210|2010|2512)/);
        const packageSize = packageMatch ? packageMatch[0] : null;

        // Extract potential values (simplified regex for demo)
        const valueMatch = lowerQuery.match(/(\d+[.]?\d*)\s*([kkmmuunnpp]?)(ohm|f|h|v)/);

        // Basic search first
        let results = searchProducts(query);

        // Apply filters if we found specific criteria and have too many results
        if (results.length > 5 && packageSize) {
            results = results.filter(p => p.description.includes(packageSize) || p.partNumber.includes(packageSize));
        }

        return results;
    };

    const processMessage = (userMessage: string): Message => {
        const lowerMessage = userMessage.toLowerCase();

        // Clear chat command
        if (lowerMessage === 'clear' || lowerMessage === 'reset') {
            return { id: 0, type: 'bot', content: '', timestamp: new Date() }; // Special signal
        }

        // WhatsApp Info
        if (lowerMessage.includes('whatsapp') || lowerMessage.includes('number')) {
            return {
                id: Date.now(),
                type: 'bot',
                content: "📱 **WhatsApp Support**\n\nYou can chat with our sales team directly on WhatsApp for quotes and bulk orders.\n\nNumber: +91 86607 44258",
                timestamp: new Date(),
                relatedQuestions: ["Send inquiry on WhatsApp", "Email sales"]
            };
        }

        // Search logic
        if (lowerMessage.length > 2 && !lowerMessage.includes('category')) {
            const products = parseSearchQuery(userMessage);

            if (products.length > 0) {
                const category = products[0].category;
                return {
                    id: Date.now(),
                    type: 'bot',
                    content: `🔍 I found **${products.length}** matches for "${userMessage}".\n\nHere are the top results:`,
                    products: products.slice(0, 5),
                    timestamp: new Date(),
                    relatedQuestions: [`Show more ${category}`, "Filter by in-stock", "Start new search"]
                };
            }
        }

        // Filter by in-stock logic
        if (lowerMessage.includes('filter by in-stock') || lowerMessage.includes('in stock')) {
            // Find the last search query from user messages
            const lastUserSearch = [...messages].reverse().find(m =>
                m.type === 'user' &&
                !m.content.toLowerCase().includes('filter') &&
                !m.content.toLowerCase().includes('help')
            );

            const queryToFilter = lastUserSearch ? lastUserSearch.content : '';
            let results = queryToFilter ? parseSearchQuery(queryToFilter) : [];

            // Filter results
            results = results.filter(p => p.inStock);

            if (results.length > 0) {
                return {
                    id: Date.now(),
                    type: 'bot',
                    content: `✅ Showing **${results.length}** in-stock items${queryToFilter ? ` for "${queryToFilter}"` : ''}:`,
                    products: results.slice(0, 5),
                    timestamp: new Date(),
                    relatedQuestions: ["Show all results", "Start new search"]
                };
            } else {
                return {
                    id: Date.now(),
                    type: 'bot',
                    content: `No in-stock items found${queryToFilter ? ` for "${queryToFilter}"` : ''}. Try searching for something else!`,
                    timestamp: new Date(),
                    relatedQuestions: ["View categories", "Contact support"]
                };
            }
        }

        // Help me search logic
        if (lowerMessage.includes('help me search') || lowerMessage.includes('how to search')) {
            return {
                id: Date.now(),
                type: 'bot',
                content: "Here are some ways you can search:\n\n• **Part Number**: Type exact parts like 'RC0805'\n• **Description**: Type '10k resistor' or '0.1uF capacitor'\n• **Category**: Type 'Resistors', 'ICs', etc.\n\nTry typing a part number now!",
                timestamp: new Date(),
                relatedQuestions: ["Show categories", "Browse products"]
            };
        }

        // Contact support logic
        if (lowerMessage.includes('contact support') || lowerMessage.includes('sales')) {
            return {
                id: Date.now(),
                type: 'bot',
                content: "📞 **Contact Support**\n\nOur team is available to help you!\n\n• Email: hello@serenteelectronics.com\n• Phone: +91 86607 44258\n• WhatsApp: Click the button below",
                timestamp: new Date(),
                relatedQuestions: ["Open WhatsApp", "Back to search"]
            };
        }

        // Category browsing
        if (lowerMessage.includes('categories') || lowerMessage.includes('browse') || lowerMessage.includes('show me')) {
            const categoryList = categories.slice(0, 8).map(c => `• ${c}`).join('\n');
            return {
                id: Date.now(),
                type: 'bot',
                content: `📦 **Categories**\n\n${categoryList}\n\nType a category name to see products.`,
                timestamp: new Date(),
                relatedQuestions: categories.slice(0, 3)
            };
        }

        // Default response
        return {
            id: Date.now(),
            type: 'bot',
            content: "I didn't find specific products matching that. You can try searching by:\n\n• Part Number (e.g., RC0805)\n• Description (e.g., 10K Resistor)\n• Category (e.g., Capacitors)",
            timestamp: new Date(),
            relatedQuestions: ["Help me search", "Contact support", "View categories"]
        };
    };

    const handleSend = async (manualInput?: string) => {
        const messageText = manualInput || input;
        if (!messageText.trim()) return;

        // Reset logic for clear command
        if (messageText.toLowerCase() === 'clear') {
            setInput('');
            setMessages([{
                id: Date.now(),
                type: 'bot',
                content: "Chat cleared! How can I help you now?",
                timestamp: new Date(),
                relatedQuestions: ["Search products", "Browse categories"]
            }]);
            return;
        }

        // User Message
        const userMessage: Message = {
            id: Date.now(),
            type: 'user',
            content: messageText,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 600));

        const response = processMessage(messageText);

        setIsTyping(false);
        setMessages(prev => [...prev, response]);
    };

    const handleQuickAction = (action: string) => {
        switch (action) {
            case 'search':
                handleSend("I want to search for parts");
                break;
            case 'categories':
                handleSend("Show me categories");
                break;
            case 'whatsapp':
                window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
                break;
            default:
                if (action.startsWith('sq:')) {
                    handleSend(action.substring(3));
                }
        }
    };

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    const handleAddToInquiry = (product: Product) => {
        // In a real app, addToCart(product)
        const inquiryMsg: Message = {
            id: Date.now(),
            type: 'bot',
            content: `✅ Added **${product.partNumber}** to your inquiry list.\n\nWould you like to send this inquiry via WhatsApp?`,
            timestamp: new Date(),
            relatedQuestions: ["Send inquiry", "Continue Searching"]
        };

        // Check if the last message was the same type to avoid spamming if user clicks multiple
        setMessages(prev => [...prev, inquiryMsg]);

        // Auto open WhatsApp with pre-filled message
        const text = `Hi, I'm interested in ${product.partNumber} (${product.description}). Is it available?`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleReaction = (msgId: number, helpful: boolean) => {
        setMessages(prev => prev.map(m =>
            m.id === msgId ? { ...m, reactions: { helpful } } : m
        ));
    };

    const clearChat = () => {
        setMessages([{
            id: Date.now(),
            type: 'bot',
            content: "Chat cleared. Ready for a fresh start!",
            timestamp: new Date(),
            relatedQuestions: ["Search products", "View categories"]
        }]);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <ExpandableChat size="md" position="bottom-right" icon={<MessageCircle className="w-6 h-6" />}>
                <ExpandableChatHeader className="bg-brand-teal text-white flex justify-between items-center p-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                                <Bot className="w-6 h-6 text-brand-gold" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-teal rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-base">Serente AI</h3>
                            <p className="text-xs text-brand-gold/90 font-medium">Always Online</p>
                        </div>
                    </div>

                </ExpandableChatHeader>

                <ExpandableChatBody className="bg-slate-50 p-4 space-y-5" ref={chatBodyRef}>
                    {messages.map((message, idx) => (
                        <div key={message.id} className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'} animate-slide-up`}>

                            <div className={`flex gap-3 max-w-[90%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                {/* Avatar */}
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 shadow-sm ${message.type === 'user' ? 'bg-brand-gold/90' : 'bg-brand-teal'
                                    }`}>
                                    {message.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Sparkles className="w-4 h-4 text-brand-gold" />}
                                </div>

                                {/* Bubble */}
                                <div className={`flex flex-col gap-1 ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div className={`rounded-2xl px-4 py-3 shadow-sm text-sm leading-relaxed ${message.type === 'user'
                                        ? 'bg-brand-teal text-white rounded-tr-sm'
                                        : 'bg-white border border-slate-200 text-slate-800 rounded-tl-sm'
                                        }`}>
                                        {message.content.split('\n').map((line, i) => (
                                            <p key={i} className={`min-h-[1.2em] ${i > 0 ? 'mt-1' : ''}`}>
                                                {line.split(/(\*\*[^*]+\*\*)/).map((part, pIdx) => (
                                                    part.startsWith('**') && part.endsWith('**')
                                                        ? <strong key={pIdx} className="font-bold">{part.slice(2, -2)}</strong>
                                                        : <span key={pIdx}>{part}</span>
                                                ))}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Products Grid */}
                                    {message.products && message.products.length > 0 && (
                                        <div className="mt-2 w-full grid gap-2">
                                            {message.products.map((product, pIdx) => (
                                                <div
                                                    key={pIdx}
                                                    onClick={() => handleProductClick(product)}
                                                    className="bg-white p-3 rounded-xl border border-slate-200 hover:border-brand-gold/50 hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <div className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded-full inline-block mb-1">
                                                                {product.category}
                                                            </div>
                                                            <div className="font-bold text-slate-800 text-sm group-hover:text-brand-gold transition-colors">
                                                                {product.partNumber}
                                                            </div>
                                                            <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                                                {product.description}
                                                            </div>
                                                        </div>
                                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-gold" />
                                                    </div>
                                                </div>
                                            ))}
                                            {message.products.length >= 5 && (
                                                <button className="text-xs text-brand-teal font-medium hover:underline text-center w-full mt-1">
                                                    View all results
                                                </button>
                                            )}
                                        </div>
                                    )}

                                    {/* Bot Message Footer (Reactions & Time) */}
                                    {message.type === 'bot' && (
                                        <div className="flex items-center gap-4 mt-1 px-1">
                                            <span className="text-[10px] text-slate-400">
                                                {isMounted ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                            </span>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleReaction(message.id, true)}
                                                    className={`hover:bg-slate-100 p-1 rounded transition-colors ${message.reactions?.helpful === true ? 'text-green-600' : 'text-slate-400'}`}
                                                >
                                                    <ThumbsUp className="w-3 h-3" />
                                                </button>
                                                <button
                                                    onClick={() => handleReaction(message.id, false)}
                                                    className={`hover:bg-slate-100 p-1 rounded transition-colors ${message.reactions?.helpful === false ? 'text-red-500' : 'text-slate-400'}`}
                                                >
                                                    <ThumbsDown className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Related Questions Chips - Only for latest bot message */}
                            {message.type === 'bot' && idx === messages.length - 1 && message.relatedQuestions && (
                                <div className="flex flex-wrap gap-2 mt-3 ml-11 animate-fade-in">
                                    {message.relatedQuestions.map((q, qIdx) => (
                                        <button
                                            key={qIdx}
                                            onClick={() => handleSend(q)}
                                            className="text-xs bg-white border border-brand-teal/20 text-brand-teal px-3 py-1.5 rounded-full hover:bg-brand-teal hover:text-white transition-all shadow-sm"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex items-end gap-3 animate-fade-in">
                            <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </ExpandableChatBody>

                <ExpandableChatFooter className="bg-white p-3 border-t border-slate-100">
                    {/* Quick Input Actions */}
                    {messages.length < 2 && (
                        <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide">
                            {quickActions.map((action, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleQuickAction(action.action)}
                                    className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-brand-gold/10 hover:text-brand-gold hover:border-brand-gold/30 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 transition-all whitespace-nowrap"
                                >
                                    {action.icon}
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-200 focus-within:border-brand-teal/50 focus-within:ring-2 focus-within:ring-brand-teal/10 transition-all">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message or part number..."
                            className="flex-grow px-3 py-2 bg-transparent text-sm focus:outline-none placeholder:text-slate-400"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={!input.trim()}
                            className="w-9 h-9 bg-brand-teal text-white rounded-full flex items-center justify-center hover:bg-brand-teal-light disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow active:scale-95"
                        >
                            <Send className="w-4 h-4 ml-0.5" />
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-slate-400 hover:text-green-600 flex items-center justify-center gap-1 transition-colors"
                        >
                            <Smartphone className="w-3 h-3" />
                            Support available on WhatsApp
                        </a>
                    </div>
                </ExpandableChatFooter>
            </ExpandableChat>

            {/* Product Detail Popup */}
            <ProductDetailPopup
                product={selectedProduct}
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onAddToInquiry={handleAddToInquiry}
            />
        </>
    );
}
