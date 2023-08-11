import React, { useState } from "react";
import styled from "styled-components";

const Card = (props) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const cardMouseEnterHandler = () => {
    setIsCardHovered(true);
  };

  const cardMouseLeaveHandler = () => {
    setIsCardHovered(false);
  };

  return (
    <CarouselCardContainer>
      <CarouselCard
        isCardHovered={isCardHovered}
        onMouseLeave={cardMouseLeaveHandler}
      >
        <CarouselCardImgContainer onMouseEnter={cardMouseEnterHandler}>
          <CarouselCardImg src={props.src} alt={props.alt} />
        </CarouselCardImgContainer>
        <CarouselText show={isCardHovered}>설명</CarouselText>
      </CarouselCard>
    </CarouselCardContainer>
  );
};

export default Card;

const CarouselCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselCard = styled.div`
  position: relative;

  transition: all 0.3s 1.5s linear;
  &:hover {
    z-index: 999;
    transform: ${(props) => (props.isCardHovered ? "scale(1.5)" : "none")};
  }
`;

const CarouselCardImgContainer = styled.div`
  width: 230px;
  height: 100%;
  position: relative;
`;

const CarouselCardImg = styled.img`
  max-width: 230px;
  min-width: 227px;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    border-radius: 3px 3px 0 0;
  }
`;

const CarouselText = styled.div`
  z-index: 999;
  width: 100%;
  height: 50%;
  position: absolute;
  left: 50%;
  top: 67.5%;
  transform: translateX(-50%);
  background-color: black;
  border-radius: 0px 0px 3px 3px;
  opacity: ${(props) => (props.show ? "0.7" : "0")};
  color: white;
  transition: opacity 0.3s 1.5s ease-in-out;
`;
