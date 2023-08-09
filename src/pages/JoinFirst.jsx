import React from "react";
import styled from "styled-components";

const JoinFirst = () => {

  // const Intro = () => {
  //   const navigate = useNavigate();

  //   const goToJoinSecond = () => {
  //     navigate("/joinSecond");
  //   }
  // };

  return (
    <>
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
          <PriceOption>광고형 스탠다드</PriceOption>
          <PriceOption>스탠다드</PriceOption>
          <PriceOption>프리미엄</PriceOption>
        </RedBox>
        <TableOuter>
            <TableRow>
              <TableCol className="col1">월 요금</TableCol>
              <TableCol className="col2">5,500원</TableCol>
              <TableCol className="col3">13,500원</TableCol>
              <TableCol className="col4">17,000원</TableCol>
            </TableRow>
            <TableRow>
              <TableCol className="col1">영상 화질</TableCol>
              <TableCol className="col2">매우 좋음</TableCol>
              <TableCol className="col3">매우 좋음</TableCol>
              <TableCol className="col4">가장 좋음</TableCol>
            </TableRow>
            <TableRow>
              <TableCol className="col1">해상도</TableCol>
              <TableCol className="col2">1080p</TableCol>
              <TableCol className="col3">1080p</TableCol>
              <TableCol className="col4">4K+HDR</TableCol>
            </TableRow>
            <TableRow>
              <TableCol className="col1">TV, 컴퓨터, 스마트폰, 태블릿으로 시청</TableCol>
              <TableCol className="col2">Yes</TableCol>
              <TableCol className="col3">Yes</TableCol>
              <TableCol className="col4">Yes</TableCol>
            </TableRow>
            <TableRow>
              <TableCol classNames="col1">저장</TableCol>
              <TableCol classNames="col2">No</TableCol>
              <TableCol classNames="col3">Yes</TableCol>
              <TableCol classNames="col4">Yes</TableCol>
            </TableRow>
        </TableOuter>
        <AdDiv>광고형 멤버십에는 몇 가지 차이점이 있습니다. 광고형 멤버십에 대해 알아보세요.</AdDiv>
        <AdDiv>광고형 멤버십을 선택하면, 맞춤형 광고와 Netflix의 개인정보 처리방침에 부합하는 기타 목적을 위해 생년월일을 제공해 주셔야 합니다.</AdDiv>
        <AdDiv>HD(720p), 풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은 이용 약관을 확인하세요.</AdDiv>
        <AdDiv>함께 거주하는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄 멤버십은 동시접속 4명, 스탠다드 또는 광고형 스탠다드는 2명, 베이식은 1명까지 가능합니다.</AdDiv>
        <ButtonDiv /*onClick={goToJoinSecond}*/>다음</ButtonDiv>
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
`;

const PriceOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  padding: 20px 20px;
  width: 80px;
  height: 80px;
  background-color: red;
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 3px;
`;

const TableOuter = styled.table`
  margin: 10px 360px;
  width: 850px;
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 15px;

`;

const TableRow = styled.tr`
  
`;

const TableCol = styled.td`
  border-bottom: 1px solid #444444;
  padding: 0 0 30px 0;
`;

const AdDiv = styled.div`
  margin: 0 350px;
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