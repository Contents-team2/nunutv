import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <FooterWrapper>
          <Heading>
            질문이 있으신가요? 문의 전화: <Contact href='tel:010-1234-5678'>010-1234-5678</Contact>
          </Heading>
          <LinklistGrid>
            <ul>
              <li>
                <Link href='#!'>자주 묻는 질문</Link>
              </li>
              <li>
                <Link href='#!'>고객 센터</Link>
              </li>
              <li>
                <Link href='#!'>계정</Link>
              </li>
              <li>
                <Link href='#!'>미디어 센터</Link>
              </li>
              <li>
                <Link href='#!'>투자 정보(IR)</Link>
              </li>
              <li>
                <Link href='#!'>입사 정보</Link>
              </li>
              <li>
                <Link href='#!'>넷플릭스 지원 디바이스</Link>
              </li>
              <li>
                <Link href='#!'>이용 약관</Link>
              </li>
              <li>
                <Link href='#!'>개인정보 처리방침</Link>
              </li>
              <li>
                <Link href='#!'>쿠키 설정</Link>
              </li>
              <li>
                <Link href='#!'>회사 정보</Link>
              </li>
              <li>
                <Link href='#!'>문의하기</Link>
              </li>
              <li>
                <Link href='#!'>속도 테스트</Link>
              </li>
              <li>
                <Link href='#!'>법적 고지</Link>
              </li>
              <li>
                <Link href='#!'>오직 넷플릭스에서</Link>
              </li>
            </ul>
          </LinklistGrid>
          <LanguageSelectBox>
            {" "}
            {/** TODO: 공통 컴포넌트로 분리하여 관리 */}
            <LanguageSelectButton>
              <GlobleImg role='img'>
                <img src='/images/icon/global_ico.svg' alt='global' />
              </GlobleImg>
              <select name='LanguageSelect' id='asdf'>
                <option value='ko'>한국어</option>
                <option value='en'>영어</option>
                한국어
              </select>
            </LanguageSelectButton>
          </LanguageSelectBox>
          <BrandLocation>Nunu Korea</BrandLocation>
          <Footnote>
            <div class='copy-text'>
              <div class='copy-text-block'>
                (주) Nunu 유한회사 통신판매업신고번호: 제2999-화성도지-0999호 전화번호: 010-1234-5678
              </div>
              <div class='copy-text-block'>대표: 하진수</div>
              <div class='copy-text-block'>이메일 주소: supercoding@nunutv.collaborate</div>
              <div class='copy-text-block'>
                주소: 화성 타스시스 도지특별시 슈퍼구 코딩국로 99, 올림푸스몬스 Z동 990층 우편번호 03999
              </div>
              <div class='copy-text-block'>사업자등록번호: 199-99-00999</div>
              <div class='copy-text-block'>클라우드 호스팅: Godmazon Web Services Inc.</div>
              <div id='' class='copy-text-block' data-uia=''>
                <p>
                  <a href='http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119'>공정거래위원회 웹사이트</a>
                  {`<- 이것만은 진짜`}
                </p>
              </div>
            </div>
          </Footnote>
        </FooterWrapper>
      </FooterComponent>
    </>
  );
};

export default Footer;

const FooterComponent = styled.footer`
  background-color: #000;
`;

const FooterWrapper = styled.div`
  margin: 0 32px;
  padding: 20px 0;
`;

const Heading = styled.div`
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 0;
`;

const Contact = styled.a`
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.7);
`;

const LinklistGrid = styled.div`
  padding: 12px 0;
`;

const Link = styled.a`
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.7);
`;

const LanguageSelectBox = styled.div`
  position: relative;
  padding: 12px 0;
`;

const GlobleImg = styled.div`
  position: absolute;
`;

const LanguageSelectButton = styled.div`
  /* position: absolute; */
`;

const BrandLocation = styled.p`
  background-color: #000;
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 0;
`;

const Footnote = styled.div`
  background-color: #000;
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 0;
`;
