import React from "react";
import * as S from "../Style";
import tier from "../../assets/icon/tiers/15.svg";

const Describe = (props) => {
  return (
    <S.Describe>
      <S.SummaryBox>
        <S.VideoTierBox>
          {props.tier === 15 && <S.VideoTier src={tier} alt="15세" />}
        </S.VideoTierBox>
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
