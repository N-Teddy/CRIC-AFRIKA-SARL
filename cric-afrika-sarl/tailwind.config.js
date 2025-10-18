@type { import('tailwindcss').Config }
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-orange': '#FF8C42',
                'lemon-green': '#A8D05F',
                'dark-blue': '#1A2B4A',
                'light-gray': '#F5F7FA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}