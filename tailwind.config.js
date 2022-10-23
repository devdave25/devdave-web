/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      12: "48px",
      16: "64px",
      20: "80px",
      24: "96px",
      32: "128px",
      40: "160px",
      48: "192px",
    },
    fontSize: {
      "display-lg": [
        "52px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "56px",
        },
      ],
      "display-sm": [
        "44px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "48px",
        },
      ],
      h1: [
        "40px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "48px",
        },
      ],
      h2: [
        "36px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "44px",
        },
      ],
      h3: [
        "32px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "40px",
        },
      ],
      h4: [
        "28px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "36px",
        },
      ],
      h5: [
        "24px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "32px",
        },
      ],
      h6: [
        "20px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "28px",
        },
      ],
      lg: ["18px", "28px"],
      md: ["16px", "24px"],
      sm: ["14px", "20px"],
      xs: ["12px", "20px"],
      overline: ["14px", "12px"],
    },
    colors: {
      primary: "var(--primary)",
      "on-primary": "var(--on-primary)",
      "primary-container": "var(--primary-container)",
      "on-primary-container": "var(--on-primary-container)",
      secondary: "var(--secondary)",
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
      disabled: "var(--disabled)",
    },
    boxShadow: {
      1: "var(--elevation-1)",
      2: "var(--elevation-2)",
      3: "var(--elevation-3)",
      4: "var(--elevation-4)",
      5: "var(--elevation-5)",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};
