import React from "react";
import * as S from "../Style";
import tier from "../../assets/icon/tiers/15.svg";

const ModalVideoDetail = (props) => {
  const data = props.data;
  return (
    <S.ModalVideoDetailWrapper>
      <S.ModalVideoDetailTitle>{data.name} 상세 정보</S.ModalVideoDetailTitle>
      <S.ModalVideoDetailSummary>
        <div style={{ marginBottom: "1rem" }}>
          출연: {data.actor.map((actor) => `${actor}, `)}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          장르: {data.genre.map((genre) => `${genre}, `)}
        </div>
        <div>
          관람 등급: <S.VideoTier src={tier} alt="15세 이상" />
        </div>
      </S.ModalVideoDetailSummary>
    </S.ModalVideoDetailWrapper>
  );
};

export default ModalVideoDetail;
