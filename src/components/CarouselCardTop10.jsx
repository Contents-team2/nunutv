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
        <CarouselCardImagesContainer>
          <CarouselCardImgContainer onMouseEnter={cardMouseEnterHandler}>
            <CarouselCardTop10Img src={props.img} alt={props.alt} />
            <CarouselCardImg src={props.src} alt={props.alt} />
          </CarouselCardImgContainer>
        </CarouselCardImagesContainer>
      </CarouselCard>
    </CarouselCardContainer>
  );
}
const CarouselCardContainer = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselCard = styled.div`
  position: relative;
  max-width: 228px;
  min-width: 228px;
  height: 162px;
`;

const CarouselCardImgContainer = styled.div`
  width: 228px;
  height: 162px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselCardImagesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselCardImg = styled.img`
  max-width: 114px;
  min-width: 114px;
  height: 162px;
  padding-right: 5px;
  border-radius: 3px;
  cursor: pointer;
`;

const CarouselCardTop10Img = styled.img`
  max-width: 100p;
  min-width: 100px;
  height: 150px;
  cursor: pointer;
  left: 100%;
`;
