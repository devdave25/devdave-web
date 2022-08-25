module.exports = {
  plugins: {
    postcss: {
      plugins: [require("postcss-viewport-height-correction")],
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
