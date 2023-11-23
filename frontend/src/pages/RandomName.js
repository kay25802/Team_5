import "../styles/RandomName.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const RandomName = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleNextStep = () => {
    if (selectedCategory) {
      navigate("/random/recommend", { state: { selectedCategory } });
    } else {
      // 카테고리를 선택해주세요 경고 등의 처리
    }
  };

  return (
    <div className="random-name">
      <Header />
      <p>선택한 카테고리에 따라 랜덤한 팀명을 추천해드립니다.</p>
      <div className="categories">
        <button className="category-box" onClick={() => handleCategorySelect("귀여운 팀명")}>
          귀여운 팀명
        </button>
        <button className="category-box" onClick={() => handleCategorySelect("프로젝트 팀명")}>
          프로젝트 팀명
        </button>
        <button className="category-box" onClick={() => handleCategorySelect("대학 과제 팀명")}>
          대학 과제 팀명
        </button>
        <button className="category-box" onClick={() => handleCategorySelect("인기 많은 팀명")}>
          인기 많은 팀명
        </button>
      </div>
      <button onClick={handleNextStep}>다음으로</button>
    </div>
  );
};

export default RandomName;
