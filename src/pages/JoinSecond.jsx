import React from 'react';
import { styled } from 'styled-components';

const JoinSecond = () => {

    // 초기값 세팅 - 이메일, 비밀번호
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    // 오류메세지 상태 저장
    const [emailMessage, setEmailMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [checkBoxMessage, setCheckBoxMessage] = React.useState("");

    // 유효성 검사
    const [isEmail, setIsEmail] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
          /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
     
        if(document.getElementById("email").value=""){
            setEmailMessage("이메일 주소는 반드시 입력하셔야 합니다.");
            setIsEmail(false);
        }else if(!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일 주소를 정확히 입력하세요.");
            setIsEmail(false);
        } else {
            setEmailMessage("");
            setIsEmail(true);
        }
    };

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp =
        /^(?=.*[0-9a-zA-Z!@#$%^*+=-]).{6,60}$/;
        if (!passwordRegExp.test(currentPassword)) {
        setPasswordMessage(
            "비밀번호는 6~60자 사이여야 합니다."
        );
        setIsPassword(false);
        } else {
        setPasswordMessage("");
        setIsPassword(true);
        }
    };

    const checkBox = (e) => {
        const ch1 = document.input.necessary.checked;

        if(!ch1){
            setCheckBoxMessage("먼저 이용 약관에 동의하셔야 합니다.");
        }
    };

    return (
        <BodyDiv>
            <Form method="POST">
                <FormDiv>
                    <StepDiv>2/3단계</StepDiv>
                    <H1>비밀번호를 설정해 멤버십을 시작하세요.</H1>
                    <DIV1>몇 단계만 더 거치면 누누티비 가입 완료!</DIV1>
                    <DIV2>복잡한 단계는 모두 없앴습니다.</DIV2>
                    <InputOuterDiv className="form">
                        <InputDiv1 className="form-el">
                            <Input1 
                            type="email"
                            placeholder="이메일 주소" 
                            id="email"
                            name="name"
                            value={email}
                            onChange={onChangeEmail} />
                            <p className="message">{emailMessage}</p>
                        </InputDiv1>
                        <InputDiv2 className="form-el">
                            <Input2 
                            type="password"
                            placeholder="비밀번호를 추가하세요"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChangePassword}/>
                            <p className="message">{passwordMessage}</p>
                        </InputDiv2>
                    </InputOuterDiv>
                    <CheckboxOuterDiv>
                        <CheckInput type="checkbox" id="necessary" />
                        <CheckboxDiv>예, 저는 개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다. (상세 정보)</CheckboxDiv>
                    </CheckboxOuterDiv>
                    <CheckboxOuterDiv>
                        <CheckInput type="checkbox" />
                        <CheckboxDiv>예, 누누티비 특별 할인 알림 이메일을 보내주세요. (선택 사항)</CheckboxDiv>
                    </CheckboxOuterDiv>
                    <ButtonDiv type="submit">동의하고 계속</ButtonDiv>
                </FormDiv>
            </Form>
        </BodyDiv>
    );
};

export default JoinSecond;

const BodyDiv = styled.div`
    margin: 100px 600px 15px;
    padding: 20px 32px 60px;
`;

const Form = styled.form`
    display: block;
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
    font-size: 35px;
    width: 450px;
    line-height: 44px;
`;

const DIV1 = styled.div`
    margin: 15px 0;
    font-size: 17px;
`;

const DIV2 = styled.div`
    font-size: 17px;
`;

const InputOuterDiv = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`;

const InputDiv1 = styled.div``;
const InputDiv2 = styled.div``;

const Input1 = styled.input`
    width: 430px;
    height: 45px;
    margin-bottom: 15px;
    padding-left: 15px;
    font-size: 17px;
`;

const Input2 = styled.input`
    width: 430px;
    height: 45px;
    padding-left: 15px;
    font-size: 17px;
`;

const CheckboxOuterDiv = styled.div`
    display: flex;
`;

const CheckInput = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-left: 0px;
`;

const CheckboxDiv = styled.div`
    width: 380px;
    line-height: 23px;
    margin-bottom: 10px;
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