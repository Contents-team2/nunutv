import React from "react";
import { styled } from "styled-components";
import LanguageBox from "../Components/LanguageBox";

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <FooterWrapper>
          <Heading>
            질문이 있으신가요? 문의 전화: <Contact href='tel:010-1234-5678'>010-1234-5678</Contact>
          </Heading>
          <LinklistGrid>
            <UnorderedList>
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
            </UnorderedList>
          </LinklistGrid>
          <LanguageBox />
          <BrandLocation>Nunu Korea</BrandLocation>
          <Footnote>
            <div>
              <div>(주) Nunu 유한회사 통신판매업신고번호: 제2999-화성도지-0999호 전화번호: 010-1234-5678</div>
              <div>대표: 하진수</div>
              <div>이메일 주소: supercoding@nunutv.collaborate</div>
              <div>주소: 화성 타르시스 도지특별시 슈퍼구 코딩국로 99, 올림푸스몬스 Z동 990층 우편번호 03999</div>
              <div>사업자등록번호: 199-99-00999</div>
              <div>클라우드 호스팅: Godmazon Web Services Inc.</div>
              <div>
                <p>
                  <FtcAnchor href='http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119'>
                    공정거래위원회 웹사이트
                  </FtcAnchor>
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
  display: grid;
  grid-template-rows: auto;
  margin-right: 0rem;
  margin-left: 0rem;
  row-gap: 0.75rem;
  min-width: 10.875rem;
  box-sizing: border-box;
`;

const UnorderedList = styled.ul`
  --grid-column-count: 4;
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));
  --grid-layout-gap: 0.75rem;
  --grid-item--min-width: 10.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
  box-sizing: border-box;
  margin-bottom: 0;
  list-style-type: none;
  line-height: 1.3125rem;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

const Link = styled.a`
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.7);
`;

const BrandLocation = styled.p`
  background-color: #000;
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 0;
`;

const FtcAnchor = styled.a`
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Footnote = styled.div`
  background-color: #000;
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 0;

  div {
    margin-bottom: 2px;
  }
`;
