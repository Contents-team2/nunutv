import { keyframes, styled, css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

export const Box = styled.div`
  position: fixed;
  top: 0%;
  border-radius: 1rem;
  margin-top: 2rem;
  width: 56.08%;
  height: 100vh;
  background-color: #181818;
  color: white;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  border: none;
`;

export const Display = styled.div`
  display: flex;
  height: 30rem;
  @media (max-width: 1023px) {
    height: 15rem;
  }
  @media (max-width: 767px) {
    height: 10rem;
  }
`;

export const Logo = styled.img`
  width: 15rem;

  @media (max-width: 1023px) {
    width: 10rem;
  }
  @media (max-width: 767px) {
    width: 8rem;
  }
`;

export const NameAndPlayBox = styled.div`
  width: 20rem;
  height: 20rem;
  position: absolute;
  margin-top: 14rem;
  margin-left: 4rem;
  color: black;
  @media (max-width: 1023px) {
    margin-top: 8rem;
    margin-left: 2rem;
  }
  @media (max-width: 767px) {
    margin-top: 5rem;
    margin-left: 0.5rem;
  }
`;

export const NameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  @media (max-width: 1023px) {
    margin-top: 1.5rem;
  }
  @media (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0px 10px;
  @media (max-width: 1023px) {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.7rem;
  }
  @media (max-width: 767px) {
    width: 3rem;
    height: 1rem;
    font-size: 0.3rem;
  }
`;

export const AddBox = styled.div``;

export const LikeBox = styled.div``;

export const PlayBtnBox = styled.div``;

export const ModalBtnBox = styled.div`
  right: 0;
`;

const ExpandAnimation = keyframes`
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const CollapseAnimation = keyframes`
  from {
    opacity: 1;
    transform: scaleX(1);
  }
  to {
    opacity: 0.5;
    transform: scaleX(0);
  }
`;

export const LikeBoxCollection = styled.div`
  top: 68%;
  left: 49%;
  position: absolute;
  background-color: #181818;
  width: 10rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transform-origin: center left right;
  transform: translate(-50%, -50%);
  animation: ${(props) =>
    props.show
      ? css`
          ${ExpandAnimation} 0.5s ease-out forwards
        `
      : css`
          ${CollapseAnimation} 0.5s ease-out forwards
        `};
`;

export const VideoBox = styled.div`
  position: relative;
  width: 100vw;
  height: 30rem;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: none;
  @media (max-width: 1023px) {
    height: 15rem;
  }
  @media (max-width: 767px) {
    height: 10rem;
  }
`;

export const ThumbVideo = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(24, 24, 24, 0),
    rgba(24, 24, 24, 1)
  );
  pointer-events: none;
`;

export const CloseBtn = styled.button`
  right: 5%;
  font-size: 2rem;
  background-color: black;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 100rem;
  top: 5%;
  z-index: 4;
  position: absolute;
  cursor: pointer;
  @media (max-width: 1023px) {
    font-size: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  @media (max-width: 767px) {
    top: 2%;
    font-size: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

export const MuteBtn = styled.img`
  right: 10%;
  width: 2.5rem;
  right: 15%;
  top: 50%;
  z-index: 2;
  position: absolute;
  cursor: pointer;
  transition: all 0.2s linear;
  color: grey;
  path {
    fill: red;
    stroke: red;
  }
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 1023px) {
    width: 1.5rem;
    top: 20%;
  }
  @media (max-width: 767px) {
    width: 1rem;
    top: 15%;
  }
`;

export const Describe = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  @media (max-width: 767px) {
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }
`;

export const VideoTierBox = styled.div``;

export const VideoTier = styled.img`
  width: 1.5rem;
  @media (max-width: 1023px) {
    width: 1rem;
  }
  @media (max-width: 767px) {
    width: 0.7rem;
  }
`;

export const SummaryBox = styled.div`
  width: 70%;
`;

export const Summary = styled.div`
  line-height: 2rem;
  font-size: 1rem;
  @media (max-width: 1023px) {
    line-height: 1rem;
    font-size: 0.5rem;
  }
  @media (max-width: 767px) {
    line-height: 1rem;
    font-size: 0.3rem;
  }
`;

export const ActorAndGenre = styled.div`
  margin-left: 2rem;
  width: 30%;
  @media (max-width: 1023px) {
    margin-left: 1rem;
  }
  @media (max-width: 767px) {
    margin-left: 0.5rem;
  }
`;

export const ActorBox = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  @media (max-width: 1023px) {
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 767px) {
    font-size: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;

export const GenreBox = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  @media (max-width: 1023px) {
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 767px) {
    font-size: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;

export const VideoList = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media (max-width: 1023px) {
    margin-top: 2rem;
  }
  @media (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3em;
  margin-right: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 1023px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 767px) {
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    margin-bottom: 0.3rem;
  }
`;

export const ListInfo = styled.div`
  color: white;
  font-size: 1.7rem;
  @media (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const ListTitle = styled.div`
  color: white;
  font-size: 1.2rem;
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;

export const ListCardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 9rem;
  background-color: #181818;
  margin-left: 3em;
  margin-right: 3rem;
  border-bottom: 0.1rem solid #333333;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
  @media (max-width: 1023px) {
    height: 8rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 767px) {
    height: 8rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    justify-content: space-between;
    align-items: start;
    margin-top: 2rem;
  }
`;

export const CardId = styled.div`
  font-size: 1.5rem;
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const CardThumbs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 8rem;
  height: 5rem;
  border-radius: 0.25rem;
  @media (max-width: 1023px) {
    width: 5.5rem;
    height: 3rem;
  }
  @media (max-width: 767px) {
    width: 5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
`;

export const CardDescribe = styled.div`
  width: 60%;
  height: 5rem;
  @media (max-width: 1023px) {
    height: 5rem;
  }
  @media (max-width: 767px) {
    width: 80%;
    height: 1.7rem;
  }
`;

export const CardDescribeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  @media (max-width: 1023px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  @media (max-width: 767px) {
    font-size: 0.5rem;
    margin-bottom: 0.17rem;
  }
`;

export const CardDescribeSummary = styled.div`
  font-size: 0.75rem;
  color: #a6a6a6;
  line-height: 1rem;
  @media (max-width: 1023px) {
    font-size: 1px;
    margin-bottom: 0.3rem;
  }
  @media (max-width: 767px) {
    font-size: 0.5rem;
    margin-bottom: 0.17rem;
    margin-top: 0.5rem;
  }
`;

export const ModalVideoDetailWrapper = styled.div`
  margin-left: 3em;
  margin-right: 3rem;
  padding-bottom: 4rem;
  @media (max-width: 1023px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 767px) {
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }
`;

export const ModalVideoDetailTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1023px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
  }
`;

export const ModalVideoDetailSummary = styled.div`
  @media (max-width: 1023px) {
    font-size: 0.7rem;
  }
  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;
