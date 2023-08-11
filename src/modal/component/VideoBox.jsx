import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import * as S from "../Style";

const VideoBox = (props) => {
  const [videoUrl, setVideoUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = props.url;

      try {
        const url = await getDownloadURL(ref(storage, data));
        setVideoUrl(url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.url]);
  return (
    <S.VideoBox>
      <S.ThumbVideo>
        <ReactPlayer
          url={videoUrl}
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          loop={true}
          playing={true} // 자동 재생 on 사파리는 안됨
          muted={props.isMute} // 음소거
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
        />
      </S.ThumbVideo>
      <S.VideoOverlay></S.VideoOverlay>
    </S.VideoBox>
  );
};

export default VideoBox;
