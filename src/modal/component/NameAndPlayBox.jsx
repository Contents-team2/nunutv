import React from "react";
import logo from "../logo.svg";
import * as S from "../Style";
import AddLikeBtn from "./AddLikeBtn";
import { styled } from "styled-components";

const StyledPlayIcon = styled.svg`
  width: 1.5rem;
  padding-right: 1rem;
  @media (max-width: 1023px) {
    width: 1rem;
    padding-right: 0.8rem;
  }
  @media (max-width: 767px) {
    width: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const NameAndPlayBox = (props) => {
  return (
    <S.NameAndPlayBox>
      <S.NameBox>
        {props.name === "최애의 아이" && (
          <S.Logo src={logo} alt="로고"></S.Logo>
        )}
      </S.NameBox>
      <S.PlayBox>
        <S.PlayButton onClick={props.playButtonHandler}>
          <StyledPlayIcon
            width="current"
            height="current"
            viewBox="0 0 79 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.17258C0 1.00341 3.39779 -1.00559 6.17467 0.521706L76.6954 39.3081C79.5738 40.891 79.5738 45.0269 76.6954 46.6098L6.17467 85.396C3.39775 86.9235 0 84.9144 0 81.7452V4.17258Z"
              fill="black"
            />
          </StyledPlayIcon>
          <p>재생</p>
        </S.PlayButton>
        <AddLikeBtn />
      </S.PlayBox>
    </S.NameAndPlayBox>
  );
};

export default NameAndPlayBox;
