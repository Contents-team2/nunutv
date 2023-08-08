import { styled } from "styled-components";

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
`;

export const Logo = styled.img`
  width: 20rem;
`;

export const NameAndPlayBox = styled.div`
  position: absolute;
  margin-top: 16rem;
  margin-left: 4rem;
  color: black;
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
`;

export const PlayButton = styled.div`
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
`;

export const VideoBox = styled.div`
  position: relative;
  width: 100vw;
  height: 30rem;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: none;
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
`;

export const Describe = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoTierBox = styled.div``;

export const VideoTier = styled.img`
  width: 1.5rem;
`;

export const SummaryBox = styled.div`
  width: 70%;
`;

export const Summary = styled.div`
  line-height: 2rem;
  font-size: 1rem;
`;

export const ActorAndGenre = styled.div`
  margin-left: 2rem;
  width: 30%;
`;

export const ActorBox = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const GenreBox = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const VideoList = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3em;
  margin-right: 3rem;
  margin-bottom: 1rem;
`;

export const ListInfo = styled.div`
  color: white;
  font-size: 1.7rem;
`;

export const ListTitle = styled.div`
  color: white;
  font-size: 1.2rem;
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

  &:hover {
    background-color: #333333;
  }
`;

export const CardId = styled.div`
  font-size: 1.5rem;
`;

export const CardThumbs = styled.img`
  background-color: wheat;
  width: 8rem;
  height: 5rem;
  border-radius: 0.25rem;
`;

export const CardDescribe = styled.div`
  width: 60%;
  height: 5rem;
`;

export const CardDescribeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const CardDescribeSummary = styled.div`
  font-size: 0.75rem;
  color: #a6a6a6;
  line-height: 1rem;
`;

export const ModalVideoDetailWrapper = styled.div`
  background-color: #181818;
  margin-left: 3em;
  margin-right: 3rem;
  padding-bottom: 4rem;
`;

export const ModalVideoDetailTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ModalVideoDetailSummary = styled.div``;
