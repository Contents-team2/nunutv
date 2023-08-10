import React from "react";
import styled from "styled-components";
import LanguageBox from "../../Components/LanguageBox";

const LandingPageHeader = () => {
  return (
    <>
      <HeaderComponent>
        <HeaderDiv>
          <LogoBox>
            <Img src='/images/logo/nunutv-logo.png' alt='nunutv' />
            <TitleSpan>NuNu</TitleSpan>
          </LogoBox>
          <SelectBox>
            <LanguageBox />
          </SelectBox>
          <ButtonBox>
            <LoginAnchor>로그인</LoginAnchor>
          </ButtonBox>
        </HeaderDiv>
      </HeaderComponent>
    </>
  );
};

export default LandingPageHeader;

const HeaderComponent = styled.header`
  position: relative;
  z-index: 1;
`;

const HeaderDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  height: 5rem;
  left: 0;
  right: 0;
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
`;

const LogoBox = styled.span`
  margin: 0 1rem;
  margin-left: 0;
  margin-right: auto;
`;

const Img = styled.img`
  width: 9rem;
  height: 3rem;
  display: block;
`;

const TitleSpan = styled.span`
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
  word-break: keep-all;
`;

const SelectBox = styled.span`
  margin-right: 0;
`;

const ButtonBox = styled.span`
  padding: 0 1%;
`;

const LoginAnchor = styled.a`
  background-color: #e50914;
  padding: 6px 20px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  word-break: keep-all;
`;
