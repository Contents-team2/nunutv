import React, { useState } from "react";
import { styled } from "styled-components";
import MainBannerLeft from "./MainBannerLeft";
import MainBannerRight from "./MainBannerRight";

import ReactPlayer from "react-player";

const MainBanner = ({ videourl }) => {
  const [isMute, setIsMute] = useState(true);

  const muteHandler = () => {
    setIsMute((prevIsMute) => !prevIsMute);
  };

  return (
    <>
      <MainBannerImage>
        <VideoWrapper>
          <ReactPlayer
            url={videourl}
            width='100%' // 플레이어 크기 (가로)
            height='100%' // 플레이어 크기 (세로)
            loop={true}
            playing={true} // 자동 재생 on 사파리는 안됨
            muted={isMute} // 음소거
            light={false} // 플레이어 모드
            pip={true} // pip 모드 설정 여부
          ></ReactPlayer>
        </VideoWrapper>
        <MainBannerDescription>
          <MainBannerLeft videourl={videourl} />
          <MainBannerRight muteHandler={muteHandler} muteState={isMute} />
        </MainBannerDescription>
      </MainBannerImage>
    </>
  );
};

export default MainBanner;

const MainBannerImage = styled.div`
  display: flex;
  align-items: flex-end;
  width: 1200px;
  height: 600px;
  background-image: url("https://www.themoviedb.org/t/p/original/rKKRrr9UywyCi1pxyRKSOoauO9q.jpg");
  background-size: cover;

  @media (max-width: 1100px) {
    /* 화면 너비가 1100px 미만일 때 스타일 적용 */
    height: 400px;
  }
  @media (max-width: 710px) {
    /* 화면 너비가 768px 미만일 때 스타일 적용 */
    height: 284px;
  }

  @media screen {
  }
`;

const MainBannerDescription = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-content: space-between;
`;

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
`;
