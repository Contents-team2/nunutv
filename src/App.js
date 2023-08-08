import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import BackGround from "./modal/BackGround";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sdf",
    element: <BackGround />,
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
