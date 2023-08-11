import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebase";
import * as S from "../../Style";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = props.data.episodes;
      const dbData = [];

      for (const v of data) {
        try {
          const url = await getDownloadURL(ref(storage, v.thumb));
          dbData.push(url);
        } catch (error) {
          console.error(error);
        }
      }

      const updatedData = data.map((obj, index) => {
        return { ...obj, thumbs: dbData[index] };
      });

      setNewData(updatedData);
    };

    fetchData();
  }, [props.data.episodes]);

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
