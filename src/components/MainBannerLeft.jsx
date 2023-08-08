import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import { ReactComponent as PlayIcon } from "../asset/icon/play.svg";
import { ReactComponent as DetailIcon } from "../asset/icon/detail.svg";
import ModalPortal from "../modal/ModalPortal";
import DetailModal from "../modal/DetailModal";
import thumbs1 from "../asset/modalthumbs/thumbs1.png";
import thumbs2 from "../asset/modalthumbs/thumbs2.png";
import thumbs3 from "../asset/modalthumbs/thumbs3.png";
import thumbs4 from "../asset/modalthumbs/thumbs4.png";

const MainBannerLeft = () => {
  const data = {
    id: 1,
    video: 1,
    name: "최애의 아이",
    tier: 15,
    actor: ["호시노 아이", "호시노 루비"],
    genre: ["환생", "아이돌", "성장"],
    summary: `지방도시에서 산부인과 전문의로 일하는 고로는 연예계와 아무런 접점이 없는 나날을 보내고 있었다.
            
            한편, 그의 '최애' 아이돌인 호시노 아이는   
            차츰 스타덤에 오르고 있었다.
            
            그런 두 사람이 '최악'의 형태로 만나
            운명이 움직이기 시작하는데...?!`,
    series: [
      {
        id: 1,
        thumbs: thumbs1,
        title: "제1장",
        min: 24,
        summary:
          "의사 아마미야 고로가 근무하는 병원에서 그가 열광하는 호시노 아이가 임신을 해서 방문하게 되고 무사히 출산엔 성공하지만 아마미야 고로는 스토커에 의해서 절벽에서 낙사하고 만다.",
      },
      {
        id: 2,
        thumbs: thumbs2,
        title: "제2장: 연예계",
        min: 36,
        summary:
          "아쿠아는 아리마 카나와 재회한 것을 계기로 카부라기를 만나기 위해 오늘은 달콤하게에 출연해 배우 활동을 시작한다.",
      },
      {
        id: 3,
        thumbs: thumbs3,
        title: "제3장: 연애 리얼리티 쇼",
        min: 18,
        summary:
          "아쿠아는 연애 리얼리티 쇼 지금부터 리얼 러브 ♡ 시작합니다에 출연하게 되고, 루비는 아리마와 함께 아이돌 유닛 B 코마치로 데뷔한다.",
      },
      {
        id: 4,
        thumbs: thumbs4,
        title: "제4장: 퍼스트 스테이지",
        min: 41,
        summary:
          "MEM쵸의 가입 이후 신생 B 코마치의 유투브 구독자도 1만명을 달성하고 카부라기 마사야 PD에 의해 아쿠아는 아이의 전 연인이 극단 라라라이 소속이었다는 정보를, B 코마치는 JIF에서 데뷔 무대를 치를 기회를 얻는다.",
      },
    ],
  };

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
          <DetailModal
            ref={modalRef}
            outsideClose={outsideCloseHandler}
            onClose={onCloseBtn}
            data={data}
          />
        </ModalPortal>
      )}
      <MainBannerLeftTitle>최애의 아이</MainBannerLeftTitle>

      <div style={{ display: "flex", marginBottom: "50px" }}>
        <PlayButton>
          <PlayIcon
            width="1.5rem"
            height="1.5rem"
            style={{ marginRight: "1rem" }}
          />
          <p>재생</p>
        </PlayButton>
        <DetailButton onClick={modalHandler}>
          <DetailIcon
            width="1.5rem"
            height="1.5rem"
            style={{ marginRight: "1rem" }}
          />
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
  width: 70%;
  height: 100%;
  background-color: rgba(201, 201, 201, 0.5);
  padding-left: 5%;
`;

const MainBannerLeftTitle = styled.div`
  font-size: 6rem;
  font-weight: 600;
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  font-family: "Black Han Sans", sans-serif;
  margin-bottom: 2rem;
`;

const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: white;
  font-weight: 600;
  padding: 0px 10px;
`;

const DetailButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: #515053;
  margin-left: 1rem;
  color: white;
  padding: 0px 10px;
`;
