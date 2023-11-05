import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
// import { ReactNode } from 'react';
// import { useParams } from 'react-router-dom';

export interface AppProps {
  limit: number;
  page: number;
  search: string;
}

const Home = (props: AppProps) => {
  // const [page, setPage] = useState(1);
  // const [search, setSearch] = useState(localStorage.getItem('search') || '');

  // const [isLoading, setIsLoading] = useState(true);
  // const [limit, setLimit] = useState(0);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, [search, page, limit]);

  // const changeLoadingState = (value?: string, pageNumber?: number) => {
  //   // setSearch(search);
  //   // setLimit(limit);
  //   if (value !== search || pageNumber !== page) setIsLoading(true);
  // };

  return (
    <div>
      <Header
        search={props.search}
        limit={props.limit}
        page={props.page}
        // onChangeSearch={() => setSearch(search)}
        // handleClick={changeLoadingState}
      ></Header>
      <Catalog
        search={props.search}
        limit={props.limit}
        page={props.page}
      ></Catalog>
    </div>
  );
};

export default Home;
