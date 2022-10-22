import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// @ts-ignore
import { unregister } from "./serviceWorker";
import "./styles/index.css";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
