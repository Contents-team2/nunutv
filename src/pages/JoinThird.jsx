import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";
import LandingPageHeader from '../layouts/LandingPageHeader/LandingPageHeader';

const JoinThird = () => {

    const navigate = useNavigate();

    function goToJoinMain() {
        navigate("/");
    }

    return (
        <>
        <LandingPageHeader />
        <BodyDiv>
            <Form>
                <FormDiv>
                    <StepDiv>3/3단계</StepDiv>
                    <H1>축하합니다! 회원가입이 <br/> 완료 되었습니다.</H1>
                    <DIV1>이제 원하는 프로그램을 자유롭게 시청하세요!</DIV1>
                    <ButtonDiv onClick={goToJoinMain}>메인화면으로 이동</ButtonDiv>
                </FormDiv>
            </Form>
        </BodyDiv>
        </>
    );
};

export default JoinThird;

const BodyDiv = styled.div`
    margin: 100px 600px 15px;
    padding: 20px 32px 60px;
`;

const Form = styled.form`
    display: block;
    margin: 200px 0 50px 100px;
`;

const FormDiv = styled.div`
    /* max-width: 440px;
    margin: 0 237px;
    text-align: left; */
`;

const StepDiv = styled.div`
    font-size: 15px;
    margin: 10px 0;
`;

const H1 = styled.h1`
    font-size: 36px;
    width: 450px;
    line-height: 45px;
`;

const DIV1 = styled.div`
    margin: 15px 0;
    font-size: 17px;
`;

const ButtonDiv = styled.button`
  margin-top: 30px;
  width: 450px;
  height: 70px;
  border-radius: 5px;
  color: white;
  background-color: red;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;