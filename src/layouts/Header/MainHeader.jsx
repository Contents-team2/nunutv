import { useState, useEffect } from "react";

import { HeaderContainer, HeaderWrapper, LogoLink, Navbar } from "./style";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../store/store";

const MainHeader = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const dispatch = useDispatch();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 200) {
      setBgColor("#CCCCFF");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoutHandler = () => {
    console.log("clicked");
    localStorage.removeItem("accessToken");
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Navbar style={{ backgroundColor: bgColor }}>
          <LogoLink to='/'>
            <Logo style={{ width: "92.5px", height: "30px" }} />
          </LogoLink>
          <button onClick={logoutHandler}>logout</button>
        </Navbar>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default MainHeader;
