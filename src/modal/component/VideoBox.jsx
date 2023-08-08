import React from "react";
import * as S from "../Style";
import video from "../video.mp4";

const VideoBox = () => {
  return (
    <S.VideoBox>
      <S.ThumbVideo autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </S.ThumbVideo>
      <S.VideoOverlay></S.VideoOverlay>
    </S.VideoBox>
  );
};

export default VideoBox;
