import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/icon/search.svg";
import { ReactComponent as Bell } from "../../assets/icon/bell.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../store/store";

const MainHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer scrollPosition={scrollPosition}>
        <HeaderWrapper>
          <HeaderContents scrollPosition={scrollPosition}>
            <LogoBox href="/">
              <Img src="/images/logo/nunutv-logo.png" alt="nunutv" />
              <TitleSpan>NuNu</TitleSpan>
            </LogoBox>
            <button onClick={logoutHandler}>logout</button>

            <NavUl>
              <li>
                <a href="/">메뉴</a>
                {/* <div style={{opacity: '1', transitionDuration: '150ms'}}></div> */}
              </li>

              <li>
                <a href="/" className="current">
                  홈
                </a>
              </li>

              <li>
                <a href="/">시리즈</a>
              </li>

              <li>
                <a href="/">영화</a>
              </li>

              <li>
                <a href="/">NEW!요즘 대세 콘텐츠</a>
              </li>

              <li>
                <a href="/">내가 찜한 콘텐츠</a>
              </li>

              <li>
                <a href="/">언어별로 찾아보기</a>
              </li>
            </NavUl>

            <SecNav>
              <div>
                <SearchBox>
                  <button>
                    <Search />
                  </button>
                </SearchBox>
              </div>

              <div className="show-kids">
                <a href="/">키즈</a>
              </div>

              <div>
                <Notification>
                  <button>
                    <Bell />
                    {/* 알림 */}
                    {/* <span className="pill">1</span> */}
                  </button>
                </Notification>
              </div>

              <div>
                <AccountMenu>
                  <AccountDropDown>
                    <a href="/">사진</a>

                    <span></span>

                    <div></div>
                  </AccountDropDown>
                </AccountMenu>
              </div>
            </SecNav>
          </HeaderContents>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default MainHeader;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  height: auto;
  min-height: fit-content;
  width: 100%;
  max-width: 100vw;
  z-index: 1;
  transition: background-color 0.4s;
  background-color: ${(props) =>
    props.scrollPosition > 0 ? "#000" : "transparent"};
`;

const HeaderWrapper = styled.div`
  left: 0;
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;
  background: transparent;
`;

const HeaderContents = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  padding: 1rem;
  position: relative;
  transition: background-color 0.4s;
  z-index: 2;
  background-color: ${(props) =>
    props.scrollPosition > 0 ? "#000" : "transparent"};
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
  height: 41px;

  @media (min-width: 75rem) {
    font-size: 14px;
  }
`;

const LogoBox = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;

  @media (min-width: 71.875rem) {
    margin-right: 25px;
  }
`;

const Img = styled.img`
  width: 8rem;
  height: 2rem;
`;

const TitleSpan = styled.span`
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
  word-break: keep-all;
`;

const NavUl = styled.ul`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    font-size: 14px;
    list-style-type: none;
    margin-left: 18px;

    @media (min-width: 83.125rem) {
      margin-left: 20px;
    }

    a {
      color: #fff;
      cursor: pointer;
      text-decoration: none;
    }

    .current {
      color: #fff;
      cursor: default;
      font-weight: 500;
    }
  }

  li:first-child {
    @media (min-width: 55.3125rem) {
      display: none;
    }

    a {
      align-items: center;
      display: flex;
      font-weight: 500;
      height: 100%;
    }

    div {
      background-color: rgba(0, 0, 0, 0.9);
      border: 1px solid hsla(0, 0%, 100%, 0.15);
      box-sizing: border-box;
      color: #fff;
      cursor: default;
      font-size: 13px;
      line-height: 21px;
      opacity: 0;
      position: absolute;
      top: 71px;
      margin-left: -90px;
    }
  }

  li:nth-child(n + 2) {
    @media (max-width: 55.3125rem) {
      display: none;
    }

    a {
      align-items: center;
      color: #e5e5e5;
      display: flex;
      height: 100%;
      position: relative;
      transition: color 0.4s;
    }
  }

  li:nth-child(n + 3) {
    a {
      &:hover {
        color: #b3b3b3;
      }
    }
  }
`;

const SecNav = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 4%;

  @media (min-width: 93.75rem) {
    right: 60px;
  }

  div {
    &:not(:last-child) {
      margin-right: 10px;
    }
    @media (min-width: 83.125rem) {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  .show-kids {
    display: none;
    font-size: 14px;

    @media (min-width: 68.75rem) {
      display: block;
    }

    a {
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      display: block;
    }
  }
`;

const SearchBox = styled.div`
  display: inline-block;
  vertical-align: middle;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
  }
`;

const Notification = styled.span`
  position: relative;
  white-space: normal;

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    line-height: 1;
    margin-top: 0.2em;
    padding: 2px 6px 3px;
    position: relative;
  }

  .pill {
    background-color: #b9090b;
    border: none;
    border-radius: 100%;
    color: #fff;
    display: inline-block;
    font-size: 0.5em;
    font-weight: 500;
    line-height: 1;
    min-width: 1em;
    padding: 0.3em;
    text-align: center;
    position: absolute;
    right: -0.1em;
    top: -0.25em;
    z-index: 2;
  }
`;

const AccountMenu = styled.div`
  display: block;
  font-size: 12px;
  position: relative;
  z-index: 0;
`;

const AccountDropDown = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  width: 100%;

  a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    z-index: -1;
    display: block;
  }

  span {
    border-color: #fff transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    height: 0;
    margin-left: 10px;
    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
    width: 0;
  }

  div {
    background-color: rgba(0, 0, 0, 0.9);
    border: 1px solid hsla(0, 0%, 100%, 0.15);
    box-sizing: border-box;
    color: #fff;
    cursor: default;
    font-size: 13px;
    line-height: 21px;
    opacity: 0;
    position: absolute;
    top: 71px;
    margin-left: -90px;

    @media (min-width: 59.375rem) {
      top: 64px;
    }
  }

  &:hover {
    span {
      transform: rotate(180deg);
    }
  }
`;
