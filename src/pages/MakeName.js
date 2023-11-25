import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MakeNameRecommend from "./MakeNameRecommend";
import Loading from "./Loading";
import axios from "axios";
import "../styles/MakeName.css";

const MakeName = ({ onNextStep }) => {
  const [keywords, setKeywords] = useState([]);
  const [recommendedWords, setRecommendedWords] = useState([]); // 새로운 상태 추가
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddKeyword = () => {
    if (inputValue && keywords.length < 5) {
      setKeywords([...keywords, inputValue]);
      setInputValue("");
    }
  };

  const handleNextStep = async () => {
    setIsLoading(true);

    try {
      console.log("Request Payload:", { keywords });

      const response = await axios.post("http://localhost:8000/api/teamnames/ai/", { keywords });

      if (response.status !== 200) {
        throw new Error(`Failed to fetch AI team name recommendations. Status: ${response.status}`);
      }

      const recommendations = response.data.teamnames;
      setRecommendedWords(recommendations); // 새로운 상태 업데이트

      setTimeout(() => {
        setShowRecommendation(true);
        // You can use the recommendations data here
      }, 8000);
    } catch (error) {
      console.error("Error fetching AI team name recommendations:", error);
      setIsLoading(false);
    }
  };

  const handleReplay = () => {
    setShowRecommendation(false);
  };

  useEffect(() => {
    if (isLoading) {
      // 로딩이 끝나면 다음으로 버튼을 눌러준 것과 동일한 효과를 주기 위해
      setTimeout(() => {
        setIsLoading(false);
      }, 8000);
    }
  }, [isLoading]);

  return (
    <div className="makename">
      <Header />
      <div className={`makename-content ${isLoading ? "hidden" : ""}`}>
        {showRecommendation ? (
          <MakeNameRecommend recommendedWords={recommendedWords} onReplay={handleReplay} onNextStep={onNextStep} />
        ) : (
          <div className="makename-text">
            <p>
              팀을 잘 나타내는 키워드를 <p className="blue">최대 5개</p> 입력해주세요
            </p>
            <div className="input-container-box">
              {/* <form action="" method="post"> */}
              <div className="input-container">
                <input className="input-container-text" type="text" value={inputValue} onChange={handleInputChange} placeholder=" " />
                <input className="input-container-btn" type="submit" value="✓" name="submit" onClick={handleAddKeyword}></input>
              </div>
              {/* </form> */}
              <div className="output-keyword">
                {keywords.map((keyword, index) => (
                  <div key={index} className="rounded-box">
                    <div className="keyword">{keyword}</div>
                  </div>
                ))}
              </div>
            </div>

            <button className="make-next-btn" onClick={handleNextStep}>
              다음으로
            </button>
          </div>
        )}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default MakeName;
