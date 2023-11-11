import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { SearchProvider } from './context';

export interface AppProps {
  limit: number;
  page: number;
  search: string;
}

function App(props: AppProps) {
  return (
    <SearchProvider>
      <div className="container">
        <Home
          limit={props.limit}
          page={props.page}
          search={props.search}
        ></Home>
        <Outlet></Outlet>
      </div>
    </SearchProvider>
  );
}
export default App;
