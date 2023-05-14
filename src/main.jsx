import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import CartNumbersContextProvider from "./contexts/CartNumbersContext.jsx";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import RefContextProvider from "./contexts/RefContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <CartNumbersContextProvider>
      <RefContextProvider>
        <App />
      </RefContextProvider>
    </CartNumbersContextProvider>
  </ProductContextProvider>
);
