import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const Box = styled.div`
  border-radius: 1rem;
  margin-top: 2rem;
  width: 60%;
  margin-bottom: 4rem;
  background-color: #181818;
  color: white;
  overflow: hidden;
`;

export const Display = styled.div`
  display: flex;
  height: 30rem;
`;

export const Describe = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SummaryBox = styled.div`
  width: 70%;
`;

export const Summary = styled.div`
  line-height: 2rem;
  font-size: 1rem;
`;

export const ActorAndGenre = styled.div`
  padding-left: 2rem;
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

export const CloseBtn = styled.button`
  right: 23%;
  font-size: 2rem;
  background-color: black;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 100rem;
  top: 5%;
  z-index: 4;
  position: absolute;
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

export const ThumbVideo = styled.video`
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

export const PlayBtn = styled.button`
  background-color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const VideoTier = styled.div``;
