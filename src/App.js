import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
// import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./pages/Main";
import FirebaseTest from './pages/FirebaseTest';
import Player from './pages/Player';

//리덕스추가
import { useSelector } from 'react-redux';
import JoinFirst from "./pages/JoinFirst";
import JoinSecond from "./pages/JoinSecond";
import JoinThird from "./pages/JoinThird";


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
    element: <JoinFirst />,
  },
  {
    path: "joinSecond",
    element: <JoinSecond />,
  },
  {
    path: "joinThird",
    element: <JoinThird />,
  },
  {
    path: "firebase",
    element: <FirebaseTest />
  },
  {
    path: "/player",
    element: <Player />
  }
])


const App = () => {

  // 전역상태플레이모드를 가져옴 재생이 시작되었으면 동영상 플레이어만 보여줌
  const playmode = useSelector(state => state.value)

  if (playmode === "start") {
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
  }
  return (
    <>

      {/* <Header /> */}
      <RouterProvider router={router} />
      <Footer />

    </>
  );

};

export default App;