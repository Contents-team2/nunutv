import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { purgeStore } from '../store/store';
import { ReactComponent as BackArrowIcon } from "../assets/icon/backarrow.svg"



const debounce = (cb, timerRef, time) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
        cb();
    }, time);
};


const Player = () => {
    const playUrl = useSelector(state => state.url);
    const playmode = useSelector(state => state.value)
    const navigate = useNavigate()
    const timeRef = useRef(null)

    //마우스 움직임 감지
    const [isMouseMoving, setIsMouseMoving] = useState(true)
    // 마우스움직임시 div 출현

    useEffect(() => {
        const MouseMovingHandler = (event) => {
            setIsMouseMoving(true)
            debounce(() => {
                setIsMouseMoving(false)
            }, timeRef, 2800)
        }
        //마우스움직임 감지하면 MouseMovingHandler 위에꺼 실행
        window.addEventListener('mousemove', MouseMovingHandler);
        return () => {
            window.removeEventListener("mousemove", MouseMovingHandler);
        }

    }, [isMouseMoving])


    console.log(isMouseMoving)


    const goToHome = () => {
        purgeStore()
        navigate('/')
    }

    return (
        <>
            <VideoWrapper>

                <GoToHome isMouseMoving={isMouseMoving}>
                    <BackArrowIcon width={35} height={35} onClick={goToHome} />
                </GoToHome>
                <ReactPlayer
                    url={playUrl}
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'
                    loop={true}
                    controls={true}
                    playing={true}        // 자동 재생 on 사파리는 안됨
                    volume={0.5}
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                >
                </ReactPlayer>

            </VideoWrapper >
        </>
    );
};

export default Player;



const VideoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: black;

`

const GoToHome = styled.div`
    z-index: 2;
    cursor: pointer;
    width: 90%;
    height: 80px;
    position: absolute;
    top: 100px;
    display: ${props => props.isMouseMoving ? 'block' : 'none'};
`
