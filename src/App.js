
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './layouts/Footer';
import Main from "./pages/Main";
import FirebaseTest from './pages/FirebaseTest';
import JoinFirst from './pages/JoinFirst';
import JoinSecond from './pages/JoinSecond';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "joinFirst",
    element: <JoinFirst />
  },
  {
    path: "/joinSecond",
    element: <JoinSecond />
  },
  {
    path: "firebase",
    element: <FirebaseTest />,
  },
]);

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <JoinFirst />
      <JoinSecond />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
