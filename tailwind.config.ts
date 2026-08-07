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
                    teal: '#2DAA9E',
                    'teal-light': '#66D2CE',
                    'teal-dark': '#258B82',

                    // Accent Warm Beige/Sand
                    gold: '#E3D2C3',
                    'gold-light': '#E9E1D9',
                    'gold-dark': '#CDBAA9',

                    // Neutrals
                    white: '#FFFFFF',
                    surface: '#EAEAEA',
                    'surface-alt': '#F5F5F5',

                    // Text colors
                    text: '#1A1A1A',
                    'text-muted': '#6B7280',
                    'text-light': '#9CA3AF',

                    // Borders
                    border: '#EAEAEA',
                    'border-dark': '#E3D2C3',

                    // Theme aliases
                    yellow: '#E3D2C3',
                    orange: '#E3D2C3',
                    blue: '#2DAA9E',
                    emerald: '#2DAA9E',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'Cambria', 'serif'],
                mono: ['var(--font-mono)', 'Consolas', 'monospace'],
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
                'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
                'glow-gold': '0 0 20px rgba(227, 210, 195, 0.5)',
                'glow-teal': '0 0 20px rgba(45, 170, 158, 0.35)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'shimmer': 'shimmer 2s infinite',
                'scroll-horizontal': 'scrollHorizontal var(--scroll-duration, 40s) linear infinite',
                'scroll-horizontal-reverse': 'scrollHorizontalReverse var(--scroll-duration, 40s) linear infinite',
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
                scrollHorizontal: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                scrollHorizontalReverse: {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
