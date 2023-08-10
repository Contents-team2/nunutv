import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Mute } from '../assets/icon/muteon.svg';

const MainBannerRight = ({ muteHandler, muteState }) => {

    return (
        <Container>
            <MuteButton onClick={muteHandler}>
                <Mute width="3rem" height="3rem" style={{ marginRight: "1rem" }} />
            </MuteButton>
        </Container>
    );
};

export default MainBannerRight;



const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 30%;
    height:  100%;

    
`

const MuteButton = styled.div`
    margin-bottom: 50px;
    cursor: pointer;
`