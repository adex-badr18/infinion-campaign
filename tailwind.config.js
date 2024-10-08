/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "logo-gradient":
                    "linear-gradient(99.07deg, #247B7B 2.54%, #3B247B 101.29%)",
                "cta-gradient":
                    "linear-gradient(96.87deg, #247B7B 13.61%, #3B247B 68.44%)",
            },
            colors: {
                primary: "#247B7B",
                maroon: "#990000",
                redd: "#EF2D2B"
            },
            fontFamily: {
                "nunito": ["Nunito Sans", "sans-serif"],
                "work-sans": ["Work Sans", "sans-serif"],
                "general-sans": ["General Sans", "sans-serif"],
                "syne": ["Syne", "sans-serif"]
            },
            // borderRadius: {
            //     ""
            // }
        },
    },
    plugins: [],
};
