/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1F2937", // Dark Gray Text
                secondary: "#4B5563", // Gray-600
                accent: "#EAB308", // Yellow-500
                background: "#F3F4F6", // Light Gray
                sidebar: "#F9FAFB", // Off-white
                text: "#1F2937", // Dark Gray
                muted: "#6B7280", // Gray-500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
