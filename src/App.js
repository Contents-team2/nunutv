import React from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./pages/Login";
import MainHeader from "./layouts/Header/MainHeader"
import Footer from "./layouts/Footer";
import Main from "./pages/Main";
import FirebaseTest from './pages/FirebaseTest';
import Player from './pages/Player';

//리덕스추가
import { useSelector } from 'react-redux';
import JoinFirst from "./pages/JoinFirst";
import JoinSecond from "./pages/JoinSecond";
import JoinThird from "./pages/JoinThird";
import LandingPage from "./pages/LandingPage";
import LandingPageHeader from "./layouts/LandingPageHeader/LandingPageHeader"


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
  const isLogin = useSelector(state => state.loginPersistedRudecer.isLogin)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {isLogin ? <Route index element={<Main />} /> : <Route index element={<LandingPage />} />}

        <Route path="login" element={<Login />} />
        <Route path="joinFirst" element={<JoinFirst />} />
        <Route path="joinSecond" element={<JoinSecond />} />
        <Route path="joinThird" element={<JoinThird />} />
        <Route path="firebase" element={<FirebaseTest />} />
        <Route path="player" element={<Player />} />

      </Route >
    )
  )

  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;


const Root = () => {
  const playmode = useSelector(state => state.playModePersistedRudecer.value)
  const isLogin = useSelector(state => state.loginPersistedRudecer.isLogin)
  console.log("isLogin", isLogin)
  console.log("playmode", playmode)
  return (
    <>
      <div>
        {isLogin ? <MainHeader /> : <LandingPageHeader />}

      </div>
      <div>
        <Outlet />
      </div>
      <div>
        {playmode === "start" ? null : <Footer />}
      </div>
    </>
  )
}