import React, { forwardRef, useEffect } from "react";
import * as S from "./Style";
import VideoBox from "./component/VideoBox";
import NameAndPlayBox from "./component/NameAndPlayBox";
import Describe from "./component/Describe";
import VideoList from "./component/videolist/VideoList";
import ModalVideoDetail from "./component/ModalVideoDetail";

const DetailModal = forwardRef((props, ref) => {
  const data = props.data;

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <S.Wrapper ref={ref} onClick={(e) => props.outsideClose(e)}>
      <S.Box>
        <S.Display>
          <S.CloseBtn onClick={props.onClose}>x</S.CloseBtn>
          <VideoBox />
          <NameAndPlayBox name={data.name} />
        </S.Display>
        <Describe
          tier={data.tier}
          summary={data.summary}
          actor={data.actor}
          genre={data.genre}
        />
        <VideoList data={data} />
        <ModalVideoDetail data={data} />
      </S.Box>
    </S.Wrapper>
  );
});

export default DetailModal;