import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="container">
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
