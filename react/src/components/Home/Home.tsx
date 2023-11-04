import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import { ReactNode, useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

const Home = (): ReactNode => {
  const { page } = useParams();
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [search, page]);

  const changeLoadingState = (value?: string, pageNumber?: string) => {
    setSearch(search);
    setLimit(limit);
    if (value !== search || pageNumber !== page) setIsLoading(true);
  };

  return (
    <div>
      <Header
        search={search}
        // onChangeSearch={() => setSearch(search)}
        handleClick={changeLoadingState}
      ></Header>
      <Catalog search={search} limit={limit}></Catalog>
      <Outlet />
    </div>
  );
};

export default Home;
