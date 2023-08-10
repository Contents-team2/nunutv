import React, { useState } from "react";
import testImg from "../assets/test.jpg";
import { styled } from "styled-components";

const Test = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const cardMouseEnterHandler = () => {
    setIsCardHovered(true);
  };

  const cardMouseLeaveHandler = () => {
    setIsCardHovered(false);
  };

  return (
    <TestDiv>
      <TestCard
        isCardHovered={isCardHovered}
        onMouseLeave={cardMouseLeaveHandler}
      >
        <ImgDiv onMouseEnter={cardMouseEnterHandler}>
          <TestImg src={testImg} alt="테스트 이미지" />
        </ImgDiv>
        <TestText show={isCardHovered}>설명</TestText>
      </TestCard>
    </TestDiv>
  );
};

export default Test;

const TestDiv = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestCard = styled.div`
  position: relative;
  margin-bottom: 5rem;
  width: 12rem;
  height: 12rem;
  transition: all 0.3s linear;
  &:hover {
    transform: ${(props) => (props.isCardHovered ? "scale(1.5)" : "none")};
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

const TestImg = styled.img`
  width: 100%;
  height: 100%;
`;

const TestText = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  border-radius: 0.25rem;
  opacity: ${(props) => (props.show ? "0.7" : "0")};
  color: white;
  transition: opacity 0.3s ease-in-out;
`;
