import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as PlayIcon } from '../asset/icon/play.svg';
import { ReactComponent as DetailIcon } from '../asset/icon/detail.svg';


const MainBannerLeft = () => {
    return (
        <Container>
            <MainBannerLeftTitle>최애의 아이</MainBannerLeftTitle>

            <div style={{ display: "flex", marginBottom: "50px" }}>
                <PlayButton>
                    <PlayIcon width="1.5rem" height="1.5rem" style={{ marginRight: "1rem" }} />
                    <p>재생</p>
                </PlayButton>
                <DetailButton>
                    <DetailIcon width="1.5rem" height="1.5rem" style={{ marginRight: "1rem" }} />
                    <p>상세 정보</p>
                </DetailButton>
            </div>

        </Container >
    );
};

export default MainBannerLeft;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 70%;
    height:  100%;
    background-color: rgba(201, 201, 201, 0.5);
    padding-left :5%;
`

const MainBannerLeftTitle = styled.div`
    
    font-size: 6rem;
    font-weight: 600;
    @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
    font-family: 'Black Han Sans', sans-serif;
    margin-bottom: 2rem;
`


const PlayButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 45px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    background-color: white;
    font-weight: 600;
    padding: 0px 10px;
`

const DetailButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 45px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    background-color: #515053;
    margin-left: 1rem;
    color: white;
    padding: 0px 10px;
`

