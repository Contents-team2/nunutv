import React from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { useSelector } from 'react-redux';

// 레이아웃
import MainHeader from "./layouts/Header/MainHeader"
import LandingPageHeader from "./layouts/LandingPageHeader/LandingPageHeader"
import Footer from "./layouts/Footer";

import Main from "./pages/Main";
import Player from './pages/Player';
import LandingPage from "./pages/LandingPage";

// 회원가입, 로그인
import JoinFirst from "./pages/JoinFirst";
import JoinSecond from "./pages/JoinSecond";
import JoinThird from "./pages/JoinThird";
import Login from "./pages/Login";

// 예제
import FirebaseTest from './pages/FirebaseTest';
import NotFound from "./pages/NotFound";
import Example, { exampleLoader } from "./pages/Example";
import Error from "./pages/Error";


const App = () => {
  const isLogin = useSelector((state) => state.loginPersistedRudecer.isLogin);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {isLogin ? (
          <Route index element={<Main />} />
        ) : (
          <Route index element={<LandingPage />} />
        )}

        <Route path="login" element={<Login />} />
        <Route path="joinFirst" element={<JoinFirst />} />
        <Route path="joinSecond" element={<JoinSecond />} />
        <Route path="joinThird" element={<JoinThird />} />
        <Route path="firebase" element={<FirebaseTest />} />
        <Route path="player" element={<Player />} />



        <Route path="loader" element={<Example />} loader={exampleLoader} />
        {/* Error page for Specific Path and Sub Path */}
        <Route path="example" element={<Example />} errorElement={<Error />} />
        {/* Error page */}
        <Route path="*" element={<NotFound />} />

      </Route >
    )
  );

  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;

const Root = () => {
  const playmode = useSelector((state) => state.playModePersistedRudecer.value);
  const isLogin = useSelector((state) => state.loginPersistedRudecer.isLogin);
  console.log("isLogin", isLogin);
  console.log("playmode", playmode);
  return (
    <>
      <div>{isLogin ? <MainHeader /> : <LandingPageHeader />}</div>
      <div>
        <Outlet />
      </div>
      <div>{playmode === "start" ? null : <Footer />}</div>
    </>
  );
};
