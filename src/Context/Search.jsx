// CPC
// Create Context 
import { createContext, useState } from "react";

// Create Provider
export const SearchContext = createContext();

// Search Functionality

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};