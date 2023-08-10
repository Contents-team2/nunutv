// import React, { useState } from "react";
// import testImg from "../assets/test.jpg";
// import { styled } from "styled-components";
// import TestBtns from "../Components/TestBtns";
// import AddLikeBtn from "../modal/component/AddLikeBtn";

// const Test = () => {
//   const [isCardHovered, setIsCardHovered] = useState(false);
//   let timer;

//   const cardMouseEnterHandler = () => {
//     timer = setTimeout(() => {
//       setIsCardHovered(true);
//     }, 300);
//   };

//   const cardMouseLeaveHandler = () => {
//     setIsCardHovered(false);
//   };

//   return (
//     <TestDiv>
//       <TestCard
//         isCardHovered={isCardHovered}
//         onMouseLeave={cardMouseLeaveHandler}
//       >
//         <ImgDiv onMouseEnter={cardMouseEnterHandler}>
//           <TestImg src={testImg} alt="테스트 이미지" />
//         </ImgDiv>
//         <TestText show={isCardHovered}>
//           <BtnWrapper>
//             <TestBtns />
//           </BtnWrapper>
//           <GenreWrapper>
//             <GenreMini>음악, 학교, 청춘</GenreMini>
//           </GenreWrapper>
//         </TestText>
//       </TestCard>
//     </TestDiv>
//   );
// };

// export default Test;

// const TestDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const TestCard = styled.div`
//   margin-top: 15rem;
//   position: relative;
//   margin-bottom: 5rem;
//   width: 12rem;
//   height: 10rem;
//   transition: all 0.15s linear;
//   &:hover {
//     transform: ${(props) => (props.isCardHovered ? "scale(1.5)" : "none")};
//   }
// `;

// const ImgDiv = styled.div`
//   width: 100%;
//   height: 60%;
//   position: relative;
//   overflow: hidden;
//   border-top-left-radius: 0.25rem;
//   border-top-right-radius: 0.25rem;
// `;

// const TestImg = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// const TestText = styled.div`
//   width: 100%;
//   height: 50%;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: black;
//   border-bottom-left-radius: 0.25rem;
//   border-bottom-right-radius: 0.25rem;
//   opacity: ${(props) => (props.show ? "0.7" : "0")};
//   color: white;
//   transition: opacity 0.15s ease-in-out;
// `;

// const BtnWrapper = styled.div`
//   margin-top: 0.5rem;
//   display: flex;
//   align-items: center;
// `;

// const GenreWrapper = styled.div`
//   margin-top: 1rem;
//   display: flex;
//   align-items: center;
// `;

// const GenreMini = styled.div`
//   margin-left: 0.5rem;
//   font-size: 0.5rem;
// `;
