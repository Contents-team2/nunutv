import React, { useRef, useState } from "react";
import DetailModal from "./DetailModal";
import ModalPortal from "./ModalPortal";

const BackGround = () => {
  const data = {
    id: 1,
    tn: 1,
    name: "최애의 아이",
    age: 1,
    actor: ["호시노 아이", "호시노 루비"],
    genre: ["환생", "아이돌", "성장"],
    summary: `지방도시에서 산부인과 전문의로 일하는 고로는 연예계와 아무런 접점이 없는 나날을 보내고 있었다.
        
        한편, 그의 '최애' 아이돌인 호시노 아이는
        차츰 스타덤에 오르고 있었다.
        
        그런 두 사람이 '최악'의 형태로 만나
        운명이 움직이기 시작하는데...?!`,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef();

  const outsideCloseHandler = (event) => {
    if (modalRef.current === event.target) setIsModalOpen(false);
  };

  const modalHandler = () => {
    setIsModalOpen(true);
  };

  const onCloseBtn = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalPortal>
          <DetailModal
            ref={modalRef}
            outsideClose={outsideCloseHandler}
            onClose={onCloseBtn}
            data={data}
          />
        </ModalPortal>
      )}
      <button onClick={modalHandler}>모달!</button>
    </div>
  );
};

export default BackGround;
