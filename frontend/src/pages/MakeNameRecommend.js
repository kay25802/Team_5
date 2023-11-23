import React, { useState } from 'react';
import "../styles/MakeNameRecommend.css";
import MakeNameDone from "./MakeNameDone";

const App = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [showMakeNameDone, setShowMakeNameDone] = useState(false);
  const recommendedWords = ['건강하조', '오비건이조', '오우웰빙', '환경지킴이', '예쁘게봐조'];

  const handleReplay = () => {
    setSelectedWord('');
  };

  const handleNextStep = () => {
    setShowMakeNameDone(true);
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word === selectedWord ? '' : word); // 클릭된 단어와 현재 선택된 단어를 비교하여 상태 변경
  };

  return (
    <div className="App">
      {!showMakeNameDone ? (
        <div className="make-name-recommend">
          <div className="recommendation">
            <p>이번에는 이런 이름을 추천해드릴게요!<br />마음에 드는 이름이 있다면 선택해주세요.</p>
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
          
          <div className="buttons">
            <button onClick={handleReplay}>다시 추천받기</button>
            <button onClick={handleNextStep}>다음으로</button>
          </div>
        </div>
      ) : (
        <MakeNameDone
          selectedWord={selectedWord}
          onMainPage={() => {
            // '메인페이지로 이동' 버튼 클릭 시 동작
            // 로직 구현
          }}
          onViewWordCloud={() => {
            // '워드클라우드 보러가기' 버튼 클릭 시 동작
            // 로직 구현
          }}
        />
      )}
    </div>
  );
};

export default App;