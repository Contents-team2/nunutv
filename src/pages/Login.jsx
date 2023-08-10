import React, { useState } from "react";
import { styled } from "styled-components";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Wallpaper from "../components/wallpaper/Wallpaper";
import { useDispatch } from "react-redux";
import { login } from "../store/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    const inputValue = e.target.value;
    console.log("id" + inputValue);
    setEmail(inputValue);
  };
  const passwordChangeHandler = (e) => {
    const inputValue = e.target.value;
    console.log("pw" + inputValue);
    setPassword(inputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userdata", user);
        localStorage.setItem("accessToken", user.accessToken);
        dispatch(login(user.accessToken));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <LoginContainer>
        <Wallpaper />
        <Before />
        <LoginBody>
          <LoginComponent>
            <Heading>로그인</Heading>
            <FormDiv onSubmit={onSubmitHandler}>
              <InputWrapper>
                <InputDiv>
                  <InputLabel>
                    <Input type='email' name='email' id='email' value={email} onChange={(e) => emailChangeHandler(e)} />
                    <Label>이메일 주소</Label>
                  </InputLabel>
                </InputDiv>
              </InputWrapper>
              <InputWrapper>
                <InputDiv>
                  <InputLabel>
                    <Input
                      type='password'
                      name='password'
                      id='password'
                      value={password}
                      onChange={passwordChangeHandler}
                    />
                    <Label>비밀번호</Label>
                  </InputLabel>
                </InputDiv>
              </InputWrapper>
              <Button>로그인</Button>
              <LoginFormDiv>
                <LoginRememberDiv>
                  <BeforeInput />
                  <AfterInput />
                  <LoginRememberMe type='checkbox'></LoginRememberMe>
                  <LoginRememberLabel>로그인 정보 저장</LoginRememberLabel>
                </LoginRememberDiv>
                <LoginHelp>도움이 필요하신가요?</LoginHelp>
              </LoginFormDiv>
            </FormDiv>
            <JoinInfoDiv>
              <JoinDiv>
                Netflix 회원이 아닌가요? <JoinAnchor href='/'>지금 가입하세요</JoinAnchor>.
              </JoinDiv>
              <InfoDiv>
                <InfoParagraph>
                  <span>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</span>&nbsp;
                  <InfoButton>자세히 알아보기.</InfoButton>
                </InfoParagraph>
                <InfoParagraph>
                  <span>
                    Google reCAPTCHA가 수집하는 정보에는 Google{" "}
                    <InfoAnchor href='https://policies.google.com/privacy'>개인정보처리방침</InfoAnchor>과{" "}
                    <InfoAnchor href='https://policies.google.com/terms'>서비스 약관</InfoAnchor>이 적용되며, 해당
                    정보는 reCAPTCHA 서비스 제공, 관리 및 개선과 일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤
                    광고에 사용 안 함).
                  </span>
                </InfoParagraph>
              </InfoDiv>
            </JoinInfoDiv>
          </LoginComponent>
        </LoginBody>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  position: relative;
  background-color: #000;
  z-index: 0;
`;

const Before = styled.div`
  height: 91px;
`;

const LoginBody = styled.div`
  margin: 0 auto -236px;
  max-width: 450px;
  min-height: 100vh;

  @media (max-width: 740px) {
    margin: 0 auto;
    padding: 0;
    min-width: 100vw;
    min-height: 0;
  }
`;

const LoginComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 90px;
  height: 660px;
  padding: 60px 68px 40px;

  @media (max-width: 740px) {
    background-color: skyblue;
    height: 550px;
    padding: 20px 5% 30px;
    margin-bottom: 90px;
  }
`;

const FormDiv = styled.form``;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
  color: #fff;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputDiv = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const InputLabel = styled.label``;

const Input = styled.input`
  background-color: #333;
  border: 0;
  border-radius: 4px;
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 16px 20px 0;
  box-sizing: border-box;
`;

const Label = styled.label`
  color: #8c8c8c;
  position: absolute;
  top: 50%;
`;

const Button = styled.button`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 12px;
  background: #e50914;
  color: #fff;
  border-style: none;
  cursor: pointer;

  @media screen and (min-width: 360px) {
    max-width: 100%;
    width: 100%;
  }

  @media screen and (min-width: 500px) {
    padding: 16px;
  }
`;

const LoginFormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  color: #333;
`;

const LoginRememberDiv = styled.div``;

const BeforeInput = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #737373;
  border: 0;
  border-radius: 2px;
`;

const LoginRememberMe = styled.input`
  position: absolute;
  left: -2px;
  top: -1px;
  margin-right: 10px;
  opacity: 0;
  cursor: pointer;
  &:checked {
    opacity: 0.1;
  }
`;

const AfterInput = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fff;
  opacity: 0;
  border: 0;
  border-radius: 2px;
  ${LoginRememberMe}:checked & {
    opacity: 1;
  }
`;

const LoginRememberLabel = styled.label`
  font-size: 13px;
  padding-left: 20px;
  color: #737373;
`;

const LoginHelp = styled.a`
  padding-top: 2px;
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const JoinInfoDiv = styled.div`
  /* padding: 20px; */
  margin-top: 80px;
  color: #737373;
`;

const JoinDiv = styled.div`
  padding: 0;
`;

const JoinAnchor = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;

const InfoDiv = styled.div`
  margin-top: 20px;
`;

const InfoParagraph = styled.p`
  font-size: 13px;
  margin: 10px 0;
`;

const InfoButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const InfoAnchor = styled.button`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;
