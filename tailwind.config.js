/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "var(--primary)",
      "on-primary": "var(--on-primary)",
      "primary-container": "var(--primary-container)",
      "on-primary-container": "var(--on-primary-container)",
      secondary: "var(--secondary:)",
      "on-secondary": "var(--on-secondary)",
      "secondary-container": "var(--secondary-container)",
      "on-secondary-container": "var(--on-secondary-container)",
      tertiary: "var(--tertiary)",
      "on-tertiary": "var(--on-tertiary)",
      "tertiary-container": "var(--tertiary-container)",
      "on-tertiary-container": "var(--on-tertiary-container)",
      error: "var(--error)",
      "on-error": "var(--on-error)",
      "error-container": "var(--error-container)",
      "on-error-container": "var(--on-error-container)",
      background: "var(--background)",
      "on-background": "var(--on-background)",
      surface: "var(--surface)",
      "on-surface": "var(--on-surface)",
      "surface-variant": "var(--surface-variant)",
      "on-surface-variant": "var(--on-surface-variant)",
      outline: "var(--outline)",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
