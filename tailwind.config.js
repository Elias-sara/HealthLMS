/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5", // Light Gray
        foreground: "#333333", // Dark Gray
        card: {
          DEFAULT: "#FFFFFF", // White
          foreground: "#333333", // Dark Gray
        },
        popover: {
          DEFAULT: "#F8F9FA", // Light Gray
          foreground: "#495057", // Medium Gray
        },
        primary: {
          DEFAULT: "#9e34dc", // Purple
          foreground: "#FFFFFF", // White
        },
        secondary: {
          DEFAULT: "#F6E05E", // Yellow
          foreground: "#2D3748", // Dark Gray
        },
        muted: {
          DEFAULT: "#E2E8F0", // Light Gray
          foreground: "#4A5568", // Medium Gray
        },
        accent: {
          DEFAULT: "#38B2AC", // Teal
          foreground: "#FFFFFF", // White
        },
        destructive: {
          DEFAULT: "#E53E3E", // Red
          foreground: "#FFFFFF", // White
        },
        border: "#CBD5E0", // Light Gray
        input: "#EDF2F7", // Light Gray
        ring: "#BEE3F8", // Light Blue
        chart: {
          1: "#6B46C1", // Purple
          2: "#D53F8C", // Pink
          3: "#ED8936", // Orange
          4: "#48BB78", // Green
          5: "#4299E1", // Blue
        },
      },
      borderRadius: {
        lg: "8px",
        md: "4px",
        sm: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
