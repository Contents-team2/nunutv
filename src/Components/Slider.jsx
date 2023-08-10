import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

export default function Slider() {
  const data = [
    {
      id: 0,
      title: "그해 우리는",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfbqGcl5QMiA0yXZ1dau91UMXICLnD9m4nAX6H4aFau_ganarGhUXIctelw10GymgIjlPWVJT_RaIeR4yZGVIxv6mnZMXyqZjb0.webp?r=831",
    },
    {
      id: 1,
      title: "이상한 변호사 우영우",
      image:
        'https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUjhVfd-Yn41vZJ84pYU1RL26UPOaKMS958-HKXvvU0T4kU8xcQX_iDdCVBmbpaVFW6Aseyul65XVcAX10hAE518L4qlTQK1DHI.webp?r=691"',
    },
    {
      id: 2,
      title: "밥 잘 사주는 예쁜 누나",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTndOTtPSLjw9YUx1PhiCzYu5OSajVS6OBdMVNGE9vQtmP8oJYNwpSXHoanwy1K98EN89SLcHJCIAB0NUf2-HT_Xq33SENk4dn8.webp?r=1fa",
    },
    {
      id: 3,
      title: "나의 해방일지",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTAMmBLbVkXDODUgZbR0dsn9Yzg9EUaLVPooyWUjPioD6DT5F_O6QgumtM55Jxyr3qqbMY-0Tr1jxqUzgzQTtHKJ8nkwnqlBJzA.webp?r=165",
    },
    {
      id: 4,
      title: "우리들의 블루스스",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZqbun_KuWhLyGzrwaNzTZSdg6uHTB1J77z3ItvNZhEmicjZJOaRU5VH-9-ArdmTtNk_Pf44yQAF1fpgyYyVGcOs9w28s-CDXdc.webp?r=f62",
    },
    {
      id: 5,
      title: "나의 아저씨씨",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUgC8WWYMGvUA8NfmaxwQugf7H7uiGlkBnRgA1M4YQExtDW9D9IOweRPyGGheXlTWSOOoFlTyrT0ytZHN9L4GwGMbyCw0sQClBo.webp?r=7ad",
    },
    {
      id: 6,
      title: "갯마을 차차차",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZzgDpGRPTVBtGVDCpK2V-PRPknjADS6LJ2lb9g4RtCsr3Zdz-LABKW3k0Zsd3SwkOzKknH1MFBnQ_wtwDxSJiGjw6uEP5MS9gs.webp?r=914",
    },
    {
      id: 7,
      title: "하이바이 마마!",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcN1HZ3F9To0_xQLl6j-OQJwRaMVEZh8FrHA3WdWgMhTJlY8cDihPeWnDDHfkCD7GXXSGy1hlu8ZWpjtYSUt34Rh8iijlHOdLC0.webp?r=1b5",
    },
    {
      id: 8,
      title: "뷰티 인사이드",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZBrfgut-7YuCNOdGbNcr9bic_TFKh2cQLiGDld56xJSAJAX-QLYl8qGUb9ubZTjcSzQluYm_cl82grmLs8kphTiJvmrSbFxz84.webp?r=05c",
    },
    {
      id: 9,
      title: "사이코지만 괜찮아",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcNJkAjHTWd9kdhxC-BBVf6-d7o9TFoVESCklj-RVoWhWtT2LbpEz8vUsLk2fTc3EEvv28mLwIcKKpjbaNRG-m6DavMqJI1ug3E.webp?r=dcc",
    },
    {
      id: 10,
      title: "봄밤",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewvJ8F07HgLpzi68ZGGRCgLzddCNIXwbquH4OWXYifO0TgBtKhwd2cSFv3a0TRZ5u8evcxYOXauHORDptN8K-lc9u9GP6dyT6A.webp?r=2ed",
    },
    {
      id: 11,
      title: "런온",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS6xWvJ62Nv39Ey1Mk_mk6GtB5FpKyOejAxHScbqad2Ahpp6E_C0po5kyYLlRuR68cjab0ZTgrz0Q8UXNnOZS2xoUhsczz4sHCI.webp?r=b55",
    },
    {
      id: 12,
      title: "동백꽃 필 무렵",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWkb4x6UAtvJSi3hr24PtNSVgLcw7B9CnqmGSyhVFf-fcRXmnNOS6XPBhMgXEUcqtsLTin3hIYQ7ZBsSPPaW-SJUxDNgTg4WSMQ.webp?r=947",
    },
    {
      id: 13,
      title: "나쁜엄마",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS8WxEKSNtgHzytoOwm9TzVbi5iwKiwnGBaX2p_ZF7B3qFLN73jVsmubZY_PIQQS4IMoineK5VNodOJpt-aHjazNYHHSNWt5r_U.webp?r=30e",
    },
    {
      id: 14,
      title: "로맨스는 별책부록",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRKAv58pfvorn4ZOdSzz2TbYjCWjKxmjvps-KvD-PQ0qjtlQdK3rrGRqclYrIzslKQve1-dtKiFC8LJMQiYQTX9-nBFooTQeQjY.webp?r=f33",
    },
    {
      id: 15,
      title: "이번생은 처음이라",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeGXhwYVrCh8J07BvhH6PtzLt1uvHoZOEpHc-hVh8gWeoruxQ1-N7MeMq0Jiv2IyiyGXdqgqUL5Ru28FQejBHrLLV8VT0yxuxjI.webp?r=274",
    },
    {
      id: 16,
      title: "날씨가 좋으면 찾아가겠어요요",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWTkm0vSqJ89c1EwNdEhrqLqkk9yPDZ_jtRaFi-JiIAqBgKv1QbyLQM3kxVhCyhavXjhsMNs8l3PPKo97JTLOG2Q4N0ZnJLh7uc.webp?r=1fe",
    },
    {
      id: 17,
      title: "일단 뜨겁게 청소하라!!",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUoNvdQFZhxGlKerqMGbEhCtQpa5P5fK5MTwjJmFCE-cVFl-SW2FS3dW-AIhGOmHpWLLmhk6sJ9DaDETbn1FBALfqnu2KXL1yh0.webp?r=768",
    },
    {
      id: 18,
      title: "어느날 우리집 현관으로 멸망이 들어왔다",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTYg8lpeWGf2Ktvg2Ox6nwuPT3WNcb3RR2gHXy3Cj5-8BQkgCAH8F5W220xASFXUqkI6ElR8QzITKVBMhSGH81LyP-yT5gzXqEc.webp?r=865",
    },
    {
      id: 19,
      title: "너는 나의 봄봄",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSiknXTJPrIKDQg3PNB1EyWRAnOxYqGfDuZMAv7wcyoumtzN73d9ksg2yGw83PG1WVbxXgVq8YuIQ-bBtGA59jL_CGGChVOmglw.webp?r=e84",
    },
    {
      id: 20,
      title: "나빌레라",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZVNkVmFhf2jZG7SApG15lCQb8h21mgI8kXBQFaZ-9Ab9ShAYjbwB0ImkiOHId4uAzJLbhy1k5Z_TqbIhWhkUGwyZPTyIKREvuI.webp?r=8f8",
    },
    {
      id: 21,
      title: "도도솔솔라라솔",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZIchx-oukHcDrye4OU0DP2qTZ1VSEvfsGKdk4880aiD7SJGsl6GUCwALTuGbFKkYMrXPz0JZbu0QadKJn5ePYQemvpFia0f4hg.webp?r=848",
    },
    {
      id: 22,
      title: "또!오해영",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYX-xroTJ-intADn_D1eAq8-b2NNv4Q8np2wPyeWMz4L8kw9xlRGWXrJnfVA2Fk-sOrOaNrPQEaLCl8ymMTnKEmuUIFJQ32483E.webp?r=9a9",
    },
    {
      id: 23,
      title: "눈이 부시게",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZLSh3xIAl1LyNI9RKGnGzTwtd-3rlaGBpiU66-VVsAiUGv0gOQDohnDno4oerTR6UlPkWgF2Ah7kmnMGGC0EIyUhFnCd-vS-lM.webp?r=095",
    },
  ];

  const scrollRef = useRef(null);
  const numSlides = 18;

  const nextBtnClickHandler = () => {
    let maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    if (
      scrollRef.current.scrollLeft <
      maxScrollLeft - scrollRef.current.offsetWidth
    ) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const prevBtnClickHandler = () => {
    if (scrollRef.current.scrollLeft > 0) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      const lastSlidePosition = (numSlides - 1) * scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: lastSlidePosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <></>
      <Title>
        <TitleText>힐링되는 TV 프로그램</TitleText>
        <ViewAll>
          <ViewAllArrow>&gt;</ViewAllArrow>
          <ViewAllText>모두 보기</ViewAllText>
        </ViewAll>
      </Title>
      <LeftScrollButton onClick={prevBtnClickHandler}>
        <ArrowIcon>&lang;</ArrowIcon>
      </LeftScrollButton>
      <RightScrollButton onClick={nextBtnClickHandler}>
        <ArrowIcon>&rang;</ArrowIcon>
      </RightScrollButton>
      <CarouselContainer>
        <Carousel ref={scrollRef}>
          {data.map((el) => (
            <CarouselImg key={el.id} src={el.image} alt={el.title} />
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}

// 모두 보기 > : 모두 보기, > 따로 div로
// carouselwrap hover되면 > : 둘 다 opcapity:0 -> carouselwrap에 hover되면 > opacity:1
// title, >에 hover되면 모두 보기 > :

const moveRight = keyframes`
  from{
  }
  to {
  }
`;

const Container = styled.div`
  margin: 3vw 0;
  position: relative;
  overflow: hidden;
`;
const ViewAll = styled.div`
  display: flex;
  align-items: center;
`;

const ViewAllText = styled.h2`
  font-size: 12px;
  background-color: none;
  cursor: pointer;
  opacity: 1;
`;

const ViewAllArrow = styled.span`
  background-color: none;
  cursor: pointer;
  opacity: 1;
  font-size: 13px;
  font-weight: bolder;
  padding-bottom: 3px;
`;

const TitleText = styled.h2`
  font-size: 14px;
  margin-left: 2px;

  &:hover${ViewAllArrow} {
    animation: ${moveRight} 1s;
  }

  &:hover${ViewAllText} {
    opacity: 1;
  }
`;

const Title = styled.div`
  cursor: pointer;
  display: flex;
  line-height: 1.3;
  margin-bottom: 0.25rem;

  &:hover ${ViewAllArrow} {
    opacity: 1;
  }
`;

const ArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  width: 60px;
  height: 50px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.1s;
  &:hover {
    transform: scale(1.1);
    transition: all ease-in 0.2s;
  }
`;

const LeftScrollButton = styled.div`
  left: 0;
  border: none;
  width: 50px;
  height: 130px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover ${ArrowIcon} {
    transition: all ease-in 0.1s;
    opacity: 1;
  }
`;

const RightScrollButton = styled.div`
  right: 0;
  border: none;
  width: 50px;
  height: 130px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover ${ArrowIcon} {
    transition: all ease-in 0.1s;
    opacity: 1;
  }
`;

const Carousel = styled.div`
  height: 100%;
  display: flex;
  overflow-x: hidden;

  &:hover ${ViewAllArrow} {
    opacity: 1;
  }
`;

const CarouselImg = styled.img`
  max-width: 230px;
  min-width: 227px;
  padding-right: 3px;
  border-radius: 3px;
  cursor: pointer;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
`;
