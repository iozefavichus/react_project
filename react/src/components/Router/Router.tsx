import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '../Page404/Page404';
import App from '../../App';
import ProductDetails from '../ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App limit={10} page={1} search={''} />,
    errorElement: <Page404 />,
    children: [
      {
        path: 'detail/:id/:search/:skip/:limit',
        element: <ProductDetails />,
      },
      {
        path: '/*',
        element: <Page404 />,
      },
    ],
  },
]);

export default router;
