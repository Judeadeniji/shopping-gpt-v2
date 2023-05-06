import { useState, createContext } from "react";
export const CartNumbersContext = createContext();

const CartNumbersContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <CartNumbersContext.Provider
      value={{ cartItems, setCartItems, cartOpen, openCart }}
    >
      {children}
    </CartNumbersContext.Provider>
  );
};

export default CartNumbersContextProvider;
