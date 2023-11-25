import Header from "../components/Header";
import "../styles/RandomNameRecommend.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RandomNameRecommend = ({ selectedCategory }) => {
  const [recommendedNames, setRecommendedNames] = useState([]);

  // 랜덤 추천 단어를 가져오는 함수
  const fetchRecommendedNames = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/recommend/?count=5`);

      const recommendedNamesFromServer = response.data;

      console.log("Recommended Names from Server:", recommendedNamesFromServer);

      setRecommendedNames(recommendedNamesFromServer);
    } catch (error) {
      console.error("Error fetching recommended names:", error);
    }
  };

  useEffect(() => {
    console.log("Recommended Names Before Rendering:", recommendedNames);
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
            {recommendedNames.map((item, index) => (
              <div key={index} className="recommended-name">
                {/* Assuming each object has properties name1, name2, name3, name4, name5 */}
                <p>{item.name1}</p>
                <p>{item.name2}</p>
                <p>{item.name3}</p>
                <p>{item.name4}</p>
                <p>{item.name5}</p>
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
          <Link to="/random">
            <button className="get-recommendation-again-button">
              <p>랜덤으로 팀명</p>
              <p>다시 추천받기</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomNameRecommend;
