import { Home, NotFound, ProductTypes, Products } from 'src/components/screens';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/product/types', element: <ProductTypes /> },
  { path: '/product/units', element: <ProductTypes /> },
  { path: '/product/qualities', element: <ProductTypes /> },
  { path: '/product/statuses', element: <ProductTypes /> },
  { path: '*', element: <NotFound /> },
];

export { routes };
