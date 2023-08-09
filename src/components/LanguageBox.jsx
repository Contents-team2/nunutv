import React from "react";
import { styled } from "styled-components";

const LanguageBox = () => {
  return (
    <>
      <LanguageSelectBox>
        <LanguageSelectButton>
          <LanguageSelectDiv>
            <GlobleImg role='img'>
              <img src='/images/icon/global_ico_dark.svg' alt='global' />
            </GlobleImg>
            <Select name='LanguageSelect' id='asdf'>
              <option value='ko'>한국어</option>
              <option value='en'>영어</option>
              한국어
            </Select>
            <ArrowImg>
              <img src='/images/icon/arrow_bottom.svg' alt='global' />
            </ArrowImg>
          </LanguageSelectDiv>
        </LanguageSelectButton>
      </LanguageSelectBox>
    </>
  );
};

export default LanguageBox;

const LanguageSelectBox = styled.div`
  position: relative;
  padding: 12px 0;
`;

const LanguageSelectButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LanguageSelectDiv = styled.div`
  position: relative;
`;

const GlobleImg = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 10px;
`;

const Select = styled.select`
  height: 2rem;
  color: #fff;
  background-color: rgba(22, 22, 22, 0.7);
  padding: 6px 36px;
  border-radius: 4px;
  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */
  text-align-last: center;
`;

const ArrowImg = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 86px;
`;
