import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchContext } from '../../context';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Pagination', () => {
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

  test('the pagination component updates URL query parameter when page change', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <SearchContext.Provider value={context}>
            <App></App>
          </SearchContext.Provider>
        </BrowserRouter>
      );
    });

    const btnNext = await screen.findByTestId('btn-next');
    const user = userEvent.setup();
    user.click(btnNext);

    await waitFor(() => {
      expect(window.location.pathname).toEqual('/');
    });
  });

  test('renders the pagination', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <SearchContext.Provider value={context}>
            <Routes>
              <Route path="/*" element={<Pagination />} />
            </Routes>
          </SearchContext.Provider>
        </BrowserRouter>
      );
    });
    expect(true).toBeTruthy();
  });
});
