import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from "./pages/Main"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/login",
    element: <Login />
  }
])

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;