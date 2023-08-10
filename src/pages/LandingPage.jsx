import React from "react";
import Wallpaper from "../components/wallpaper/Wallpaper";
import EmailForm from "../components/EmailForm";
import { styled } from "styled-components";
// import { getDownloadURL, ref } from "@firebase/storage";
// import { storage } from "../firebase/firebase";
// import { useLoaderData } from "react-router";

const LandingPage = () => {
  // const datas = useLoaderData();
  // console.log("datas", datas);

  return (
    <>
      <LandingPageContainer>
        <Wallpaper />
        <FirstDiv>
          <FirstDiv2>
            {/* <Paragraph>회원님, 반갑습니다.</Paragraph> */}
            <H1Tag>영화, 시리즈 등을 무제한으로</H1Tag>
            <Paragraph>어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.</Paragraph>
            <EmailForm />
          </FirstDiv2>
        </FirstDiv>
        <BackgroundDiv>
          <SecondDiv>
            <PopcornDiv>
              <Img src='/images/icon/popcorn.svg' alt='popcorn' />
            </PopcornDiv>
            <PlanInfoDiv>
              <PlanP1>5,500원이면 만날 수 있는 넷플릭스.</PlanP1>
              <PlanP2>광고형 스탠다드 멤버십에 가입하세요.</PlanP2>
              <JoinAnchor href='joinFirst'>
                자세히 알아보기
                <ArrowRight src='/images/icon/arrow_right.svg' alt='arrow-right' />
              </JoinAnchor>
            </PlanInfoDiv>
          </SecondDiv>
          <ContainerBox>
            <ContentsDiv1>
              <Info1>
                <h2>TV로 즐기세요</h2>
                <p>
                  스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서
                  시청하세요.
                </p>
              </Info1>
              <ContentsWrapper1>
                <TV1 src='/images/landingPage/tv1.png' alt='video-container' />
                <div>
                  <Video1 autoPlay playsInline muted loop>
                    <source src='/images/landingPage/main-video1.m4v' type='video/mp4' />
                  </Video1>
                </div>
              </ContentsWrapper1>
            </ContentsDiv1>
          </ContainerBox>
          <ContainerBox>
            <ContentsDiv2>
              <ContentsWrapper2>
                <TV2 src='/images/landingPage/tv2.png' alt='video-container' />
                <div>
                  <Video2 autoPlay playsInline muted loop>
                    <source src='/images/landingPage/main-video2.m4v' type='video/mp4' />
                  </Video2>
                </div>
              </ContentsWrapper2>
              <Info2>
                <h2>어디서나 자유롭게 시청하세요</h2>
                <p>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.</p>
              </Info2>
            </ContentsDiv2>
          </ContainerBox>
          {/* <ContainerBox>
            <Info1>
              <h2>어린이 전용 프로필을 만들어 보세요</h2>
              <p>
                자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스
                회원이라면 무료입니다.
              </p>
            </Info1>
            <div>
              <img src='/images/landingPage/kids.png' alt='video-container' />
            </div>
          </ContainerBox> */}

          {/* <ContainerBox>
            <div>
              <img src='/images/landingPage/offline-save.jpg' alt='video-container' />
            </div>
            <Info2>
              <h2>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요</h2>
              <p>광고 없는 멤버십에서만 이용 가능합니다.</p>
            </Info2>
          </ContainerBox> */}

          <div>
            <h2>자주 묻는 질문</h2>
            <div className='faq-container'>1</div>
            <div className='faq-container'>2</div>
            <div className='faq-container'>3</div>
            <div className='faq-container'>4</div>
            <div className='faq-container'>5</div>
            <div className='faq-container'>6</div>

            <EmailForm />
          </div>
        </BackgroundDiv>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;

// // react router loader
// export const landingPageLoader = async () => {
//   const storageRef = ref(storage);
//   const imagesRef = ref(storageRef, "main-images");
//   const videosRef = ref(storageRef, "main-videos");
//   const dbData = [];
//   const imgData = ["tv1.png", "tv2.png", "kids.png", "offline-save.jpg"];
//   const videoData = ["main-video.m4v", "main-video2.m4v"];

//   imgData.forEach((v) => {
//     getDownloadURL(ref(imagesRef, v))
//       .then((url) => {
//         // `url` is the download URL for 'images/stars.jpg'
//         dbData.push(url);
//       })
//       .catch((error) => {
//         // Handle any errors
//       });
//   });

//   videoData.forEach((v) => {
//     getDownloadURL(ref(videosRef, v))
//       .then((url) => {
//         // `url` is the download URL for 'images/stars.jpg'
//         dbData.push(url);
//       })
//       .catch((error) => {
//         // Handle any errors
//       });
//   });

//   console.log("dbData", dbData);
//   return dbData;
// };

const LandingPageContainer = styled.div`
  background-color: #000;
  position: relative;
  z-index: 0;
  color: #fff;
`;

const FirstDiv = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;

  @media (max-width: 960px) {
    height: 512px;
  }
  @media (max-width: 600px) {
    height: 480px;
  }
`;

const FirstDiv2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 8%;
`;

const H1Tag = styled.h1`
  font-size: 48px;
  font-weight: 900;
`;

const Paragraph = styled.p`
  font-size: 24px;
  margin-top: 20px;
`;

const BackgroundDiv = styled.div`
  background-color: #000;
`;

//popcorn
const SecondDiv = styled.div`
  background: radial-gradient(
    51.39% 511.66% at 47.68% -217.91%,
    #ff9900 0%,
    #e50914 17.27%,
    #0e1b4f 79.44%,
    #000413 100%
  );
  box-shadow: 0px -8px 25px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  width: 85%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px;
  margin: 0 auto;
  /* padding-bottom: 30px */
`;

const PopcornDiv = styled.div``;

const Img = styled.img`
  width: 96px;
`;

const PlanInfoDiv = styled.div`
  padding-left: 32px;
`;

const PlanP1 = styled.p`
  font-size: 20px;
  font-weight: 900;
  line-height: 30px;
  margin: 0;
`;

const PlanP2 = styled.p`
  font-size: 15px;
  line-height: 24px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

const JoinAnchor = styled.a`
  font-size: 16px;
  color: #448ef4;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  text-decoration: underline;
`;

const ArrowRight = styled.img`
  color: #448ef4;
`;

const ContainerBox = styled.div`
  /* background-color: grey; */
  /* max-width: 96%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

const ContentsDiv1 = styled.div`
  /* background-color: blue; */
  position: relative;
  max-width: 500px;
  right: 20%;
`;

const Info1 = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  word-break: keep-all;
  h2 {
    font-size: 48px;
    font-weight: 900;
  }
  p {
    font-size: 24px;
  }
`;

const ContentsWrapper1 = styled.div`
  background-color: red;
  max-width: 500px;
  position: absolute;
  margin: 0 10% 0 90%;
  top: 10px;
  left: 10%;
`;

const TV1 = styled.img`
  position: absolute;
  top: 5%;
  overflow: hidden;
  z-index: 3;
`;

const Video1 = styled.video`
  position: absolute;
  top: 100px;
  left: 88px;
  z-index: 2;
`;

const ContentsDiv2 = styled.div`
  /* background-color: blue; */
  position: relative;
  max-width: 500px;
  right: 20%;
`;

const ContentsWrapper2 = styled.div`
  background-color: red;
  max-width: 500px;
  position: absolute;
  margin: 0 10% 0 90%;
  top: 10px;
  left: 10%;
`;
const TV2 = styled.img`
  position: absolute;
  top: 5%;
  overflow: hidden;
  z-index: 3;
`;
const Video2 = styled.video`
  position: absolute;
  top: 100px;
  left: 88px;
  z-index: 2;
`;

const Info2 = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  word-break: keep-all;
  h2 {
    font-size: 48px;
    font-weight: 900;
  }
  p {
    font-size: 24px;
  }
`;
