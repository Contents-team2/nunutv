import React, { useState } from "react";
import Wallpaper from "../components/wallpaper/Wallpaper";
import EmailForm from "../components/EmailForm";
import { styled } from "styled-components";
import FaqList from "../components/FaqList";
// import { getDownloadURL, ref } from "@firebase/storage";
// import { storage } from "../firebase/firebase";
// import { useLoaderData } from "react-router";

const LandingPage = () => {
  // const datas = useLoaderData();
  // console.log("datas", datas);

  const faqList = [
    {
      question: `
      넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
      `,
      answer: `
      넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다. 
      
      
      `,
      link: `https://www.netflix.com/kr/browse/genre/839338`,
      anchorAnswer: `넷플릭스 콘텐츠를 한번 살펴보세요`,
    },
    {
      question: `
      넷플릭스란 무엇인가요?
      `,
      answer: `
      넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 
      `,
      answer2: `
      저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.
      `,
    },
    {
      question: `
      넷플릭스 요금은 얼마인가요?
      `,
      answer: `
      스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.
      `,
    },
    {
      question: `
      어디에서 시청할 수 있나요?
      `,
      answer: `
      언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다. 
      `,
      answer2: `
      iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
      `,
    },
    {
      question: `
      멤버십을 해지하려면 어떻게 하나요?
      `,
      answer: `
      넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
      `,
    },
    {
      question: `
      아이들이 넷플릭스를 봐도 좋을까요?
      `,
      answer: `
      멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다. 
      `,
      answer2: `
      키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.
      `,
    },
  ];

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
          <ContainerBox>
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
          </ContainerBox>
          <ContainerBox>
            <div>
              <img src='/images/landingPage/offline-save.jpg' alt='video-container' />
            </div>
            <Info1>
              <h2>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요</h2>
              <p>광고 없는 멤버십에서만 이용 가능합니다.</p>
            </Info1>
          </ContainerBox>

          <FAQDiv>
            <FQAInnerDiv>
              <H2Tag>자주 묻는 질문</H2Tag>
              <FAQUL>
                {faqList.map((faq, i) => (
                  <FaqList key={i} faq={faq} />
                ))}
              </FAQUL>
              <EmailForm />
            </FQAInnerDiv>
          </FAQDiv>
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  border-bottom: 0.5rem solid #222;
`;

const ContentsDiv1 = styled.div`
  position: relative;
  max-width: 500px;
  right: 10%;
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
    margin-top: 30px;
  }
`;

const ContentsWrapper1 = styled.div`
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
  background-color: #000;
  position: relative;
  max-width: 500px;
  right: 10%;
`;

const ContentsWrapper2 = styled.div`
  max-width: 500px;
  position: absolute;
  margin-left: -200px;
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
  width: 400px;
  position: absolute;
  top: 50px;
  left: 120px;
  z-index: 2;
`;

const Info2 = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 600px;
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
    margin-top: 40px;
  }
`;

const FAQDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 0.5rem solid #222;
  h2 {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 30px;
  }
  div {
    font-size: 24px;
    /* width: 95%; */
    /* margin: 0 auto 10px; */
  }
`;

const FQAInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  margin-top: 24px;
  margin: 0 auto 10px;
`;

const H2Tag = styled.h2`
  width: 100%;
  margin-top: 60px;
  padding: 60px auto 0;
`;

const FAQUL = styled.ul`
  width: 100%;
`;
