import React from 'react';
import { styled } from 'styled-components';
import MainBannerLeft from './MainBannerLeft';
import MainBannerRight from './MainBannerRight';


const MainBanner = () => {
    return (
        <>
            <MainBannerImage>
                <MainBannerDescription>
                    <MainBannerLeft />
                    <MainBannerRight />
                </MainBannerDescription>
            </MainBannerImage>
        </>
    );
};

export default MainBanner;



const MainBannerImage = styled.div`
 display: flex;
 align-items: flex-end;
    width: 100%;
    height: 700px;
    background-image: url("https://www.themoviedb.org/t/p/original/rKKRrr9UywyCi1pxyRKSOoauO9q.jpg");
    background-size: cover;
    padding-bottom: 2rem;
`

const MainBannerDescription = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
