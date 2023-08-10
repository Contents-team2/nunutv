import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { ReactComponent as PlayIcon } from "../assets/icon/play.svg";
import { ReactComponent as DetailIcon } from "../assets/icon/detail.svg";
import { ReactComponent as Logo } from "../assets/icon/logo.svg";
import { useNavigate } from "react-router-dom";
//리액트 리덕스 추가
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { play } from "../store/store";
import { database } from "../firebase/firebase";
import { child, get, ref } from "@firebase/database";
import ModalPortal from "../modal/ModalPortal";
import DetailModal from "../modal/DetailModal";

const MainBannerLeft = ({ videourl }) => {
  const dispatch = useDispatch();
  // 재생모드 라는 상태 가져오기
  const playMode = useSelector((state) => state.value);
  console.log(playMode);

  const [isScaleUp, setIsScaleUp] = useState(false);
  const navigate = useNavigate();
  // 전역상태로 URL을 보냄
  const playButtonHandler = () => {
    dispatch(play(videourl));
    setIsScaleUp(true);
  };
  //화면이 커졌다가 작아지며 /player 페이지로 이동
  if (isScaleUp) {
    const bodyTag = document.querySelector("body");
    bodyTag.style.transform = "scale(1.3)";
    bodyTag.style.transition = "transform 1s ease";
    setTimeout(async () => {
      bodyTag.style.transform = "scale(1)";
      navigate("/player");
    }, 800);
  }

  const [videosData, setVideosData] = useState({});

  useEffect(() => {
    get(child(ref(database), "/videos"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setVideosData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const modalRef = useRef();

  const outsideCloseHandler = (event) => {
    if (modalRef.current === event.target) setIsModalOpen(false);
  };

  const modalHandler = () => {
    setScrollPosition(window.scrollY);
    setIsModalOpen(true);
  };

  const onCloseBtn = () => {
    setIsModalOpen(false);
    window.scrollTo(0, scrollPosition);
  };
  return (
    <Container>
      {isModalOpen && (
        <ModalPortal>
          <DetailModal ref={modalRef} outsideClose={outsideCloseHandler} onClose={onCloseBtn} data={videosData} />
        </ModalPortal>
      )}
      <MainBannerLeftTitle>
        <Logo width='100%' height='100%' />
      </MainBannerLeftTitle>

      <div style={{ display: "flex", marginBottom: "50px" }}>
        <PlayButton onClick={playButtonHandler}>
          <PlayIcon width='1.5rem' height='1.5rem' style={{ marginRight: "1rem" }} />
          <p>재생</p>
        </PlayButton>
        <DetailButton onClick={modalHandler}>
          <DetailIcon width='1.5rem' height='1.5rem' style={{ marginRight: "1rem" }} />
          <p>상세 정보</p>
        </DetailButton>
      </div>
    </Container>
  );
};

export default MainBannerLeft;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  width: 30%;
  height: 100%;
  padding-left: 5%;
`;

const MainBannerLeftTitle = styled.div`
  width: 450px;
  height: 150px;
  @media (max-width: 710px){
    width: 270px;
  height: 90px;
  }
`;

const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  min-width: 100px;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: white;
  font-weight: 600;
  padding: 0px 10px;
  &:hover{
    background-color: rgba(255, 255, 255,0.6);
  }

`;

const DetailButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  min-width: 100px;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: #515053;
  margin-left: 1rem;
  color: white;
  padding: 0px 10px;
  &:hover{
    background-color: rgba(81, 80, 83, 0.6);
  }
`;
