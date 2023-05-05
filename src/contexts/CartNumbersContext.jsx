import { useState, createContext } from "react";
export const CartNumbersContext = createContext();

const CartNumbersContextProvider = ({ children }) => {
  const [cartItemNumber, setCartItemNumber] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const increItemNums = () => {
    setCartItemNumber(cartItemNumber + 1);
  };

  return (
    <CartNumbersContext.Provider
      value={{ cartItemNumber, increItemNums, cartItems, setCartItems }}
    >
      {children}
    </CartNumbersContext.Provider>
  );
};

export default CartNumbersContextProvider;
