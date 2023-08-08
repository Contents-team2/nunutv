import React from "react";
import logo from "../logo.svg";
import * as S from "../Style";
import { ReactComponent as PlayIcon } from "../../asset/icon/play.svg";
import { ReactComponent as AddIcon } from "../../asset/icon/add.svg";
import { ReactComponent as LikeIcon } from "../../asset/icon/like.svg";

const NameAndPlayBox = (props) => {
  return (
    <S.NameAndPlayBox>
      <S.NameBox>
        {props.name === "최애의 아이" && (
          <S.Logo src={logo} alt="로고"></S.Logo>
        )}
      </S.NameBox>
      <S.PlayBox>
        <S.PlayButton>
          <PlayIcon
            width="1.5rem"
            height="1.5rem"
            style={{ marginRight: "1rem" }}
          />
          <p>재생</p>
        </S.PlayButton>
        <AddIcon
          width="2rem"
          style={{ marginLeft: "1rem", cursor: "pointer", color: "grey" }}
        />
        <LikeIcon
          width="2rem"
          style={{ marginLeft: "1rem", cursor: "pointer", color: "grey" }}
        />
      </S.PlayBox>
    </S.NameAndPlayBox>
  );
};

export default NameAndPlayBox;
