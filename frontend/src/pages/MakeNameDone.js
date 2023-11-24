import React from "react";
import logoImage from "../img/Teaming_logo.png";
import "../styles/MakeNameDone.css";

const MakeNameDone = ({ selectedWord, onMainPage, onViewWordCloud }) => {
  return (
    <div className="make-name-done">
      <div className="done-text">
        <div className="done-text-title">
          <p>선택한 팀 이름이 워드클라우드에 등록되었어요.</p>
          <p>더 많은 이름을 워드클라우드에서 확인하고, 크게 노출시켜 보세요!</p>
        </div>
      </div>
      <div className="make-logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="buttons-makedone">
        <button className="makedone-btn" onClick={onMainPage}>
          메인페이지로 이동
        </button>
        <button className="makedone-word-btn" onClick={onViewWordCloud}>
          워드클라우드 보러 가기
        </button>
      </div>
    </div>
  );
};

export default MakeNameDone;
