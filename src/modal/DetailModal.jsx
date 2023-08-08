import React, { forwardRef } from "react";
import * as S from "./Style";
import VideoBox from "./component/VideoBox";
import NameAndPlayBox from "./component/NameAndPlayBox";
import Describe from "./component/Describe";

const DetailModal = forwardRef((props, ref) => {
  const data = props.data;
  return (
    <S.Wrapper ref={ref} onClick={(e) => props.outsideClose(e)}>
      <S.Box>
        <S.Display>
          <S.CloseBtn onClick={props.onClose}>x</S.CloseBtn>
          <VideoBox />
          <NameAndPlayBox name={data.name} />
        </S.Display>
        <Describe
          summary={data.summary}
          actor={data.actor}
          genre={data.genre}
        />
      </S.Box>
    </S.Wrapper>
  );
});

export default DetailModal;
