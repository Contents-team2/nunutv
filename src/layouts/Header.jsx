import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderComponent>
        <HeaderDiv>
          <div class='header'>Nexflix</div>
          <div class='header'>
            <select name='language'>
              <option value='kor'>한국어</option>
              <option value='eng'>English</option>
            </select>
          </div>
          <div class='header'>
            <button>로그인</button>
          </div>
        </HeaderDiv>
      </HeaderComponent>
    </>
  );
};

export default Header;

const HeaderComponent = styled.header`
  width: 100vw;
  height: 80px;
`;

const HeaderDiv = styled.div`
  display: flex;
`;
