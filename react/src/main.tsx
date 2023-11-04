import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Page404 } from './components/Page404/Page404.tsx';
import { About } from './components/About/About.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<App />}>
      <Route
        path="/about"
        element={<About />}
        errorElement={<Page404 />}
      ></Route>
      <Route path="*" element={<Page404 />} errorElement={<Page404 />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
