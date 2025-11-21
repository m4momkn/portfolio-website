/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A192F",
                secondary: "#8B5CF6",
                accent: "#00F0FF",
                success: "#10B981",
                background: "#1A202C",
                text: "#E2E8F0",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
