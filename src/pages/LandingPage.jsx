import React from "react";
import Wallpaper from "../components/wallpaper/Wallpaper";
import { styled } from "styled-components";

const LandingPage = () => {
  return (
    <>
      <Wallpaper />
      <LandingPageContainer>
        <div>
          <h1>영화, 시리즈 등을 무제한으로</h1>
          <p>어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.</p>
          <div className='form-container'>
            <form>
              <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
              <div>
                <input type='email' />
                <button></button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            <img src='popcorn' alt='popcorn' />
          </div>
          <div>
            <p>5,500원이면 만날 수 있는 넷플릭스.</p>
            <p>광고형 스탠다드 멤버십에 가입하세요.</p>
            <button>
              자세히 알아보기
              <img src='right-arrow' alt='right-arrow' />
            </button>
          </div>
        </div>
        <div className='video-component'>
          <div>
            <h2>TV로 즐기세요</h2>
            <p>
              스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.
            </p>
          </div>
          <div>
            <img src='video-container' alt='video-container' />
            <div>
              <video src='video'></video>
            </div>
          </div>
        </div>
        <div className='video-component'>
          <div>
            <h2>어디서나 자유롭게 시청하세요</h2>
            <p>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.</p>
          </div>
          <div>
            <img src='video-container' alt='video-container' />
            <div>
              <video src='video'></video>
            </div>
          </div>
        </div>
        <div className='image-component'>
          <div>
            <h2>어린이 전용 프로필을 만들어 보세요</h2>
            <p>
              자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스
              회원이라면 무료입니다.
            </p>
          </div>
          <div>
            <img src='video-container' alt='video-container' />
          </div>
        </div>
        <div className='image-component'>
          <div>
            <h2>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요</h2>
            <p>광고 없는 멤버십에서만 이용 가능합니다.</p>
          </div>
          <div>
            <img src='video-container' alt='video-container' />
          </div>
        </div>
        <div>
          <h2>자주 묻는 질문</h2>
          <div className='faq-container'></div>
          <div className='faq-container'></div>
          <div className='faq-container'></div>
          <div className='faq-container'></div>
          <div className='faq-container'></div>
          <div className='faq-container'></div>

          <div className='form-container'>
            <form>
              <h3></h3>
              <div>
                <input type='email' />
                <button></button>
              </div>
            </form>
          </div>
        </div>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;

const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
