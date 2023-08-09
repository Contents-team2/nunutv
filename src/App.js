import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './layouts/Footer';
import Main from "./pages/Main";
import Join from './pages/Join';
import FirebaseTest from './pages/FirebaseTest';
import LandingPageHeader from './layouts/LandingPageHeader/LandingPageHeader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "join",
    element: <Join />
  },
  {
    path: "firebase",
    element: <FirebaseTest />
  }
])

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <LandingPageHeader />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
