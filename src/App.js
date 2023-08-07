import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer';

const RootLayout = () => (
  <>
    <Header />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <div>123</div>
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;