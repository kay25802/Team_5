import React, { useState } from 'react';
import Header from "../components/Header";
import MakeNameRecommend from "./MakeNameRecommend";
import "../styles/MakeName.css";

const MakeName = ({ onNextStep }) => {
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddKeyword = () => {
    if (inputValue && keywords.length < 5) {
      setKeywords([...keywords, inputValue]);
      setInputValue('');
    }
  };

  const handleNextStep = () => {
    setShowRecommendation(true);
  };

  const handleReplay = () => {
    setShowRecommendation(false);
  };

  return (
    <div className="makename">
      <Header />
      {showRecommendation ? (
        <MakeNameRecommend
          recommendedWords={['건강하조', '오비건이조', '오우웰빙', '환경지킴이', '예쁘게봐조']}
          onReplay={handleReplay}
          onNextStep={onNextStep}
        />
      ) : (
        <div className="makename-text">
          <p>팀을 잘 나타내는 키워드를 <p className='blue'>최대 5개</p> 입력해주세요</p>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder=" "
            />
            <button onClick={handleAddKeyword}>추가</button>
          </div>
          <div className="output-keyword">
            {keywords.map((keyword, index) => (
            <div key={index} className="rounded-box">
              <div className="keyword">{keyword}</div>
            </div>
          ))}
          </div>

          <button onClick={handleNextStep}>다음으로</button>
        </div>
      )}
    </div>
  );
};

export default MakeName;