import React from "react";
import logo from "../logo.svg";
import * as S from "../Style";

const NameAndPlayBox = (props) => {
  return (
    <S.NameAndPlayBox>
      <S.NameBox>
        {props.name === "최애의 아이" && (
          <S.Logo src={logo} alt="로고"></S.Logo>
        )}
      </S.NameBox>
      <S.PlayBox>
        <S.PlayBtn>재생</S.PlayBtn>
        <div>찜</div>
        <div>좋아요</div>
      </S.PlayBox>
    </S.NameAndPlayBox>
  );
};

export default NameAndPlayBox;
