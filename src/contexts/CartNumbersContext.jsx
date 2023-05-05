import { useState, createContext } from "react";
import useFetch from "../hooks/useFetch";
export const CartNumbersContext = createContext();

const CartNumbersContextProvider = ({ children }) => {
  const { data: product } = useFetch("https://fakestoreapi.com/products");
  const [cartItems, setCartItems] = useState([]);
  const saveCartItems = (id) => {
    const saveItems = [
      ...cartItems,
      { productTitle: product.title, id: product.id },
    ];
    setCartItems(saveItems);
  };

  return (
    <CartNumbersContext.Provider
      value={{ cartItems, saveCartItems, setCartItems }}
    >
      {children}
    </CartNumbersContext.Provider>
  );
};

export default CartNumbersContextProvider;
