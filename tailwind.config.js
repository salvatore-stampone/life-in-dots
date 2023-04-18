/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "fresh-air": "#AFE6FF",
                aero: "#6DBAD9",
                "medium-acqua": "#5DD9B7",
                cobalt: "#0047AB",
                alabaster: "#EEEDE4",
                "charleston-green": "#292C30",
            },
        },
    },
    plugins: [],
};
