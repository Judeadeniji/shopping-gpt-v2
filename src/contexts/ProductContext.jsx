import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //
  //Search Text and search functionality
  const [searchText, setSearchText] = useState("");
  //
  useEffect(() => {
    setData(data);
  }, [searchText]);
  //
  const handleFilterProduct = (e) => {
    e.preventDefault();
    if (searchText === "") {
      setData(data);
    } else {
      const filteredProduct = [...data].filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filteredProduct);
    }
  };
  //
  //
  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        error,
        setError,
        handleFilterProduct,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
