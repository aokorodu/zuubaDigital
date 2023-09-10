import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const str = "hello world";
const capEveryOther = (str) => {
  const arr = str.split("");
  const newWord = arr.map((letter, index) => {
    const newLet = index % 2 == 0 ? letter.toLowerCase() : letter.toUpperCase();
    return newLet;
  });

  return newWord;
};

console.log(capEveryOther(str));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
