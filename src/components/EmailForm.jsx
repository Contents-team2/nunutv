import React, { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email.includes(".")) {
      localStorage.setItem("joinEmail", email);
      return navigate("/joinFirst");
    }
  };

  return (
    <>
      <FormDiv>
        <Form onSubmit={onSubmitHandler}>
          <H3Tag>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</H3Tag>
          <InputDiv>
            <Input placeholder='이메일 주소' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button>시작하기 {">"}</Button>
          </InputDiv>
        </Form>
      </FormDiv>
    </>
  );
};

export default EmailForm;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding-bottom: 80px;
`;

const H3Tag = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin: 20px auto 0;
`;

const InputDiv = styled.div`
  /* background-color: pink; */
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  background-color: rgba(22, 22, 22, 0.8);
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  padding-left: 20px;
  width: 480px;
  height: 48px;
`;

const Button = styled.button`
  background-color: red;
  border-style: none;
  border-radius: 4px;
  color: #fff;
  font-size: 24px;
  width: 160px;
  margin-left: 10px;
`;
