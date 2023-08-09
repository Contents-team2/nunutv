import React, { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import ReactPlayer from "react-player";
import * as S from "../Style";

const VideoBox = () => {
  const [url, setUrl] = useState(null);
  const [isMute, setIsMute] = useState(true);

  const starsRef = ref(storage, "real-video.mp4");

  const muteHandler = () => {
    setIsMute((prevIsMute) => !prevIsMute);
  };

  useEffect(() => {
    getDownloadURL(starsRef).then((url) => {
      setUrl(url);
    }, []);
  });

  return (
    <S.VideoBox>
      <S.ThumbVideo>
        <ReactPlayer
          url={url}
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          loop={true}
          playing={true} // 자동 재생 on 사파리는 안됨
          muted={isMute} // 음소거
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
        />
      </S.ThumbVideo>
      <S.VideoOverlay></S.VideoOverlay>
    </S.VideoBox>
  );
};

export default VideoBox;
