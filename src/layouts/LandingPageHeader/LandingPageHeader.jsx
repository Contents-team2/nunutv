import React from "react";
import styled from "styled-components";

const LandingPageHeader = () => {
  return (
    <>
      <HeaderComponent>
        <HeaderDiv>
          <TitleDiv>NuNu</TitleDiv>
          <SelectDiv>
              <option value='kor'>한국어</option>
              <option value='eng'>English</option>
          </SelectDiv>
          <ButtonDiv>로그인</ButtonDiv>
        </HeaderDiv>
      </HeaderComponent>
    </>
  );
};

export default LandingPageHeader;

const HeaderComponent = styled.header`
  width: 1500px;
  height: 80px;
  margin: 0px 100px;
  background-color: gray;
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

const TitleDiv = styled.div`
  width: 1300px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 50px;
`;

const SelectDiv = styled.select`
  width: 130px;
  height: 40px;
  margin: 10px 10px;
  background-color: black;
  color: white;
  border-radius: 8px;
  border-width: medium;
  border-color: white;
  text-align: center;
  font-size: 15px;
`;

const ButtonDiv = styled.button`
  width: 70px;
  height: 35px;
  margin: 10px 10px;
  background-color: red;
  color: white;
  border-radius: 8px;
  border: none;
  font-size: 14px;
`;