import React from 'react';
import { createContext } from 'react';
import { ReactNode, useState, useContext } from 'react';
import { ApiData, CardProps } from './types/types';

interface ContextValue {
  localStorageValue: string;
  setLocalStorageValue: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  limit: number;
  setLimit: (value: number) => void;
  apiData: ApiData;
  setFetchData: (data: ApiData) => void;
}

const searchResults: CardProps = {
  id: 0,
  title: '',
  images: [''],
  price: 0,
  description: '',
};

const searchApiResults: ApiData = {
  products: [searchResults],
  total: 0,
  skip: 0,
  limit: 10,
};

const SearchContext = createContext<ContextValue | undefined>({
  localStorageValue: '',
  setLocalStorageValue: () => '',
  page: 1,
  setPage: () => {},
  limit: 10,
  setLimit: () => {},
  apiData: { products: [], total: 0, skip: 0, limit: 10 },
  setFetchData: () => {},
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const storedValue = localStorage.getItem('inputValue');
    return storedValue || '';
  });
  const [page, setPage] = useState(() => {
    const page = 0;
    return page;
  });
  const [limit, setLimit] = useState(() => {
    const limit = 10;
    return limit;
  });
  const [apiData, setFetchData] = useState<ApiData>(searchApiResults);

  return (
    <SearchContext.Provider
      value={{
        localStorageValue,
        setLocalStorageValue,
        page,
        setPage,
        limit,
        setLimit,
        apiData,
        setFetchData,
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
