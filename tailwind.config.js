/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px'
      },
      boxShadow: {
        'md': '0px 1px 6px 0px #171717',
        'lg': '0px 1px 12px 0px #171717'
      },
      colors: {
        'container2': '#303134',
        'container': '#303134',
        'surface': '#202124'
      },
      backgroundImage: {
        'pattern': "url('/pattern.svg')",
        'fly-image': "url('/fly-image.png')"
      }
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ] 
}

