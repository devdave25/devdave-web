import { akitaConfig, akitaDevtools } from "@datorama/akita";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

// if (config.isProduction) {
// enableAkitaProdMode();
// } else {
akitaDevtools({ name: "Akita" });
// }

akitaConfig({ resettable: true });

function setViewportProperty(doc: HTMLElement) {
  let prevClientHeight: number;
  function handleResize() {
    const clientHeight = doc.clientHeight;

    if (clientHeight === prevClientHeight) return;

    requestAnimationFrame(function updateViewportHeight() {
      doc.style.setProperty("--vh", clientHeight * 0.01 + "px");
      prevClientHeight = clientHeight;
    });
  }

  handleResize();

  return handleResize;
}

window.addEventListener(
  "resize",
  setViewportProperty(document.documentElement)
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
