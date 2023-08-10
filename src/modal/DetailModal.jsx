import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//스타일
import * as S from "./Style";
// 컴포넌트
import VideoBox from "./component/VideoBox";
import NameAndPlayBox from "./component/NameAndPlayBox";
import Describe from "./component/Describe";
import VideoList from "./component/videolist/VideoList";
import ModalVideoDetail from "./component/ModalVideoDetail";
import muteBtn from "../assets/icon/muteon.svg";
// 리덕스
import { useDispatch } from "react-redux";
import { play } from "../store/store";

const DetailModal = forwardRef((props, ref) => {
  const data = props.data;

  const [isMute, setIsMute] = useState(true);

  const muteHandler = () => {
    setIsMute((prevIsMute) => !prevIsMute);
  };

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

  const dispatch = useDispatch();
  // 재생모드 라는 상태 가져오기

  const [isScaleUp, setIsScaleUp] = useState(false);
  const navigate = useNavigate();
  // 전역상태로 URL을 보냄
  const playButtonHandler = () => {
    dispatch(play(props.videourl));
    setIsScaleUp(true);
  };
  //화면이 커졌다가 작아지며 /player 페이지로 이동
  if (isScaleUp) {
    const modalTag = document.querySelector(".jNmxLA");
    modalTag.style.transform = "scale(1.3)";
    modalTag.style.transition = "transform 1s ease";
    setTimeout(async () => {
      modalTag.style.transform = "scale(1)";
      navigate("/player");
    }, 800);
  }

  return (
    <S.Wrapper ref={ref} onClick={(e) => props.outsideClose(e)}>
      <S.Box>
        <S.Display>
          <S.CloseBtn onClick={props.onClose}>x</S.CloseBtn>
          <S.MuteBtn src={muteBtn} onClick={muteHandler}></S.MuteBtn>
          <VideoBox isMute={isMute} url={data.video} />
          <NameAndPlayBox
            logo={data.logo}
            playButtonHandler={playButtonHandler}
          />
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
