import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartNumbersContextProvider from "./contexts/CartNumbersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartNumbersContextProvider>
    <App />
  </CartNumbersContextProvider>
);
