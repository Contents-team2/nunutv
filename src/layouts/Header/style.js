import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: auto;
  min-height: 4.375rem;
  z-index: 1;
`;

export const HeaderWrapper = styled.div`
  background-color: transparent;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const Navbar = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  padding: 0 4%;
  position: relative;
  background-color: transparent;
  transform: background-color .4s;
  z-index: 2;
  height: 2.5625rem;
  background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
`;

export const LogoLink = styled(Link)`
  color: #e50914;
  cursor: pointer;
  display: inline-block;
  font-size: 1.8em;
  margin-right: 5px;
  text-decoration: none;
  vertical-align: middle;
`;