import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MakeNameRecommend.css";
import MakeNameDone from "./MakeNameDone";

const MakeNameRecommend = ({ recommendedWords, onReplay, onNextStep }) => {
  const [selectedWord, setSelectedWord] = useState("");
  const [showMakeNameDone, setShowMakeNameDone] = useState(false);

  const handleReplay = () => {
    setSelectedWord("");
    window.location.reload();
    // onReplay(); // 부모 컴포넌트의 onReplay 함수 호출
  };

  const handleNextStep = () => {
    setShowMakeNameDone(true);
    // onNextStep(); // 부모 컴포넌트의 onNextStep 함수 호출
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word === selectedWord ? "" : word);
  };
  return (
    <div className="MakeNameRecommend">
      {!showMakeNameDone ? (
        <div className="make-name-recommend">
          <div className="recommendation">
            <div className="recommendation-title">
              <p>이번에는 이런 이름을 추천해드릴게요!</p>
              <p>마음에 드는 이름이 있다면 선택해주세요.</p>
            </div>
            <div className="recommended-words">
              {recommendedWords.map((word, index) => (
                <button key={index} className={selectedWord === word ? "word active" : "word"} onClick={() => handleWordSelect(word)}>
                  {word}
                </button>
              ))}
            </div>
          </div>

          <div className="buttons-recommend">
            <button className="make-re-btn" onClick={handleReplay}>
              다시 추천받기
            </button>
            <button className="make-recommend-btn" onClick={handleNextStep}>
              다음으로
            </button>
          </div>
        </div>
      ) : (
        <MakeNameDone selectedWord={selectedWord} />
      )}
    </div>
  );
};

export default MakeNameRecommend;
