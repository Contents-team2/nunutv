import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
// import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./pages/Main";
import Join from "./pages/Join";
import FirebaseTest from "./pages/FirebaseTest";
import BackGround from "./modal/BackGround";

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
    path: "join",
    element: <Join />,
  },
  {
    path: "firebase",
    element: <FirebaseTest />,
  },
  {
    path: "/sdf",
    element: <BackGround />,
  },
]);

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
