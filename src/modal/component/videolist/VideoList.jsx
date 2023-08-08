import React from "react";
import * as S from "../../Style";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
  const data = props.data;
  return (
    <S.VideoList>
      <S.ListHeader>
        <S.ListInfo>회차</S.ListInfo>
        <S.ListTitle>{data.name}</S.ListTitle>
      </S.ListHeader>
      {data.series.map((series) => (
        <VideoCard series={series} />
      ))}
    </S.VideoList>
  );
};

export default VideoList;
