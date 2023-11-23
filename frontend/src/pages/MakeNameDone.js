import React from 'react';
import logoImage from "../img/about_Teaming_logo.png";
import "../styles/MakeNameDone.css";

const MakeNameDone = ({ selectedWord, onMainPage, onViewWordCloud }) => {
  return (
    <div className="make-name-done">
      <div className="done-text">
        <p>선택한 팀 이름이 워드클라우드에 등록되었어요.<br />더 많은 이름을 워드클라우드에서 확인하고, 크게 노출시켜 보세요!</p>
      </div>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="buttons">
        <button onClick={onMainPage}>메인페이지로 이동</button>
        <button onClick={onViewWordCloud}>워드클라우드 보러가기</button>
      </div>
    </div>
  );
};

export default MakeNameDone;

