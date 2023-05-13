import React, { createContext, useState } from "react";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <ProductContext.Provider
      value={{ data, setData, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
