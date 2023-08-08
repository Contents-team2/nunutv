import React from "react";
import * as S from "../Style";

const Describe = (props) => {
  return (
    <S.Describe>
      <S.SummaryBox>
        <S.VideoTier>전체</S.VideoTier>
        <S.Summary>{props.summary}</S.Summary>
      </S.SummaryBox>
      <S.ActorAndGenre>
        <S.ActorBox>
          출연: {props.actor.map((actor) => `${actor}, `)}
        </S.ActorBox>
        <S.GenreBox>
          장르: {props.genre.map((genre) => `${genre}, `)}
        </S.GenreBox>
      </S.ActorAndGenre>
    </S.Describe>
  );
};

export default Describe;
