import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LandingPageHeader from "../layouts/LandingPageHeader/LandingPageHeader";

const JoinFirst = () => {

  const navigate = useNavigate();

  function goToJoinSecond() {
      navigate("/joinSecond");
  }

  const [optionClick, setOptionClick] = useState(null);
      //핸들러 만들기
      const handle = (option) => {
        setOptionClick(option)
        };

  return (
    <>
    <LandingPageHeader />
    <BodyDiv>
      <Form>
        <UpperInfo>
          <StepDiv>1/3단계</StepDiv>
          <H1>원하는 멤버십을 선택하세요</H1>
          <UlDiv>
              <List>무제한으로 즐기세요.</List>
              <List>취향에 꼭 맞는 콘텐츠를 추천해 드립니다.</List>
              <List>멤버십은 언제든지 변경 또는 해지 가능합니다.</List>
          </UlDiv>
        </UpperInfo>
        <RedBox>
          <PriceOption onClick={()=>handle('option1')} optionClick={optionClick === 'option1'}>광고형 스탠다드</PriceOption>
          <PriceOption onClick={()=>handle('option2')} optionClick={optionClick === 'option2'}>스탠다드</PriceOption>
          <PriceOption onClick={()=>handle('option3')} optionClick={optionClick === 'option3'}>프리미엄</PriceOption>
        </RedBox>
        <TableOuter>
            <TableRow>
              <TableCol1>월 요금</TableCol1>
              <TableCol2 onClick={()=>handle('option1')} optionClick={optionClick === 'option1'}>5,500원</TableCol2>
              <TableCol3 onClick={()=>handle('option2')} optionClick={optionClick === 'option2'}>13,500원</TableCol3>
              <TableCol4 onClick={()=>handle('option3')} optionClick={optionClick === 'option3'}>17,000원</TableCol4>
            </TableRow>
            <TableRow>
              <TableCol1>영상 화질</TableCol1>
              <TableCol2 onClick={()=>handle('option1')} optionClick={optionClick === 'option1'}>매우 좋음</TableCol2>
              <TableCol3 onClick={()=>handle('option2')} optionClick={optionClick === 'option2'}>매우 좋음</TableCol3>
              <TableCol4 onClick={()=>handle('option3')} optionClick={optionClick === 'option3'}>가장 좋음</TableCol4>
            </TableRow>
            <TableRow>
              <TableCol1>해상도</TableCol1>
              <TableCol2 onClick={()=>handle('option1')} optionClick={optionClick === 'option1'}>1080p</TableCol2>
              <TableCol3 onClick={()=>handle('option2')} optionClick={optionClick === 'option2'}>1080p</TableCol3>
              <TableCol4 onClick={()=>handle('option3')} optionClick={optionClick === 'option3'}>4K+HDR</TableCol4>
            </TableRow>
            <TableRow>
              <TableCol1>TV, 컴퓨터, 스마트폰, 태블릿으로 시청</TableCol1>
              <TableCol2 onClick={()=>handle('option1')} optionClick={optionClick === 'option1'}>Yes</TableCol2>
              <TableCol3 onClick={()=>handle('option2')} optionClick={optionClick === 'option2'}>Yes</TableCol3>
              <TableCol4 onClick={()=>handle('option3')} optionClick={optionClick === 'option3'}>Yes</TableCol4>
            </TableRow>
            <TableRow>
              <TableCol1>저장</TableCol1>
              <TableCol2 onClick={()=>handle('option1')} optionClick={optionClick === 'option1'}>No</TableCol2>
              <TableCol3 onClick={()=>handle('option2')} optionClick={optionClick === 'option2'}>Yes</TableCol3>
              <TableCol4 onClick={()=>handle('option3')} optionClick={optionClick === 'option3'}>Yes</TableCol4>
            </TableRow>
        </TableOuter>
        <AdDiv>광고형 멤버십에는 몇 가지 차이점이 있습니다. 광고형 멤버십에 대해 알아보세요.</AdDiv>
        <AdDiv>광고형 멤버십을 선택하면, 맞춤형 광고와 Netflix의 개인정보 처리방침에 부합하는 기타 목적을 위해 생년월일을 제공해 주셔야 합니다.</AdDiv>
        <AdDiv>HD(720p), 풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은 이용 약관을 확인하세요.</AdDiv>
        <AdDiv>함께 거주하는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄 멤버십은 동시접속 4명, 스탠다드 또는 광고형 스탠다드는 2명, 베이식은 1명까지 가능합니다.</AdDiv>
        <ButtonDiv onClick={goToJoinSecond}>다음</ButtonDiv>
      </Form>
    </BodyDiv>
    </>
  );
};  

export default JoinFirst;

const BodyDiv = styled.div`
  width: 1330px;
  margin: 100px;
`;

const Form = styled.form`
  display: block;
  margin: 180px 0 50px 47px;
`;

const UpperInfo = styled.div`
  margin: 130px 0px 0px 380px;
  align-items: center;
`;

const StepDiv = styled.div`
  font-size: 15px;
  margin: 10px 0;
`;

const H1 = styled.h1`
  font-size: 30px;
`;

const UlDiv = styled.div`
  margin: 10px 0;
  padding: 10px 0;
`;

const List = styled.div`
  margin: 13px 0;
  font-size: 17px;
`;

const RedBox = styled.label`
  display: flex;
  justify-content: flex-end;
  margin: 10px 30px;
  width: 1300px;
`;

const PriceOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  padding: 25px 25px;
  width: 85px;
  height: 85px;
  background-color: ${({optionClick}) => optionClick ? 'rgb(255,0,0)' : 'rgb(255,0,0,0.6)'};
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 3px;
  border: none;
  transition: background-color .3s;
`;

const TableOuter = styled.table`
  margin: 10px 370px;
  width: 930px;
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 15px;

`;

const TableRow = styled.tr`
  
`;

const TableCol1 = styled.td`
  border-bottom: 1px solid #444444;
  padding: 0 0 30px 0;
  width: 380px;
  font-size: 18px;
`;

const TableCol2 = styled.td`
  border-bottom: 1px solid #444444;
  padding: 0 0 30px 0;
  width: 190px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${({optionClick}) => optionClick ? 'red' : 'gray'};
`;

const TableCol3 = styled.td`
  border-bottom: 1px solid #444444;
  padding: 0 0 30px 0;
  width: 195px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${({optionClick}) => optionClick ? 'red' : 'gray'};
`;

const TableCol4 = styled.td`
  border-bottom: 1px solid #444444;
  padding: 0 0 30px 30px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${({optionClick}) => optionClick ? 'red' : 'gray'};
  
`;

const AdDiv = styled.div`
  margin: 0 365px;
  width: 950px;
`;

const ButtonDiv = styled.button`
  margin: 50px 600px;
  width: 400px;
  height: 70px;
  border-radius: 5px;
  color: white;
  background-color: red;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;