import { createContext, useRef } from "react";

export const RefContext = createContext();
const RefContextProvider = ({ children }) => {
  const filter__box = useRef();
  const cat__toggle = useRef();
  return (
    <RefContext.Provider value={{ filter__box, cat__toggle }}>
      {children}
    </RefContext.Provider>
  );
};

export default RefContextProvider;
