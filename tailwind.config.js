/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                maple: {
                    50: "#fff0f0",
                    100: "#ffdedf",
                    200: "#ffc2c3",
                    300: "#ff989a",
                    400: "#ff5c5f",
                    500: "#ff2a2e",
                    600: "#f80a0e",
                    700: "#d10408",
                    800: "#ac080b",
                    900: "#790c0e",
                    950: "#4e0102",
                },
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
