import { createContext, useState } from "react";

export const QuantityContext = createContext();

//
const QuantityContextProvider = ({ children }) => {
  // states
  const [totalQuantity, setTotalQuantity] = useState(0);

  // increse quantity
  const handleIncreQuantity = () => {
    if (totalQuantity === 5) {
      return;
    } else {
      setTotalQuantity(totalQuantity + 1);
    }
  };

  // decrease quantity
  const handleDecreQuantity = () => {
    if (totalQuantity === 0) {
      return;
    } else {
      setTotalQuantity(totalQuantity - 1);
    }
  };

  // returning
  return (
    <QuantityContext.Provider
      value={{ totalQuantity, handleDecreQuantity, handleIncreQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
};

export default QuantityContextProvider;
