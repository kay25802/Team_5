import Header from "../components/Header";
import "../styles/RandomNameRecommend.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RandomNameRecommend = ({ selectedCategory }) => {
  const [recommendedNames, setRecommendedNames] = useState([]);

  // 랜덤 추천 단어를 가져오는 함수
  const fetchRecommendedNames = async () => {
    try {
      // API 호출
      // 우선 더미데이터 사용하여 구현 예시
      const dummyRecommendedNames = ["만능이조", "비정상회담", "팀명없음", "예선통과시켜조", "레드벨벳"];

      // 무작위로 5개의 추천 단어 선택
      const randomNames = Array.from({ length: 5 }, () => dummyRecommendedNames[Math.floor(Math.random() * dummyRecommendedNames.length)]);

      setRecommendedNames(randomNames);
    } catch (error) {
      console.error("Error fetching recommended names:", error);
    }
  };

  useEffect(() => {
    fetchRecommendedNames();
  }, [selectedCategory]);

  return (
    <div>
      <Header />
      <div className="random-name-page">
        <div className="random-name-page-title">
          <p>다음과 같은 팀명은 어떠세요?</p>
        </div>
        <div className="recommendation-block-box">
          <div className="recommendation-block">
            {recommendedNames.map((name, index) => (
              <div key={index} className="recommended-name">
                {name}
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
          <Link to="/tagcloud">
            <button className="more-names-button">
              <p>워드클라우드에서</p>
              <p>더 많은 팀명보기</p>
            </button>
          </Link>
          <button className="get-recommendation-again-button">
            <p>프로젝트 팀명으로</p>
            <p>다시 추천받기</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomNameRecommend;
