import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchContext } from '../../context';
import Header from './Search';

describe('SearchBar component', () => {
  const apiDataValue = {
    products: [
      {
        id: 1,
        title: 'product',
        images: [],
        price: 1000,
        description: 'description',
      },
      {
        id: 2,
        title: 'product2',
        images: [],
        price: 2000,
        description: 'description2',
      },
      {
        id: 3,
        title: 'product3',
        images: [],
        price: 3000,
        description: 'description3',
      },
      {
        id: 4,
        title: 'product4',
        images: [],
        price: 4000,
        description: 'description4',
      },
      {
        id: 5,
        title: 'product5',
        images: [],
        price: 5000,
        description: 'description5',
      },
      {
        id: 6,
        title: 'product6',
        images: [],
        price: 6000,
        description: 'description6',
      },
      {
        id: 7,
        title: 'product7',
        images: [],
        price: 7000,
        description: 'description7',
      },
    ],
    total: 100,
    skip: 0,
    limit: 30,
  };

  const context = {
    localStorageValue: '',
    setLocalStorageValue: () => {},
    page: 0,
    setPage: () => {},
    limit: 10,
    setLimit: () => {},
    apiData: apiDataValue,
    setFetchData: () => {},
  };

  test('renders the Header', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <SearchContext.Provider value={context}>
            <Routes>
              <Route path="/*" element={<Header />} />
            </Routes>
          </SearchContext.Provider>
        </BrowserRouter>
      );
    });
    expect(true).toBeTruthy();
  });
});
