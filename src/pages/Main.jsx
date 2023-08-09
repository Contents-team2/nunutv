import React, { useState, useEffect } from "react";
import MainBanner from "../components/MainBanner";
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { play, stop } from "../store/store"


const Main = () => {

    //파이어베이스에서 영상의 URL을 가져오는 기능
    const [url, setUrl] = useState(null)
    const starsRef = ref(storage, "real-video.mp4");
    useEffect(() => {
        getDownloadURL(starsRef).then((url) => {
            setUrl(url)
        }, [])
    });

    // 전역상태 : 페이지URL을 기준으로 playmode 라는 상태를 만들었음
    // "/player" 라는 url경로로 들어가면 영상이 시작되는것을 의미함 플레이어 작동
    const dispatch = useDispatch();
    const location = useLocation();
    const playMode = useSelector(state => state.value);
    useEffect(() => {
        if (location.pathname === "/player") {
            dispatch(play(url));
        } else {

            dispatch(stop());
        }
    }, [dispatch, location]);


    return (
        <>
            {url !== null ? <MainBanner videourl={url} /> : <MainBanner />}
        </>
    );

};

export default Main;
