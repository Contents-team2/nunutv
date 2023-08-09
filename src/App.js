import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Carousel from "./pages/Carousel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Carousel />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

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
