import React from "react";
import * as S from "../../Style";

const VideoCard = ({ data }) => {
  return (
    <S.ListCardWrapper>
      <S.CardId>{data.id}</S.CardId>
      <S.CardThumbs src={data.thumbs} alt="썸네일" />

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
