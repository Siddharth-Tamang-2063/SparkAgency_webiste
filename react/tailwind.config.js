/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                dm: ['DM Sans', 'sans-serif'],
            },
            colors: {
                bg: '#080808',
                ink: '#F0EDE8',
                accent: '#E8FF47',
            },
            keyframes: {
                'marquee-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.35' },
                },
            },
            animation: {
                'marquee': 'marquee-scroll 32s linear infinite',
                'pulse': 'pulse 2.8s cubic-bezier(0.4,0,0.6,1) infinite',
            },
        },
    },
    plugins: [],
};