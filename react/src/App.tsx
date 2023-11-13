import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { SearchProvider } from './context';

function App() {
  return (
    <SearchProvider>
      <div className="container">
        <Home></Home>
        <Outlet></Outlet>
      </div>
    </SearchProvider>
  );
}
export default App;
