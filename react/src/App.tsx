import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

export interface AppProps {
  limit: number;
  page: number;
  search: string;
}

function App(props: AppProps) {
  return (
    <div className="container">
      <Home limit={props.limit} page={props.page} search={props.search}></Home>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
