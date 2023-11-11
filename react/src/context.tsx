import React from 'react';
import { createContext } from 'react';
import { ReactNode, useState, useContext } from 'react';

interface ContextValue {
  localStorageValue: string;
  setLocalStorageValue: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  limit: number;
  setLimit: (value: number) => void;
}

const SearchContext = createContext<ContextValue | undefined>({
  localStorageValue: '',
  setLocalStorageValue: () => '',
  page: 1,
  setPage: () => {},
  limit: 10,
  setLimit: () => {},
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const storedValue = localStorage.getItem('inputValue');
    return storedValue || '';
  });
  const [page, setPage] = useState(() => {
    const page = 1;
    return page;
  });
  const [limit, setLimit] = useState(() => {
    const limit = 10;
    return limit;
  });

  return (
    <SearchContext.Provider
      value={{
        localStorageValue,
        setLocalStorageValue,
        page,
        setPage,
        limit,
        setLimit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
