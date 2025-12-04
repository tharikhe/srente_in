import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    // Primary Colors
                    teal: '#0D5C5C',
                    'teal-light': '#0E6B6B',
                    'teal-dark': '#084545',

                    // Accent Gold/Mustard  
                    gold: '#C4960C',
                    'gold-light': '#D4A631',
                    'gold-dark': '#A67C00',

                    // Neutrals
                    white: '#FFFFFF',
                    surface: '#FAFAFA',
                    'surface-alt': '#F5F5F5',

                    // Text colors
                    text: '#1A1A1A',
                    'text-muted': '#6B7280',
                    'text-light': '#9CA3AF',

                    // Borders
                    border: '#E5E7EB',
                    'border-dark': '#D1D5DB',

                    // Legacy support
                    yellow: '#C4960C',
                    orange: '#C4960C',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'Cambria', 'serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace'],
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
                'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
                'glow-gold': '0 0 20px rgba(196, 150, 12, 0.3)',
                'glow-teal': '0 0 20px rgba(13, 92, 92, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
