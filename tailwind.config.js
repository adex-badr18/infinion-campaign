/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'logo-gradient': 'linear-gradient(99.07deg, #247B7B 2.54%, #3B247B 101.29%)',
                'cta-gradient': 'linear-gradient(96.87deg, #247B7B 13.61%, #3B247B 68.44%)',
            }
        },
    },
    plugins: [],
};
