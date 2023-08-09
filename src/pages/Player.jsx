import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { purgeStore } from '../store/store';




const Player = () => {
    const playUrl = useSelector(state => state.url);
    const playmode = useSelector(state => state.value)
    const navigate = useNavigate()
    const goToHome = () => {
        purgeStore()
        navigate('/')
    }


    //내가 선택한 비디오 URL 전달하기



    return (
        <div>
            <VideoWrapper>
                <ReactPlayer
                    url={playUrl}
                    width='100vw'         // 플레이어 크기 (가로)

                    loop={true}
                    controls={true}
                    playing={true}        // 자동 재생 on 사파리는 안됨

                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                >
                </ReactPlayer>
                <button onClick={goToHome}>홈으로 가기</button>
            </VideoWrapper>
        </div>
    );
};

export default Player;



const VideoWrapper = styled.div`


`;
