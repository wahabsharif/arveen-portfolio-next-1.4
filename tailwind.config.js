/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#3D5361",
        light: "#D6B7B5",
        primary: "#F5F0ED", // 240,86,199
        primaryDark: "#D4C6BD", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 9s linear infinite",
      },
    },
  },
  plugins: [],
};
