import React, { useState } from "react";
import "../styles/MakeNameRecommend.css";
import MakeNameDone from "./MakeNameDone";

const MakeNameRecommend = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [showMakeNameDone, setShowMakeNameDone] = useState(false);
  const recommendedWords = ["건강하조", "오비건이조", "오우웰빙", "환경지킴이", "예쁘게봐조"];

  const handleReplay = () => {
    setSelectedWord("");
  };

  const handleNextStep = () => {
    setShowMakeNameDone(true);
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word === selectedWord ? "" : word); // 클릭된 단어와 현재 선택된 단어를 비교하여 상태 변경
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
                <button
                  key={index}
                  className={selectedWord === word ? "word active" : "word"} // 선택된 단어인 경우 active 클래스 적용
                  onClick={() => handleWordSelect(word)} // 단어 클릭 시 이벤트 핸들러 추가
                >
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
