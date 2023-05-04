import { useState, createContext } from "react";
export const CartNumbersContext = createContext();

const CartNumbersContextProvider = (props) => {
  const [cartItemNumber, setCartItemNumber] = useState(0);
  const increItemNums = () => {
    setCartItemNumber(cartItemNumber + 1);
  };
  return (
    <CartNumbersContext.Provider value={{ cartItemNumber, increItemNums }}>
      {props.children}
    </CartNumbersContext.Provider>
  );
};

export default CartNumbersContextProvider;
