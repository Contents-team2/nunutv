import React, { useState } from "react";
import { styled } from "styled-components";

const FaqList = ({ faq }) => {
  const [isFaqState, setIsFagState] = useState(false);

  const FaqButtonClickHandler = () => {
    setIsFagState((prev) => !prev);
    console.log(isFaqState);
  };
  return (
    <>
      <FAQ>
        <Question>
          <FAQButton onClick={FaqButtonClickHandler}>
            <ButtonSpan>{faq.question}</ButtonSpan>
            <IMG isFaqState={isFaqState} src='/images/landingPage/plus.svg' alt='+' />
          </FAQButton>
        </Question>
        <FAQInnerDiv>
          <Answer isFaqState={isFaqState}>
            {faq.answer}
            <span>{faq.answer2}</span>
            {faq?.link && faq?.anchorAnswer ? <Anchor href={faq.link}>{faq.anchorAnswer}</Anchor> : null}
            {"."}
          </Answer>
        </FAQInnerDiv>
      </FAQ>
    </>
  );
};

export default FaqList;

const FAQ = styled.li`
  max-width: 100%;
  background-color: #222;

  margin-bottom: 10px;
`;

const Question = styled.h3`
  display: flex;
  margin-bottom: 1px;
`;
const FAQButton = styled.button`
  width: 100%;
  padding: 30px;
  background-color: #222;
  border-style: none;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-decoration: none;

  &:hover {
    background-color: #333;
  }
`;

const ButtonSpan = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 24px;
`;

const IMG = styled.img`
  position: absolute;
  right: 24px;
  width: 36px;
  height: 36px;
  transform: ${(props) => (props.isFaqState ? "rotate(90deg)" : "rotate(0deg)")};
`;
///////////////////////////

const FAQInnerDiv = styled.div`
  max-height: 1200px;
  padding: 32px;
  /* display: ${(props) => (props.isFaqState ? "block" : "none")}; */
  text-align: left;
`;
const Answer = styled.span`
  font-size: 24px;
  /* padding: 24px; */
  line-height: 1.3;
`;

const Anchor = styled.a`
  color: white;
`;
