import React, { useRef } from "react";
import styled from "styled-components";
import Card from "./CarouselCard";
import Top10Card from "./CarouselCardTop10";
import one from "../image/1.svg";
import two from "../image/2.svg";
import three from "../image/3.svg";
import four from "../image/4.svg";
import five from "../image/5.svg";
import six from "../image/6.svg";
import seven from "../image/7.svg";
import eight from "../image/8.svg";
import nine from "../image/9.svg";
import ten from "../image/10.svg";

export default function Slider() {
  // const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // const carouselMouseInHandler = () => {
  //   setIsCarouselHovered(true);
  // };

  // const carouselMouseOutHandler = () => {
  //   setIsCarouselHovered(false);
  // };

  const data = [
    {
      id: 0,
      name: "그해 우리는",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfbqGcl5QMiA0yXZ1dau91UMXICLnD9m4nAX6H4aFau_ganarGhUXIctelw10GymgIjlPWVJT_RaIeR4yZGVIxv6mnZMXyqZjb0.webp?r=831",
    },
    {
      id: 1,
      name: "이상한 변호사 우영우",
      title: "힐링되는 TV 프로그램",
      image:
        'https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUjhVfd-Yn41vZJ84pYU1RL26UPOaKMS958-HKXvvU0T4kU8xcQX_iDdCVBmbpaVFW6Aseyul65XVcAX10hAE518L4qlTQK1DHI.webp?r=691"',
    },
    {
      id: 2,
      name: "밥 잘 사주는 예쁜 누나",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTndOTtPSLjw9YUx1PhiCzYu5OSajVS6OBdMVNGE9vQtmP8oJYNwpSXHoanwy1K98EN89SLcHJCIAB0NUf2-HT_Xq33SENk4dn8.webp?r=1fa",
    },
    {
      id: 3,
      name: "나의 해방일지",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTAMmBLbVkXDODUgZbR0dsn9Yzg9EUaLVPooyWUjPioD6DT5F_O6QgumtM55Jxyr3qqbMY-0Tr1jxqUzgzQTtHKJ8nkwnqlBJzA.webp?r=165",
    },
    {
      id: 4,
      name: "우리들의 블루스스",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZqbun_KuWhLyGzrwaNzTZSdg6uHTB1J77z3ItvNZhEmicjZJOaRU5VH-9-ArdmTtNk_Pf44yQAF1fpgyYyVGcOs9w28s-CDXdc.webp?r=f62",
    },
    {
      id: 5,
      name: "나의 아저씨씨",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUgC8WWYMGvUA8NfmaxwQugf7H7uiGlkBnRgA1M4YQExtDW9D9IOweRPyGGheXlTWSOOoFlTyrT0ytZHN9L4GwGMbyCw0sQClBo.webp?r=7ad",
    },
    {
      id: 6,
      name: "갯마을 차차차",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZzgDpGRPTVBtGVDCpK2V-PRPknjADS6LJ2lb9g4RtCsr3Zdz-LABKW3k0Zsd3SwkOzKknH1MFBnQ_wtwDxSJiGjw6uEP5MS9gs.webp?r=914",
    },
    {
      id: 7,
      name: "하이바이 마마!",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcN1HZ3F9To0_xQLl6j-OQJwRaMVEZh8FrHA3WdWgMhTJlY8cDihPeWnDDHfkCD7GXXSGy1hlu8ZWpjtYSUt34Rh8iijlHOdLC0.webp?r=1b5",
    },
    {
      id: 8,
      name: "뷰티 인사이드",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZBrfgut-7YuCNOdGbNcr9bic_TFKh2cQLiGDld56xJSAJAX-QLYl8qGUb9ubZTjcSzQluYm_cl82grmLs8kphTiJvmrSbFxz84.webp?r=05c",
    },
    {
      id: 9,
      name: "사이코지만 괜찮아",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcNJkAjHTWd9kdhxC-BBVf6-d7o9TFoVESCklj-RVoWhWtT2LbpEz8vUsLk2fTc3EEvv28mLwIcKKpjbaNRG-m6DavMqJI1ug3E.webp?r=dcc",
    },
    {
      id: 10,
      name: "봄밤",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewvJ8F07HgLpzi68ZGGRCgLzddCNIXwbquH4OWXYifO0TgBtKhwd2cSFv3a0TRZ5u8evcxYOXauHORDptN8K-lc9u9GP6dyT6A.webp?r=2ed",
    },
    {
      id: 11,
      name: "런온",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS6xWvJ62Nv39Ey1Mk_mk6GtB5FpKyOejAxHScbqad2Ahpp6E_C0po5kyYLlRuR68cjab0ZTgrz0Q8UXNnOZS2xoUhsczz4sHCI.webp?r=b55",
    },
    {
      id: 12,
      name: "동백꽃 필 무렵",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWkb4x6UAtvJSi3hr24PtNSVgLcw7B9CnqmGSyhVFf-fcRXmnNOS6XPBhMgXEUcqtsLTin3hIYQ7ZBsSPPaW-SJUxDNgTg4WSMQ.webp?r=947",
    },
    {
      id: 13,
      name: "나쁜엄마",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS8WxEKSNtgHzytoOwm9TzVbi5iwKiwnGBaX2p_ZF7B3qFLN73jVsmubZY_PIQQS4IMoineK5VNodOJpt-aHjazNYHHSNWt5r_U.webp?r=30e",
    },
    {
      id: 14,
      name: "로맨스는 별책부록",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRKAv58pfvorn4ZOdSzz2TbYjCWjKxmjvps-KvD-PQ0qjtlQdK3rrGRqclYrIzslKQve1-dtKiFC8LJMQiYQTX9-nBFooTQeQjY.webp?r=f33",
    },
    {
      id: 15,
      name: "이번생은 처음이라",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeGXhwYVrCh8J07BvhH6PtzLt1uvHoZOEpHc-hVh8gWeoruxQ1-N7MeMq0Jiv2IyiyGXdqgqUL5Ru28FQejBHrLLV8VT0yxuxjI.webp?r=274",
    },
    {
      id: 16,
      name: "날씨가 좋으면 찾아가겠어요요",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWTkm0vSqJ89c1EwNdEhrqLqkk9yPDZ_jtRaFi-JiIAqBgKv1QbyLQM3kxVhCyhavXjhsMNs8l3PPKo97JTLOG2Q4N0ZnJLh7uc.webp?r=1fe",
    },
    {
      id: 17,
      name: "일단 뜨겁게 청소하라!!",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUoNvdQFZhxGlKerqMGbEhCtQpa5P5fK5MTwjJmFCE-cVFl-SW2FS3dW-AIhGOmHpWLLmhk6sJ9DaDETbn1FBALfqnu2KXL1yh0.webp?r=768",
    },
    {
      id: 18,
      name: "어느날 우리집 현관으로 멸망이 들어왔다",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTYg8lpeWGf2Ktvg2Ox6nwuPT3WNcb3RR2gHXy3Cj5-8BQkgCAH8F5W220xASFXUqkI6ElR8QzITKVBMhSGH81LyP-yT5gzXqEc.webp?r=865",
    },
    {
      id: 19,
      name: "너는 나의 봄봄",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSiknXTJPrIKDQg3PNB1EyWRAnOxYqGfDuZMAv7wcyoumtzN73d9ksg2yGw83PG1WVbxXgVq8YuIQ-bBtGA59jL_CGGChVOmglw.webp?r=e84",
    },
    {
      id: 20,
      name: "나빌레라",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZVNkVmFhf2jZG7SApG15lCQb8h21mgI8kXBQFaZ-9Ab9ShAYjbwB0ImkiOHId4uAzJLbhy1k5Z_TqbIhWhkUGwyZPTyIKREvuI.webp?r=8f8",
    },
    {
      id: 21,
      name: "도도솔솔라라솔",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZIchx-oukHcDrye4OU0DP2qTZ1VSEvfsGKdk4880aiD7SJGsl6GUCwALTuGbFKkYMrXPz0JZbu0QadKJn5ePYQemvpFia0f4hg.webp?r=848",
    },
    {
      id: 22,
      name: "또!오해영",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYX-xroTJ-intADn_D1eAq8-b2NNv4Q8np2wPyeWMz4L8kw9xlRGWXrJnfVA2Fk-sOrOaNrPQEaLCl8ymMTnKEmuUIFJQ32483E.webp?r=9a9",
    },
    {
      id: 23,
      name: "눈이 부시게",
      title: "힐링되는 TV 프로그램",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZLSh3xIAl1LyNI9RKGnGzTwtd-3rlaGBpiU66-VVsAiUGv0gOQDohnDno4oerTR6UlPkWgF2Ah7kmnMGGC0EIyUhFnCd-vS-lM.webp?r=095",
    },
  ];
  const data2 = [
    {
      id: 0,
      name: "도깨비",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdc4tSDRhVi0SuZNL1stpAEp1rV3wgCdJPtUgmDCTZHScccUq_W5qGXH47F5MumOPw8nSKyJIzHoxctGJmlB96WrP6sf0Gx5aW4.webp?r=d9d",
    },
    {
      id: 1,
      name: "별에서 온 그대",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcOHJgKneS2V1Nj8bUMRe1-K8EsRIDxgTFHCy12ctWPBODKqyILQsK9sQksELMZqsj-YDqUxZYJ-kkIyFGNR6NgzPC_7tEZKEy4.webp?r=c40",
    },
    {
      id: 2,
      name: "사랑의 불시착",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaaNwfBRJFPWvabguxR3VYr5tYGMniptoqNm8PcuKTOsp2mFMtz42qxpK4kDCVW3h8e7JQhiNNKX1vmR1Yvjs7e1RZaY2BSocL4.webp?r=ed2",
    },
    {
      id: 3,
      name: "호텔 델루나",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTWivvG0fNiRIdXsdflKmwD7y4i-3nXhVzBEfgqpz1M_EqX3kkvQ_f9Agf9W6MwPoq0vsi3SEP-oxRMhWrAEcWVNHX0A0vPl-Bo.webp?r=393",
    },
    {
      id: 4,
      name: "미스터 션샤인",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS3wDJoRYXU6UgueYX8gVM7CT1qNJTmduexXbEMpaGTEVc_4PFCGeLW7Jh9pm3zRW-r-ysKh78LD3oduIYs-bzB0RbkGihScwms.webp?r=b47",
    },
    {
      id: 5,
      name: "알함브라 궁전의 추억",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcTnlqVdofb9k4n3T9bA-pLCDRN26EVNhPDtE12zWLy0Kkim8FVb8GyuzEb0t13pRT438q2XrOKmw8UyR1w9DSs_4FXp0A9NHlw.webp?r=d81",
    },
    {
      id: 6,
      name: "갯마을 차차차",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZzgDpGRPTVBtGVDCpK2V-PRPknjADS6LJ2lb9g4RtCsr3Zdz-LABKW3k0Zsd3SwkOzKknH1MFBnQ_wtwDxSJiGjw6uEP5MS9gs.webp?r=914",
    },
    {
      id: 7,
      name: "그들이 사는 세상상",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYJ_-UHtlLeMoi57vzsKHApLGVoij_O_Re1MDXSB0IdegdbKJ0o8FjHjryx0bF36duABr6nBbm8SnrsjHJF3BrScTgFePom7wtc.webp?r=3a9",
    },
    {
      id: 8,
      name: "시그널",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ_pcRmRLdDUscG9LDmqeDrV8UbyABfOhi9H-iiWg_Uh9D7KiC0tw_quPig8YqvrHYNrJVId0Ee8HIEgA0sYzX5JG5U6D5Ahs5g.webp?r=1cb",
    },
    {
      id: 9,
      name: "더 킹",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcx6fobwUkF9DzfAtAVnf6E6yblL_QYfDEdpPmRJEFEZ7cOfq_O5ZHk9niz_GEMSjNBUrJ-WxIlZ1y1bglGtcwijU7IsPeix39A.webp?r=e99",
    },
    {
      id: 10,
      name: "킹덤",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc6YjKzS6YFuGpZmIJA-4pCjpvRj3Jyxn6NIFt2n7O8aJLhbMDa8hOrsszt3YFOz5BQgdryyVLv7HR7ZiDM7eY29yqB2VpiAmqVcIhLWpXkYajREsYpFxZ6oUnkr1Wiuebgn.jpg?r=aaa",
    },
    {
      id: 11,
      name: "그 겨울 바람이 분다",
      title: "믿고 보는 한국 드라마 작가 컬렉션",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWG3bsCXnk_MYLY_ollEiJHM5EHKYJ7Sjmco_VTCb2p4RVQuPLWjl3kF7hi_kq-A59lhG4HLdFRJEsdokSR3ZhfKkr541-VWcgw.webp?r=169",
    },
  ];
  const data3 = [
    {
      id: 0,
      name: "더글로리",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVQNRJujXD_Z1uo2gLpopvWltYVj1p7lxeB7yjvqT5bcvFwxJVXvolNaYx2ZCfODZetOKtJv2HdDF-Q3Km5kqEnQM37iXRjD8umymfVZre9zS1t8gRtrF0E53J72svBI2q8E.jpg?r=95f",
    },
    {
      id: 1,
      name: "철인황후",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWtQz9XksubQf-SPuLeldU3xU6-QL6-97ngYTWQ2uiFawg91qJfdxJznR4yrH8sTVgIVBOaym3_xXSOpxa3Mwidc7_OGKV21AEE.webp?r=f3e",
    },
    {
      id: 2,
      name: "재벌집 막내아들",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUnqFxpImSczUOxJmUf0yutWmRLd7y0Z2LCcqMAQwVxmZFRp1xrGTjhXReFJIeXiplilo3Rw1qsAi0iqrOBgB6CPv73eVsKnKcM.webp?r=b56",
    },
    {
      id: 3,
      name: "스파이패밀리",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUb8Uu2dgn8kEtmfAMalIVEDhu89veJG3NLf5ZeWlMEs-d1ItAVNfFa_rziYWtwU5RBMQMgjYLYgMth19761eQ8JM7mhmZhvC98.webp?r=efc",
    },
    {
      id: 4,
      name: "원펀맨",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYLCQtT3LugU_girrVpyIq6R11Zy9Ik48TonjdhsIB9XHQfQTFcZdmkho_Eooc-s-jDr0cCYPUqeVkFNGpdqQokpVvAH75o9jFc.webp?r=992",
    },
    {
      id: 5,
      name: "멜로가 체질",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXvwtfGw5YnbLEBfn104pXRwRsz2jemMNQ-XrWnMPCdPIh32HBXhmAIZJvqVlfkFpGbnrKVpGVV0BcjmP37oqlIpxEyhbXPB9Ro.webp?r=64a",
    },
    {
      id: 6,
      name: "웬즈데이",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQvqSwagk5MIiS1DSTBpNmqp_g8P0dzRfsp787SLsoeHtpzB4U1LzK4MVpPy4InEsfgXau_FX0v78d94aU9B0Dsv0__lRRQAhx2_7DsqyDrtOMIKU8jgZ_O5OVyp9kiiVgCj.jpg?r=3e8",
    },
    {
      id: 7,
      name: "연모",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXO1d9D3akCxt8LocPQOGM8l--Ph-muexISXaQ12vRrstrX0J1up5UxkuFFWp-b9viUOPLWsLR8kNi5WGPZbW8FI1_2TIcQWNrs.webp?r=cfb",
    },
    {
      id: 8,
      name: "서른.아홉",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeNq39YRu9ERUrNoPcPeJxBCzm2ss3y_khWSvD_Ys0w4gvbufVYpkTiuJKfcogls5psMyjAFVi2utzOfH9_QOBXFvzbtIf04oko.webp?r=335",
    },
    {
      id: 9,
      name: "김비서가 왜그럴까",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRDv8KYnmGSKLAa4gqcrt6wI8d5l-ivPwMp2AXu_yVhayvpa0AiiFi2qKGofJUFD6evvmeUnKL-IsMviLiemrTABJgzp5r00t44.webp?r=6bf",
    },
    {
      id: 10,
      name: "나이트 에이전트",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXkVOaUnIuv1Pfw6TsOffdwhqo0QGR5k5zQLmIICPHEpgXOfeicyrPQjepS3NWimP5lEVnDr57r9N8d5u0VC0_ArUyYoHFnxPJNrKk_HfgBiebNqJMgM8lOKa7TKUm0Sih_t.jpg?r=d8b",
    },
    {
      id: 11,
      name: "별에서 온 그대",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcOHJgKneS2V1Nj8bUMRe1-K8EsRIDxgTFHCy12ctWPBODKqyILQsK9sQksELMZqsj-YDqUxZYJ-kkIyFGNR6NgzPC_7tEZKEy4.webp?r=c40",
    },
    {
      id: 12,
      name: "지정생존자",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfxuuHucjHwZUPzrNukQkfqx0MLCFfnfXEKN5f0zAYnkBuIvU6DOusbM3spElMann7l9r8GAXwoZrvdtUX3nx3sM89MXwErlzY6J7lZUMoPRyYJrPW9p9AKCV-_GhJlxr9rf.jpg?r=6e8",
    },
    {
      id: 13,
      name: "미션 임파서블:폴아웃",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdhQoYfhJLNoILCKwDdGesMZYXhzjejhJrDtwbTNM2cTK-kCcLuPdBR2ThHB-_7XtprHJnyx9gKpyx1kLObkYsQoXwqpW8HawIQ.webp?r=2dd",
    },
    {
      id: 14,
      name: "사랑의 불시착",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaaNwfBRJFPWvabguxR3VYr5tYGMniptoqNm8PcuKTOsp2mFMtz42qxpK4kDCVW3h8e7JQhiNNKX1vmR1Yvjs7e1RZaY2BSocL4.webp?r=ed2",
    },
    {
      id: 15,
      name: "지금 우리 학교는는",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbtrCMyHozmdZLFz0L9zFW40gKJ7fF_SXDdDy23b0ivpQpfniGnJo1uKhg7cMHU74whckrqOHdkcVPIvHI0z8TBP-4X4i1KGKHDh3Aky0E6wq2TzcjIum2pC9MEHAFlMGN5L.jpg?r=7a3 ",
    },
    {
      id: 16,
      name: "체인소맨",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTi64gZO8tYYrlVjwZwHwGPkouXG7UQ9lsrmzln0q0NQIrfHI-Q129D5Xd4UbUnPyANzrTui5uhLs2fwBJa_JzqbKZ4PmR5zW6o.webp?r=af5",
    },
    {
      id: 17,
      name: "마이네임",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYr5grsNXWHug6YFdPiLpmXUPq8mL7B9NEiwkm_SKWMHbnZxyu3bwdiM1qVc0uvTSpUqRjLc8ed0RzCnUMVXZETed0IT8Dgi6O3mAE2KlzPT4QZAn3ZYJjpS3tuDykhqJ8Dx.jpg?r=81c",
    },
    {
      id: 18,
      name: "길복순",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdYxot9OePkfu7aNinmuEqHwamughAyyrRbImTN0KN9A8SbtEqA4Buoj54PYx9yRZ3A-f-x-IL1bzxfwYSN_3Gcru6k2KMVmwxnW_lFMwmbKWgSpwKIbwxOEC4vUn-KQfuBE.jpg?r=3f8",
    },
    {
      id: 19,
      name: "로스트 인 스페이스",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRehoLze8z7_kdLt6jbWlipdTJuUL0yztoTu0IXOhg9dUXLsm8yf-enM3MTFzDZUaMidjaC_fxTbCdnJBGBTRmqBZhQ891RGea9VWgKYLW2kzPVY47vPXZJGN4JqcW0ilH4y.jpg?r=171",
    },
    {
      id: 20,
      name: "퀸스 갬빗",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTz2Khj4YZCJEhfyxnrjI5XduNjxzztKO8qvEVLpOL7PVRsYNmAgHnmS1ndTslOYwNqV1PaWCPo3VeaUCVyTwONruvq_FIAA4B3SyZ1_xSKNA75AMx4-It4Lg1Ce_Q778_CZ.jpg?r=742",
    },
    {
      id: 21,
      name: "수리남",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdYakGGKfFmxbwYCk6PaDqZAYcmusWAwVOQe4sAhvegMpkQb-3afqMlh2lRewvUmBUMrLeFMh3h2w3fl-2s-lH8qqhJYHv4ZYWfMsDlXlAZWAEl4nizYkvYLwhpmH3KmKIKl.jpg?r=9a6",
    },
    {
      id: 22,
      name: "미생",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABansYs-Hi4WvAfJ3wJwX8cPmNK9pdSflp7GrnHJtrLwS1Txs2tfg-1Ri-FXgv8XaOjK2nVxp4A2mHtqE46OUJISJw-964Ok9IQ8.webp?r=8e4",
    },
    {
      id: 23,
      name: "사랑의 이해",
      title: "다시보기 추천 콘텐츠",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUzX6zS4xxe_HF_DY3uiw_6Np4mFzDhH89ac5PfFt8ZKeIWIEvlL1hUIMiazF5ekxS4s_1ENj7hZNvokPTMnHRaDmcLX1CxT5JY.webp?r=95b",
    },
  ];
  const data4 = [
    {
      id: 0,
      name: "노잉",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaSn3OKzxpV9BIgHqIRB-FawP8yattaE2SEhnjPRF7WB49flxwlEP5Qc_N0_G4Zlgr0gc25iwfVkoZoSw7fF5cxExki3ditJhs4.webp?r=c23",
    },
    {
      id: 1,
      name: "캐치 미 이프 유 캔",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSxbzoS771YLremyMZMqmfeLYN6A6jIduG60uxDiZwYsmrRhtpoFHlFx85RKQQGL1MeUYH0iy_tcrQrApG_mdkawKbky83NAliE.webp?r=ab4",
    },
    {
      id: 2,
      name: "존윅",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABesYIA0MeIXUdMFq1smL9kUcGPH6IVwlcqb6jDDpFdhVqSPwqb9iSM1YGPE7eN0U5i6ougeUWdxwFWMw2ia0ALj7Suzw0mYlUh8.webp?r=c5a",
    },
    {
      id: 3,
      name: "보이스",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABabVS5AaIobDaHRuWg_p-UWUINmVNrOUGM5MtXZ0LmFE0gmUBaBbP5FvMnRvV8YFiOu5DrR6ET_cn6cD70y1B3Y2YYEM9GoV3Xs.webp?r=ba2",
    },
    {
      id: 4,
      name: "나우 유 씨 미 마술사기단",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbXzSFHTQM0zOr3MFfcBVphEc37gj2NECgdg42LAyeLhu1k3H92_LYZueKMPaWZGbXAuY0Q8S3SsQUXuQSYKcKlTpwx70xp32v8.webp?r=7e4",
    },
    {
      id: 5,
      name: "완벽한 타인",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfBqwbo7_4TaT4nhzjZwVpzNzo9B3aQWXeLSWVd3jAeVu3oxzCJLWRe_rItFH1rON7oIjX6fbise-HtwsKk36hpo8yjsUFDHs4U.webp?r=88d",
    },
    {
      id: 6,
      name: "패신저스",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf785CDCWHjIhy8lkakr0LtItSAt8ATS23TMADP2Q6gYB1sup0b0Vn-YW5_Oh9zZEHhvx4rmo4WPUoXDS1pSPheMUEgc7bJ16fk.webp?r=616",
    },
    {
      id: 7,
      name: "헌터킬러",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaAhbbf3uRFjWNXlhHVWWKSo6051SBniebZLd7Eog_QOsK9RFjJwl3Fuj0LeVNVPvoMZh4LSYRknw527hqx5CEXOZ7VIJRdT138.webp?r=05e",
    },
    {
      id: 8,
      name: "마스터",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe94TNXA1ghppPZZQh40YVl5FhdeW8u_bnWt_uLCQ02jWmBH18fmNyatuS4BTrXEh7PbM5e-iNe6vlLvEoj2FlnECok-puwGKsQ.webp?r=b45",
    },
    {
      id: 9,
      name: "코어",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTrP_kc9swpVpv2THWrRf2Nko6O6t0BNh7Omd_NIVZ_ijnS2WO37MBY1vyZRPMb3uqeLsK-Oi0NXFNjTLLDyPoYY17XRyRvqyuM.webp?r=8a2",
    },
    {
      id: 10,
      name: "유열의 음악앨범범",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY4632B2uRcocgVPKridfmveEBaRkjaknf5yzyNmo56HFNNI-zWMZlZ5pFZ1GBP4IbWqvK2De47clUjoHCA7S6pt6-pMtZhQTsg.webp?r=03b",
    },
    {
      id: 11,
      name: "도굴",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbIeyJDCNT7ZhSy7WYtHiW8FaVmOUkx1WkK-l09IN-a1yjR2h9B2kDvn9S0LBTapQTwi3JPvSWAZGvayHY-FCcUB_k6j5hUHDLE.webp?r=b35",
    },
    {
      id: 12,
      name: "신과 함께께",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYr0-YA0f8KnQ03wHWqJtIzGWM49jbV8I07J-hv8fvlyjDsOmiZMhxPjNvXoxUDUp1KMgCPV2piqib10AOCJb2C2ip8rMsiGDb0.webp?r=719",
    },
    {
      id: 13,
      name: "배틀쉽",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUYPWtr6sv99MYsPrygmqHgUglaNBP9ymvLDhWzFaqcUt6YVOWzPZpA3N9-EnB64MHZQ02E2DMYOa5LYstPz4O-yiXRvFxLA6n8.webp?r=989",
    },
    {
      id: 14,
      name: "PMC",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTr5sg9Yh3dVIfPZ632tJKxqKQVi-yngBH_89_7CLz1e3x08QFZ6y4UhgXlXKSrDMiCp4G0kdhcfFlkwMycy6cS0VuHALPKUCC8.webp?r=408",
    },
    {
      id: 15,
      name: "원티드",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbfYQE5xyQkq5C8ymKyo9i40np7jY6TG3REClYyvAFTEsKDZoyXXesE1wdJQizPxpM5cpawnHDZA-TXCrBaXtasb-Dcifpzi8E4.webp?r=162",
    },
    {
      id: 16,
      name: "임금님의 사건수첩",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV6bo3qC1SaZchcBrftX2pW7gUHVJ5mteoqXIGr3SDpWf49XpwQjU16B-sBn6Ewy_Fj9o4f5sDIOuvO_ka0ODMByy-V4sJMoAD4.webp?r=3e1",
    },
    {
      id: 17,
      name: "쥬라기 월드",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXiUp8g5F6FnXLT5J9IhtxV77oJYUJaQgzObjISKnKtdMEjABAnm0KoHr8VpqQOl4PpNlkOyvWNWigAGgvclEaLp9pQ4D2XxDX8.webp?r=ec5",
    },
    {
      id: 18,
      name: "킬러의 보디가드",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWmup8TSip6BaRwzxjmsx5aM_iQSdSlaueyO2oVKDJQsWTlcVVFJ0hvih0kQKmAMcLpJZ520IWKh3AMQbeSF3OxRTNWYLhqSeVg.webp?r=fd7",
    },
    {
      id: 19,
      name: "동감",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSCeTg8qaoPI5D0onb-GzHk07g8Ev9QBllx5A_ybFY_ystu894UmGZ-ZBg2JD-fb9FIVnshtIFQPJNAb_8y54fSyJ4Dw4t1aKqk.webp?r=52e",
    },
    {
      id: 20,
      name: "백두산",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSQf3dzN0VaztTr1tS5qT7b8-6vGCzn42hxYpJeqGFmJUYbiBuDViXC6pzQENE7y8ox8o3TkAJK9qzc4SOdTyLd21yzAReL9jBA.webp?r=687",
    },
    {
      id: 21,
      name: "도둑들",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABexvA1_XuoEyV6cooFvmd8WK9rHcBaTa3caa9WaPfP6KyMNiHwRqr_eOWdbUdk7RJPV--JiDY9LSlA8TFiqS81stAZqptoErmdI.webp?r=049",
    },
    {
      id: 22,
      name: "테이큰",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU_M-ZVHqj7DG-ywLE1tIbl-ZzEd7XdTUSit-hmv4h-iIDUHXYF52XJu88zneQ1ZbqhGKxsCEw1Bxvz7OdCPEw-mIxDWur1eZmg.webp?r=1ba",
    },
    {
      id: 23,
      name: "승리호",
      title: "보고 또 봐도 좋은 명작",
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTJAtM6nPXgnxVEPIuJBzSMdfKb46tTm8utFqbaCcK2ORwe72_Oriaaj_yL6nIMJW6XeCuHUx6OoljJpcPrZBIdKVn61cDkLJ0NTA53SCX6XVymqJAsC6RIGWwwI9pFWd98R.jpg?r=5bf",
    },
  ];
  const data5 = [
    {
      id: 0,
      name: "경이로운 소문",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: one,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABUi84kl1rK0BG07DOyNR_6X_PJyO7Ii5Ft-psyn8o4ipUoRJD0GYjvepWqfnhexlTQFMrghr4ZnwMAiK6idRjefUodGKsP-MaCIm_KVmWcLwFfS0PBd0a5j2PxpdoWBhUEeIW1-cYb3ErWL-iSAjhUw83oMdeVv4Bs3Uf5HBnO-u_omD1WIGPX6kRJwaMr1zrO2-hODcU1dnVqAiJ7rw7zzYNAUsWj7i9Oagm2yXfP7HEwp5mGjdK_kghu6J28V7_DoGXx_UbUgRNYJ3z9qXllu9zkn_1w52.webp?r=61d",
    },
    {
      id: 1,
      name: "디피",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: two,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWxY5l2xMgp4rAPQlK0mVdRmwnX9qMz8Fhqi3TUDPqkinroS0WHV_SaZOQxwZfkyBtC0RH7SelAC9GL3xk9XtsLBcF2HfQkjQUJwv08CcnSd-urz6gRCx5otQ4EuyIk9XL3WtQ.jpg?r=954",
    },
    {
      id: 2,
      name: "킹더랜드",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: three,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABT4a3p9lla8T6ncIGWi6HgksZ4x0o3R3qJ3G3PFnTzK7zV8iQrlQmRCu3PJm__PkDVpwNDeXV0WWt2SWK18L8QfdbMKjtTzTGXlL9VWP2G2cDffs8DEBBYSiUJySDZRXkVpkJ1yDtYvtM2jnORbgk7H-R920L-yRJSKjAdYhzqgkEoE2Ox1YDMu-gGoJqvLV1MEVhbts2IcXq63FDgJ4wKJ_lJL9P_Lz-2w28JImXTubGneBtXURkACIXb9xW_X0p4wKLWJSYJNbvHt881cOt9WHiR-IKV1KSl5DHXvvX9uoSFF10SFjlwP9uGDH1szQ_LmQM98r3iTo6AayyqLbiN_f3qF9pldnzXc64VnzRrjaU4oN79Q1M3t_HHICV3TZYl4o4xp24cD1tLK7zi4HDJHCGOdhIUnn6HfrIJmP6qmfpihA6d_vMzIGNM7PAT16qe6FT_4FMA.webp?r=5a3",
    },
    {
      id: 3,
      name: "돌싱글즈",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: 1,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTkEv-tBzZNxjYGAYp6NT_cxlbiVwROVqQZ6j15mJEqsZKt8CDRG1tujICEppsj3vB5T0ZEo-eVpdwlGfs_NQe1IW0JY0qSKoP71PqfpJSdsWrwW3qMRKjSc9rvHj9iyHsFxN7RoliS4B1ettAV-7YuQ0qHh2h8hHG-KBhPwfJp9qnIw7HrZCm1dWV3YX4MApVQBIok2CcExL7dIVa10d4CICRL65-SRg3FDAUOXziZDtFgZgEGmphdlyZrWTapzoTiNxsX6DvdreReXnchcxUIGr1EuXHM0.webp?r=235",
    },
    {
      id: 4,
      name: "좀비버스",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: five,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTdtrM-D1dnaBIkrQU12hetUcVnmS08da8NPI1idnUanNJrFpQ8GqFO93Cn32-HbFdLKRRwv_ZHcRdPMaTI3gwFvwPvFa621-0Uiq5MT3BmiZForll63k3BQCul_hsG1Vw7U_w.jpg?r=566",
    },
    {
      id: 5,
      name: "오랫동안 당신을 기다렸습니다",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: six,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVTTyNniDYRt5eOChtVbyZWKKIVw1AEmr3fXt9jyPRd38kM9cvXTdyEJbJVy6IR2D_Wx0bJGA_l7sfeYbKHaQqcWMI7L6uQdZ_pSw_ma3nGrmoMPsV7GZZTuLsORQ-SbqISxg4sE8B3rjDi21cEfBkDSBXYyaC0hEhAxJbeZsu1ROBVnZ8JieJcqOZNJ0Un0-PaT-1mg8f2EHbsTy_NJKJMEvwAOl3_WtfF5GHGSIUxQ2TIyJYabPa34VAmeSfO3iZ4zgv3oXqRi9UDS6SYgES-GbSTp1NYAy8vTpe_cDQUMtRfMaKG3-LuytVl3nXW4jPVABcs5m65DqsNwS7nkq9iheEZtCsLrHgC5oybxrC0-9GVJnLJ5q00eJ2qHtZ6ltqlb1QxAqZe2vxzUzycZDwEKWCwND5scOprk_pvXnCckZLy37O6j2quVO_7P3cjDA7TcSM583Q.webp?r=f70",
    },
    {
      id: 6,
      name: "주술회전",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: seven,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWdB1Eo8WlnT0LfT2ejOp_xIYfA2T-qRAazgoQGwSWAnLpHCYo85DSm54ovQimdsFL25L7dHyu5louRBsBP6qBFwcnvB8kayEXba3SXrihksU_GhihCMzY-9bT_TB8RsdfF73TlmnCkBjNzx9UARXlo5qgzn7_5HFHqxktmm9UC9SFXRX6TKr9dl-xm5YK2aaQ9Z3hgTok9Qc-AGiG-ceT3ufV9MoWaG1vmpd7g-cErkQdNhiLxDWzeAXCKLFTZ_kYwNXrraaozU4fsbcKxbCASKCqXFWYdOTjGx_n0w3WKXIgOnNYrgaTzwfpmTDYlNwtsv4-FbVk62SKUDIOPjKf8XLCy0nZqe0YwJL8G8buGGFts67jCqce_fKCkwBTrU6jnceqPyctRcuGfe4hMYlyg7VTGgt8XUv3D5DaiBzQFfKHQUS7djSDb63oKWMO7TDPAEo-uG1Q.webp?r=f9e",
    },
    {
      id: 7,
      name: "나의 행복한 결혼",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: eight,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQItQhwOd7qQa2wka9K7pJZKKiyACu25i8S4EhRX-cRrNLoJDefUHPjMIi-7D-FQvWLfKSjRD5rEkb_x16cYnBauUlIk3Ibu_A2ggej6TmzqtV0hGdL4yusM5XWxbs9WyQn4_OLINOcxaNmWJ4xTvpBMwNMJPRyIvcb2ohOR-VElpFVNcpOXpdXvVcWv4Z2-ulXWq7K8sRV5Nf1NMzGtoCyAg-eA8P488pGQDMVWyBOSALdAPtmGOnI10ejxnNgXjraEp4eIPMiKL7ywHJha9n4mbGw24GOaM9noEp425ATkoCpmpx490KjUxAPBXZVT-R9MZBH6ZWvcQG_s9dCiBbBfWhN8OTrQluBlNUpweNEmd5I9ihT_3pqfWsxyVSIj3F_h70z9l1uJ7wWK8R0AlGzVNbF9lLR96_lo5mWq6lJwS4oKC1ykTJPzJsrTdYwlP0lsPSpfDFzdFyoH_oGEuuzDI41xOILV8riPoQ.jpg?r=fe6",
    },
    {
      id: 8,
      name: "최강야구",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: nine,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfCH9ZXKz7j2LLMw8nul5YSej0ALY5HUZ96wBKfDpoWlVNJu0ATVZfuyn7LLtofEDlaR2NIGBFzdvCtlDZXKVIKNAhh_FeHuUQOf38BuRkTH9_9rJq5ZfjKCCGm8nc13aly04ufcxHo3f_3muBwqnI4jNyv1F1tthdc34Vt0amM_e1YBzoSCenmrjK-eqHh-gQBohUb9wBq2zIyy-FbSIMFEL6mk0CR9dgYDepOfneU-Mf7MoP47yKyflXB1thPP0_5JGuYR24hCYxPuBDb3QBPLV4Wp3V66c1bjlcrb-NNv4ybjkgn0XK8Lyssm30u1pPAFRlJ0EFzQX6N2Y1kQhR-YYHBio7GbYBkBNbD9sBmogY98utYNCc83MK50dfxbqJBr1QWztzqlZEBu2qzEQnHDDprKrN1lernOgvBBTmUzHylAdKhzYPDWRU-6FOr--LyPMczilg.webp?r=8a4",
    },
    {
      id: 9,
      name: "좀100",
      title: "오늘 대한민국의 TOP 10 시리즈",
      numberimg: ten,
      image:
        "https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABbKMKL_MuoGUO0j876caSzB6G3RdFqX12kzWJpwYoUdf5yL2ddiokpXGW3632Z5qq12-OP-3CKgqgV4b0mgsbyUGl6hj3RMmCk1xIgwG8d0I3aw98o1nhGBw8A7eVNM96K34g9MQFcnGT7b89VG1gtSkRg5YWXmoZY_qN8xzDDTi7vqZgDZXtQTlgrhRx49D9zOJSbtPjGQP4VGRzGgqgiV0lziuB6JJVPIxZglhZ9pK5iGshVgmqYorabDpQTYRxgyzh2bPD_insIpdQyTTnTHkkaFgWYdlYoVJOIRqLoOKTjP4BKkerHBQizU3blXqcXgZIcick2AvtM4hVpulFaXblV5TJyjpClu5pXv7GD8fTET7LXceeRkGyHtzEEivE-0GCHfNx_ey2FDn_J8o1m7oSs8NUVCZS6yygT8XLYuoOI9KtQoAV89F6eYKsWkCwmaMmKyZ8g.webp?r=bb7",
    },
  ];

  const scrollRef = useRef(null);

  const nextBtnClickHandler = () => {
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    if (
      scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
      maxScrollLeft
    ) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    } else if (scrollRef.current.scrollLeft < maxScrollLeft) {
      scrollRef.current.scrollTo({
        left: maxScrollLeft,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const prevBtnClickHandler = () => {
    if (scrollRef.current.scrollLeft > scrollRef.current.clientWidth) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    } else if (scrollRef.current.scrollLeft > 0) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      const lastSlidePosition =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: lastSlidePosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <NextflixContainer>
      <Container1>
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
        <Carousel ref={scrollRef}>
          {data.map((el) => (
            <Card key={el.id} src={el.image} alt={el.name} />
          ))}
        </Carousel>
      </Container1>
      <Container2>
        <Title>
          <TitleText>믿고 보는 한국 드라마 작가 컬렉션</TitleText>
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
        <Carousel ref={scrollRef}>
          {data2.map((el) => (
            <Card key={el.id} src={el.image} alt={el.name} />
          ))}
        </Carousel>
      </Container2>
      <Container3>
        <Title>
          <TitleText>다시보기 추천 콘텐츠</TitleText>
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
        <Carousel ref={scrollRef}>
          {data3.map((el) => (
            <Card key={el.id} src={el.image} alt={el.name} />
          ))}
        </Carousel>
      </Container3>
      <Container4>
        <Title>
          <TitleText>보고 또 봐도 좋은 명작</TitleText>
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
        <Carousel ref={scrollRef}>
          {data4.map((el) => (
            <Card key={el.id} src={el.image} alt={el.name} />
          ))}
        </Carousel>
      </Container4>
      <Container5>
        <Title>
          <TitleText>오늘 대한민국의 TOP 10 시리즈</TitleText>
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
        <Carousel ref={scrollRef}>
          {data5.map((el) => (
            <Top10Card
              key={el.id}
              img={el.numberimg}
              src={el.image}
              alt={el.name}
            />
          ))}
        </Carousel>
      </Container5>
    </NextflixContainer>
  );
}

const NextflixContainer = styled.div`
  overflow: hidden;
`;

const Container1 = styled.div`
  margin: 3vw 0;
  position: relative;
`;

const Container2 = styled.div`
  margin: 3vw 0;
  position: relative;
`;

const Container3 = styled.div`
  margin: 3vw 0;
  position: relative;
`;

const Container4 = styled.div`
  margin: 3vw 0;
  position: relative;
`;

const Container5 = styled.div`
  margin: 3vw 0;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  line-height: 1.3;
  margin-bottom: 0.25rem;
`;

const ViewAll = styled.div`
  display: flex;
  align-items: center;
`;

const Carousel = styled.div`
  height: 100%;
  display: flex;
`;

const ViewAllArrow = styled.span`
  background-color: none;
  cursor: pointer;
  opacity: 0;
  font-size: 13px;
  font-weight: bolder;
  padding-bottom: 3px;
`;

const ViewAllText = styled.h2`
  font-size: 12px;
  background-color: none;
  cursor: pointer;
  opacity: 0;
`;

const TitleText = styled.h2`
  font-size: 14px;
  margin-left: 2px;
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
  opacity: 1;
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
    transform: scale(1.1);
    transition: all ease-in 0.2s;
    opacity: 1;
  }
`;

const RightScrollButton = styled.div`
  right: 0;
  border: none;
  width: 70px;
  height: 130px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover ${ArrowIcon} {
    transform: scale(1.1);
    transition: all ease-in 0.2s;
    opacity: 1;
  }
`;
