import React, { useState } from "react";
import styled from "styled-components";
import * as S from "../../Style";

const StyledPlayIcon = styled.svg`
  width: 4rem;
  cursor: pointer;
  fill-opacity: 0.3;
  fill: black;
  stroke: white;
  @media (max-width: 1023px) {
    width: 2.5rem;
  }
  @media (max-width: 767px) {
    width: 1.5rem;
  }
`;

const VideoCard = ({ data }) => {
  const [isPlayBtn, setIsPlayBtn] = useState(false);

  const hoverPlayBtnHandler = () => {
    setIsPlayBtn(true);
  };

  const leavePlayBtnHandler = () => {
    setIsPlayBtn(false);
  };
  return (
    <S.ListCardWrapper
      onMouseEnter={hoverPlayBtnHandler}
      onMouseLeave={leavePlayBtnHandler}
    >
      <S.CardId>{data.id}</S.CardId>
      <S.CardThumbs
        style={{
          backgroundImage: `url(${data.thumbs})`,
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
        alt="썸네일"
      >
        {isPlayBtn && (
          <StyledPlayIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clip-rule="evenodd"
            />
          </StyledPlayIcon>
        )}
      </S.CardThumbs>
      <S.CardDescribe>
        <S.CardDescribeHeader>
          <div>{data.title}</div>
          <div>{data.min}분</div>
        </S.CardDescribeHeader>
        <S.CardDescribeSummary>{data.summary}</S.CardDescribeSummary>
      </S.CardDescribe>
    </S.ListCardWrapper>
  );
};

export default VideoCard;
