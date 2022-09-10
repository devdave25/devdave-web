import "../src/styles/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "Light",
    clearable: false,
    list: [
      { name: "Light", class: "bg-background", color: "#f0f9f1" },
      { name: "Dark", class: ["bg-background", "dark"], color: "#242524" },
    ],
  },
};
