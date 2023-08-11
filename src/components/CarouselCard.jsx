import React, { useState } from "react";
import styled from "styled-components";
import CarouselModalBtn from "./CarouselModalBtn";

const Card = (props) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  let timer;

  const cardMouseEnterHandler = () => {
    timer = setTimeout(() => {
      setIsCardHovered(true);
    }, 300);
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
        <CarouselText show={isCardHovered}>
          <CarouselBtnContainer>
            <CarouselModalBtn
              modalHandler={props.modalHandler}
              modalIdxHandler={props.modalIdxHandler}
              id={props.id}
            />
          </CarouselBtnContainer>
        </CarouselText>
      </CarouselCard>
    </CarouselCardContainer>
  );
};

export default Card;

const CarouselBtnContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
`;

const CarouselCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselCard = styled.div`
  position: relative;
  transition: all 0.15s linear;
  &:hover {
    z-index: 2;
    transform: ${(props) => (props.isCardHovered ? "scale(1.5)" : "none")};
  }
`;

const CarouselCardImgContainer = styled.div`
  width: 230px;
  height: 60%;
  margin-right: 5px;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const CarouselCardImg = styled.img`
  max-width: 230px;
  min-width: 230px;
  border-radius: 2.5px;
  cursor: pointer;

  &:hover {
    border-radius: 3px 3px 0 0;
  }
`;

const CarouselText = styled.div`
  z-index: 1;
  width: 230px;
  height: 50%;
  position: absolute;
  left: 49%;
  top: 99%;
  transform: translateX(-50%);
  background-color: black;
  border-radius: 0px 0px 3px 3px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  color: white;
  transition: opacity 0.15s ease-in-out;
  display: flex;
  aligns-items: center;
`;
