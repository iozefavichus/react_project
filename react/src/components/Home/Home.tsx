import Header from '../Search/Search';
import Catalog from '../CardList/CardList';

export interface AppProps {
  limit: number;
  page: number;
  search: string;
}

const Home = (props: AppProps) => {
  return (
    <div>
      <Header
        search={props.search}
        limit={props.limit}
        page={props.page}
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
