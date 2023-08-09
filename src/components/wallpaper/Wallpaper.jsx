import React from "react";
import { styled } from "styled-components";

const Wallpaper = () => {
  return (
    <>
      <WallpaperImage />
    </>
  );
};

export default Wallpaper;

const WallpaperImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("images/wallpaper/wallpaper.jpg");
  background-color: #000;
  overflow: hidden;
  opacity: 0.5;
  position: absolute;
  padding-bottom: 2rem;
  z-index: -1;

  @media (max-width: 740px) {
    display: none;
  }
`;
