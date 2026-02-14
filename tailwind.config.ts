import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4169E1", // Royal Blue
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#98FF98", // Mint Green
                    foreground: "#000000",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            fontFamily: {
                sans: ["var(--font-pretendard)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
