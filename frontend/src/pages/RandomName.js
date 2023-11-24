import "../styles/RandomName.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Loading from "./Loading";

const RandomName = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleNextStep = () => {
    if (selectedCategory) {
      setIsLoading(true); // 로딩 시작
      // 4초 후에 다음 페이지로 이동
      setTimeout(() => {
        navigate("/random/recommend", { state: { selectedCategory } });
      }, 4000);
    } else {
      // 카테고리를 선택해주세요 경고 등의 처리
    }
  };

  useEffect(() => {
    if (isLoading) {
      // 로딩이 끝나면 다음으로 버튼을 눌러준 것과 동일한 효과를 주기 위해
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, [isLoading]);

  return (
    <div className="random-name">
      <Header />
      <div className={`random-pg ${isLoading ? "hidden" : ""}`}>
        <div className="random-name-content">
          <p>선택한 카테고리에 따라 랜덤한 팀명을 추천해드립니다.</p>
          <div className="categories">
            <button className={`category-box ${selectedCategory === "귀여운 팀명" ? "active" : ""}`} onClick={() => handleCategorySelect("귀여운 팀명")}>
              귀여운 팀명
            </button>
            <button className={`category-box ${selectedCategory === "프로젝트 팀명" ? "active" : ""}`} onClick={() => handleCategorySelect("프로젝트 팀명")}>
              프로젝트 팀명
            </button>
            <button className={`category-box ${selectedCategory === "대학 과제 팀명" ? "active" : ""}`} onClick={() => handleCategorySelect("대학 과제 팀명")}>
              대학 과제 팀명
            </button>
            <button className={`category-box ${selectedCategory === "인기 많은 팀명" ? "active" : ""}`} onClick={() => handleCategorySelect("인기 많은 팀명")}>
              인기 많은 팀명
            </button>
          </div>
          <button className="random-recommend-btn" onClick={handleNextStep}>
            다음으로
          </button>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default RandomName;
