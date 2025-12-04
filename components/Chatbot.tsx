'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Search, Package, HelpCircle } from 'lucide-react';
import { searchProducts, categories, getProductsByCategory, Product } from '@/data/products';
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from '@/components/ui/expandable-chat';

interface Message {
    id: number;
    type: 'user' | 'bot';
    content: string;
    products?: Product[];
    timestamp: Date;
}

const quickActions = [
    { icon: <Search className="w-4 h-4" />, label: 'Search Products', action: 'search' },
    { icon: <Package className="w-4 h-4" />, label: 'View Categories', action: 'categories' },
    { icon: <HelpCircle className="w-4 h-4" />, label: 'Get Help', action: 'help' },
];

export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: 'bot',
            content: "👋 Hi! I'm your Serente Electronics assistant. I can help you find electronic components, check stock, and answer questions. How can I help you today?",
            timestamp: new Date(),
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const processMessage = (userMessage: string): { content: string; products?: Product[] } => {
        const lowerMessage = userMessage.toLowerCase();

        // Greeting responses
        if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
            return {
                content: "Hello! 👋 Welcome to Serente Electronics. I can help you:\n\n• **Search for components** - Just type a part number or description\n• **Browse categories** - Ask about resistors, capacitors, ICs, etc.\n• **Check availability** - Tell me what you're looking for\n\nWhat can I help you find today?"
            };
        }

        // Help request
        if (lowerMessage.includes('help') || lowerMessage === '?') {
            return {
                content: "Here's what I can help you with:\n\n🔍 **Search Products** - Type a part number like 'RC0805' or description like '10K resistor'\n\n📦 **Browse Categories** - Ask 'show me capacitors' or 'what ICs do you have'\n\n📋 **Product Info** - Ask about specific components\n\n📞 **Contact** - Ask 'how to contact' for sales team info\n\n💡 **Tip**: Try searching for specific values like '100uF capacitor' or '3.3V regulator'"
            };
        }

        // Contact information
        if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('sales')) {
            return {
                content: "📞 **Contact Our Sales Team:**\n\n• **Email:** Info@serentehk.com\n• **Phone:** +91 93534 13620\n• **Landline:** +91 86607 44258\n• **Working Hours:** Mon-Fri, 9AM - 6PM\n\nFor bulk orders or custom requirements, our team is ready to assist you!"
            };
        }

        // Category browsing
        if (lowerMessage.includes('categories') || lowerMessage.includes('what do you have') || lowerMessage.includes('what products')) {
            const categoryList = categories.map(cat => {
                const count = getProductsByCategory(cat).length;
                return `• **${cat}** (${count} products)`;
            }).join('\n');

            return {
                content: `📦 **Our Product Categories:**\n\n${categoryList}\n\nTell me which category you'd like to explore!`
            };
        }

        // Search for specific categories
        for (const category of categories) {
            if (lowerMessage.includes(category.toLowerCase())) {
                const categoryProducts = getProductsByCategory(category).slice(0, 5);
                return {
                    content: `🔍 Found **${getProductsByCategory(category).length}** products in **${category}**. Here are some examples:`,
                    products: categoryProducts
                };
            }
        }

        // Stock/availability check
        if (lowerMessage.includes('in stock') || lowerMessage.includes('available') || lowerMessage.includes('availability')) {
            const partMatch = userMessage.match(/[A-Z0-9]{4,}/gi);
            if (partMatch) {
                const results = searchProducts(partMatch[0]);
                if (results.length > 0) {
                    const inStock = results.filter(p => p.inStock);
                    return {
                        content: `📊 Found **${results.length}** matching products. **${inStock.length}** are currently in stock:`,
                        products: results.slice(0, 5)
                    };
                }
            }
            return {
                content: "I can check stock for specific part numbers. Please provide a part number like 'RC0805FR-07120RL' or search term like '10K resistor'."
            };
        }

        // BOM upload info
        if (lowerMessage.includes('bom') || lowerMessage.includes('bill of materials') || lowerMessage.includes('bulk') || lowerMessage.includes('quote')) {
            return {
                content: "📋 **BOM Upload Tool:**\n\nWe have a dedicated BOM (Bill of Materials) tool that allows you to:\n\n• Upload Excel files with your component list\n• Get instant availability check\n• Request quotes for your entire BOM\n\n👉 Visit our **BOM Tool** page or ask to be connected to our sales team for personalized assistance!"
            };
        }

        // Search for products
        const searchTerms = userMessage.replace(/^(search|find|show|look for|looking for|need|want|do you have)/i, '').trim();
        if (searchTerms.length >= 3) {
            const results = searchProducts(searchTerms);

            if (results.length > 0) {
                return {
                    content: `🔍 Found **${results.length}** products matching "${searchTerms}":`,
                    products: results.slice(0, 5)
                };
            } else {
                // Try finding similar products
                const words = searchTerms.split(/\s+/);
                let alternativeResults: Product[] = [];

                for (const word of words) {
                    if (word.length >= 3) {
                        const partial = searchProducts(word);
                        alternativeResults = [...alternativeResults, ...partial];
                    }
                }

                if (alternativeResults.length > 0) {
                    const unique = Array.from(new Set(alternativeResults.map(p => p.partNumber)))
                        .map(pn => alternativeResults.find(p => p.partNumber === pn)!)
                        .slice(0, 5);
                    return {
                        content: `I couldn't find an exact match for "${searchTerms}", but here are some related products:`,
                        products: unique
                    };
                }

                return {
                    content: `I couldn't find products matching "${searchTerms}". Try:\n\n• Using a part number (e.g., RC0805)\n• Describing the component (e.g., '100K resistor')\n• Specifying a manufacturer\n\nOr contact our sales team for help finding specialized components!`
                };
            }
        }

        // Default response
        return {
            content: "I'm not sure I understood that. You can:\n\n• **Search** - Type a part number or description\n• **Browse** - Ask about categories like 'resistors' or 'capacitors'\n• **Get Help** - Type 'help' for more options\n\nHow can I assist you?"
        };
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            type: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate typing delay
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

        const response = processMessage(input);

        const botMessage: Message = {
            id: Date.now() + 1,
            type: 'bot',
            content: response.content,
            products: response.products,
            timestamp: new Date(),
        };

        setIsTyping(false);
        setMessages(prev => [...prev, botMessage]);
    };

    const handleQuickAction = (action: string) => {
        let message = '';
        switch (action) {
            case 'search':
                message = 'I want to search for a product';
                break;
            case 'categories':
                message = 'Show me all categories';
                break;
            case 'help':
                message = 'help';
                break;
        }
        setInput(message);
        handleSend();
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <ExpandableChat size="md" position="bottom-right" icon={<MessageCircle className="w-6 h-6" />}>
            <ExpandableChatHeader className="bg-brand-teal text-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Bot className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold">Serente Assistant</h3>
                        <p className="text-xs text-brand-yellow">Online • Ready to help</p>
                    </div>
                </div>
            </ExpandableChatHeader>

            <ExpandableChatBody className="bg-gray-50 p-4 space-y-4">
                {messages.map(message => (
                    <div
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[85%] ${message.type === 'user' ? 'order-1' : ''}`}>
                            <div className={`flex items-end gap-2 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user'
                                    ? 'bg-brand-orange text-white'
                                    : 'bg-brand-teal text-white'
                                    }`}>
                                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                </div>
                                <div className={`rounded-2xl px-4 py-2 ${message.type === 'user'
                                    ? 'bg-brand-orange text-white rounded-br-none'
                                    : 'bg-white border border-gray-200 rounded-bl-none shadow-sm'
                                    }`}>
                                    <div className="text-sm whitespace-pre-wrap">
                                        {message.content.split('\n').map((line, lineIdx) => (
                                            <p key={lineIdx} className={lineIdx > 0 ? 'mt-1' : ''}>
                                                {line.split(/(\*\*[^*]+\*\*)/).map((part, partIdx) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                                                    }
                                                    return <span key={partIdx}>{part}</span>;
                                                })}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Product Results */}
                                    {message.products && message.products.length > 0 && (
                                        <div className="mt-3 space-y-2">
                                            {message.products.map((product, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-gray-50 rounded-lg p-2 border border-gray-100"
                                                >
                                                    <p className="font-mono text-xs font-bold text-brand-teal">{product.partNumber}</p>
                                                    <p className="text-xs text-gray-600 line-clamp-1">{product.description}</p>
                                                    <div className="flex items-center justify-between mt-1">
                                                        <span className="text-xs text-gray-500">{product.manufacturer || 'N/A'}</span>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${product.inStock
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-red-100 text-red-700'
                                                            }`}>
                                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className={`text-xs text-gray-400 mt-1 ${message.type === 'user' ? 'text-right mr-10' : 'ml-10'}`}>
                                {isMounted ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-end gap-2">
                            <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center">
                                <Bot className="w-4 h-4" />
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </ExpandableChatBody>

            <ExpandableChatFooter className="bg-white">
                {/* Quick Actions */}
                {messages.length <= 2 && (
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                        <div className="flex gap-2 flex-wrap">
                            {quickActions.map((action, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleQuickAction(action.action)}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-brand-yellow/20 text-gray-700 rounded-full text-xs font-medium transition-colors"
                                >
                                    {action.icon}
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message or part number..."
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center hover:bg-brand-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </ExpandableChatFooter>
        </ExpandableChat>
    );
}
