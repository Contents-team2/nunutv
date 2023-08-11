import React, { useState } from "react";
import styled from "styled-components";

export default function Top10Card(props) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const cardMouseEnterHandler = () => {
    setIsCardHovered(true);
  };

  const cardMouseLeaveHandler = () => {
    setIsCardHovered(false);
  };

  //뒤에 이미지 있고 줄어들면서 opacity 0으로 되는 느낌
  //hover됐을 때 다른 컴포넌트에 가려짐 margin하면 carousel 간의 간격이 너무 넓어짐

  return (
    <CarouselCardContainer>
      <CarouselCard
        isCardHovered={isCardHovered}
        onMouseLeave={cardMouseLeaveHandler}
      >
        <CarouselCardImgContainer onMouseEnter={cardMouseEnterHandler}>
          <CarouselCardTop10Img src={props.img} alt={props.alt} />
          <CarouselCardImg src={props.src} alt={props.alt} />
        </CarouselCardImgContainer>
        <CarouselText show={isCardHovered}>설명</CarouselText>
      </CarouselCard>
    </CarouselCardContainer>
  );
}
const CarouselCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselCard = styled.div`
  position: relative;
  max-width: 114px;
  min-width: 114px;
  height: 162px;
  transition: all 0.3s 1.5s linear;
  &:hover {
    z-index: 999;
    transform: ${(props) => (props.isCardHovered ? "scale(1.5)" : "none")};
  }
`;

const CarouselCardImgContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
`;

const CarouselCardImg = styled.img`
  max-width: 114px;
  min-width: 114px;
  height:162px
  padding-right: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    border-radius: 3px 3px 0 0;
  }
`;

const CarouselCardTop10Img = styled.img`
  max-width: 114p;
  min-width: 114px;
  border-radius: 3px;
  cursor: pointer;
`;

const CarouselText = styled.div`
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
