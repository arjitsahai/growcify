import React, { useState, createContext } from "react";

export const GroceryContext = createContext();

export const GroceryState  = ({ children }) => {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const [activeLink, setActiveLink] = useState("new");

   return (
      <GroceryContext.Provider 
      value={{ hiddenMenu, setHiddenMenu, activeLink, setActiveLink }}>
          {children}
      </GroceryContext.Provider>
   );
};