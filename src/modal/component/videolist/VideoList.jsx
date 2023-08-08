import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebase";
import * as S from "../../Style";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // 데이터 가져오는 비동기 작업
      const data = [1, 2, 3, 4];
      const dbData = [];
      const storageRef = ref(storage);
      const imagesRef = ref(storageRef, "images");

      for (const v of data) {
        try {
          const url = await getDownloadURL(ref(imagesRef, `thumbs${v}.jpg`));
          dbData.push(url);
        } catch (error) {
          console.error(error);
        }
      }

      const seriesData = props.data.series;
      const updatedData = seriesData.map((obj, index) => {
        return { ...obj, thumbs: dbData[index] };
      });

      setNewData(updatedData);
    };

    fetchData();
  }, [props.data.series]);

  console.log(newData);

  return (
    <S.VideoList>
      <S.ListHeader>
        <S.ListInfo>회차</S.ListInfo>
        <S.ListTitle>{props.data.name}</S.ListTitle>
      </S.ListHeader>
      {newData.map((data) => (
        <VideoCard data={data} />
      ))}
    </S.VideoList>
  );
};

export default VideoList;
