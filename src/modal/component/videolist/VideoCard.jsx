import React from "react";
import * as S from "../../Style";

const VideoCard = ({ series }) => {
  return (
    <S.ListCardWrapper>
      <S.CardId>{series.id}</S.CardId>
      <S.CardThumbs src={series.thumbs} alt="썸네일" />
      <S.CardDescribe>
        <S.CardDescribeHeader>
          <div>{series.title}</div>
          <div>{series.min}분</div>
        </S.CardDescribeHeader>
        <S.CardDescribeSummary>{series.summary}</S.CardDescribeSummary>
      </S.CardDescribe>
    </S.ListCardWrapper>
  );
};

export default VideoCard;
