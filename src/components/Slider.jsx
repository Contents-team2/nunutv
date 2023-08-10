import React, { useRef } from "react";
import styled from "styled-components";

export default function Slider() {
  const scrollRef = useRef(null);
  const data = [
    {
      id: 0,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfbqGcl5QMiA0yXZ1dau91UMXICLnD9m4nAX6H4aFau_ganarGhUXIctelw10GymgIjlPWVJT_RaIeR4yZGVIxv6mnZMXyqZjb0.webp?r=831",
    },
    {
      id: 1,
      title: "힐링되는 TV 프로그램",
      image:
        'https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUjhVfd-Yn41vZJ84pYU1RL26UPOaKMS958-HKXvvU0T4kU8xcQX_iDdCVBmbpaVFW6Aseyul65XVcAX10hAE518L4qlTQK1DHI.webp?r=691"',
    },
    {
      id: 2,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTndOTtPSLjw9YUx1PhiCzYu5OSajVS6OBdMVNGE9vQtmP8oJYNwpSXHoanwy1K98EN89SLcHJCIAB0NUf2-HT_Xq33SENk4dn8.webp?r=1fa",
    },
    {
      id: 3,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTAMmBLbVkXDODUgZbR0dsn9Yzg9EUaLVPooyWUjPioD6DT5F_O6QgumtM55Jxyr3qqbMY-0Tr1jxqUzgzQTtHKJ8nkwnqlBJzA.webp?r=165",
    },
    {
      id: 4,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYX-xroTJ-intADn_D1eAq8-b2NNv4Q8np2wPyeWMz4L8kw9xlRGWXrJnfVA2Fk-sOrOaNrPQEaLCl8ymMTnKEmuUIFJQ32483E.webp?r=9a9",
    },
    {
      id: 5,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUgC8WWYMGvUA8NfmaxwQugf7H7uiGlkBnRgA1M4YQExtDW9D9IOweRPyGGheXlTWSOOoFlTyrT0ytZHN9L4GwGMbyCw0sQClBo.webp?r=7ad",
    },
    {
      id: 6,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZzgDpGRPTVBtGVDCpK2V-PRPknjADS6LJ2lb9g4RtCsr3Zdz-LABKW3k0Zsd3SwkOzKknH1MFBnQ_wtwDxSJiGjw6uEP5MS9gs.webp?r=914",
    },
    {
      id: 7,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcN1HZ3F9To0_xQLl6j-OQJwRaMVEZh8FrHA3WdWgMhTJlY8cDihPeWnDDHfkCD7GXXSGy1hlu8ZWpjtYSUt34Rh8iijlHOdLC0.webp?r=1b5",
    },
    {
      id: 8,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZBrfgut-7YuCNOdGbNcr9bic_TFKh2cQLiGDld56xJSAJAX-QLYl8qGUb9ubZTjcSzQluYm_cl82grmLs8kphTiJvmrSbFxz84.webp?r=05c",
    },
    {
      id: 9,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcNJkAjHTWd9kdhxC-BBVf6-d7o9TFoVESCklj-RVoWhWtT2LbpEz8vUsLk2fTc3EEvv28mLwIcKKpjbaNRG-m6DavMqJI1ug3E.webp?r=dcc",
    },
    {
      id: 10,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewvJ8F07HgLpzi68ZGGRCgLzddCNIXwbquH4OWXYifO0TgBtKhwd2cSFv3a0TRZ5u8evcxYOXauHORDptN8K-lc9u9GP6dyT6A.webp?r=2ed",
    },
    {
      id: 11,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS6xWvJ62Nv39Ey1Mk_mk6GtB5FpKyOejAxHScbqad2Ahpp6E_C0po5kyYLlRuR68cjab0ZTgrz0Q8UXNnOZS2xoUhsczz4sHCI.webp?r=b55",
    },
    {
      id: 12,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWkb4x6UAtvJSi3hr24PtNSVgLcw7B9CnqmGSyhVFf-fcRXmnNOS6XPBhMgXEUcqtsLTin3hIYQ7ZBsSPPaW-SJUxDNgTg4WSMQ.webp?r=947",
    },
    {
      id: 13,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS8WxEKSNtgHzytoOwm9TzVbi5iwKiwnGBaX2p_ZF7B3qFLN73jVsmubZY_PIQQS4IMoineK5VNodOJpt-aHjazNYHHSNWt5r_U.webp?r=30e",
    },
    {
      id: 14,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRKAv58pfvorn4ZOdSzz2TbYjCWjKxmjvps-KvD-PQ0qjtlQdK3rrGRqclYrIzslKQve1-dtKiFC8LJMQiYQTX9-nBFooTQeQjY.webp?r=f33",
    },
    {
      id: 15,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeGXhwYVrCh8J07BvhH6PtzLt1uvHoZOEpHc-hVh8gWeoruxQ1-N7MeMq0Jiv2IyiyGXdqgqUL5Ru28FQejBHrLLV8VT0yxuxjI.webp?r=274",
    },
    {
      id: 16,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWTkm0vSqJ89c1EwNdEhrqLqkk9yPDZ_jtRaFi-JiIAqBgKv1QbyLQM3kxVhCyhavXjhsMNs8l3PPKo97JTLOG2Q4N0ZnJLh7uc.webp?r=1fe",
    },
    {
      id: 17,
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUoNvdQFZhxGlKerqMGbEhCtQpa5P5fK5MTwjJmFCE-cVFl-SW2FS3dW-AIhGOmHpWLLmhk6sJ9DaDETbn1FBALfqnu2KXL1yh0.webp?r=768",
    },
  ];

  const prevBtnClickHandler = () => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft - scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const nextBtnClickHandler = () => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Title>
        <h2>힐링되는 TV 프로그램</h2>
      </Title>
      <SlideContainer>
        <LeftButton onClick={prevBtnClickHandler}>
          <p>&lt;</p>
        </LeftButton>
        <Slide ref={scrollRef}>
          <>
            {data.map((el) => (
              <div key={el.id}>
                <img src={el.image} alt={el.title} />
              </div>
            ))}
          </>
        </Slide>
        <RightButton onClick={nextBtnClickHandler}>
          <p>&gt;</p>
        </RightButton>
      </SlideContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 3vw 0;
  position: relative;
  overflow: hidden;

  LeftButton {
    height: 100%;
  }
  RightButton {
    height: 100%;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Slide = styled.div`
  display: flex;
  overflow-x: hidden;

  img {
    height: 128px;
    max-width: 227px;
    min-width: 227px;
    padding-right: 2px;
    border-radius: 3px;
  }
`;

const Title = styled.div`
  line-height: 1.3;
  font-size: 16px;
  padding-bottom: 0.5rem;
`;

const LeftButton = styled.div`
  left: 0;
  border: none;
  width: 60px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
    transition: all ease-in 0.1s;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: white;
    width: 60px;
    height: 50px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all ease-in 0.1s;
    }
  }
`;

const RightButton = styled.div`
  right: 0;
  border: none;
  width: 60px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transition: all ease-in 0.1s;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: white;
    width: 60px;
    height: 50px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all ease-in 0.2s;
    }
  }
`;
