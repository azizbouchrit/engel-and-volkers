import { createContext, useContext, useState, ReactNode } from "react";
import type { Listing } from "../../types";

interface FiltersContextValue {
  sortBy: keyof Listing | undefined;
  setSortBy: React.Dispatch<React.SetStateAction<keyof Listing | undefined>>;
  sortOrder: "ASC" | "DESC";
  setSortOrder: React.Dispatch<React.SetStateAction<"ASC" | "DESC">>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const FiltersContext = createContext<FiltersContextValue | undefined>(undefined);


interface FiltersProviderProps {
  children: ReactNode;
}


export function FiltersContextProvider({ children }: FiltersProviderProps) {
  const [sortBy, setSortBy] = useState<keyof Listing | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");
  const [query, setQuery] = useState<string>("");

  const value: FiltersContextValue = {
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    query,
    setQuery,
  };

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFiltersContext(): FiltersContextValue {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error(
      "useFiltersContext must be used within a FiltersContextProvider"
    );
  }
  return context;
}