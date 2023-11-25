import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/TagCloud.css";
import anychart from "anychart";

import heartNone from "../img/heart_none.png";
import heartFill from "../img/heart_fill.png";

function TagCloud() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [likedWords, setLikedWords] = useState({});
  const [likesCount, setLikesCount] = useState({});

  useEffect(() => {
    const storedLikedWords = localStorage.getItem("likedWords");
    if (storedLikedWords) {
      setLikedWords(JSON.parse(storedLikedWords));
    }

    // 초기 전체 좋아요 수 설정
    setLikesCount({});

    // Sample data for demonstration
    const data = [
      { x: "블랙핑크", value: 7 },
      { x: "우리가우승하조", value: 5 },
      { x: "배고파배고파", value: 5 },
      { x: "24시간이모자라", value: 5 },
      { x: "교양있는사람들", value: 4 },
      { x: "휴학하고싶다", value: 4 },
      { x: "에스파", value: 3 },
      { x: "점메추", value: 3 },
      { x: "12345", value: 3 },
      { x: "어쩌구저쩌구", value: 1 },
      { x: "56789", value: 3 },
      { x: "5조", value: 1 },
      { x: "학생회모임", value: 1 },
      // Add more data as needed
    ];

    // Create a word cloud chart
    const chart = anychart.tagCloud(data);

    chart.normal().fontFamily("Pretendard-Regular");

    // Set the container where the chart will be rendered
    chart.container("tag-cloud");

    // Draw the chart
    chart.draw();
    chart.angles([0, 90]);

    // Event listener for word click
    chart.listen("pointClick", (e) => {
      // Set the selected word when a point is clicked
      setSelectedWord(e.point.get("x"));
    });

    // Clean up chart on component unmount
    return () => {
      chart.dispose();
    };
  }, []);

  const closeModal = () => {
    setSelectedWord(null);
  };

  const toggleHeart = () => {
    // Copy the current likedWords object and likesCount object
    const newLikedWords = { ...likedWords };
    const newLikesCount = { ...likesCount };

    // Check if the selectedWord is already in likedWords
    if (selectedWord in newLikedWords) {
      // If selectedWord is already in likedWords, remove it
      delete newLikedWords[selectedWord];
      // Decrease the overall likes count for the selectedWord
      newLikesCount[selectedWord] -= 1;
    } else {
      // If selectedWord is not in likedWords, add it
      newLikedWords[selectedWord] = 1;
      // Increase the overall likes count for the selectedWord
      newLikesCount[selectedWord] = (newLikesCount[selectedWord] || 0) + 1;
    }

    // Update the state and save to localStorage
    setLikedWords(newLikedWords);
    setLikesCount(newLikesCount);
    localStorage.setItem("likedWords", JSON.stringify(newLikedWords));
  };

  return (
    <div>
      <Header />
      <div className="tagcloud-page">
        <div className="cloud-title">
          <p>가장 많은 선택을 받은 팀명은?</p>
        </div>
        <div className="cloud-text">
          <p>좋아요 수에 따라서 팀명이 크게 노출되어요</p>
        </div>
        <div id="tag-cloud" className="tag-cloud"></div>
      </div>
      <div className="empty-cloud"></div>

      {/* Modal */}
      {selectedWord && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-text">
              <p>{selectedWord}</p>
            </div>
            <div className="modal-heart" onClick={toggleHeart}>
              <img src={selectedWord in likedWords ? heartFill : heartNone} alt="하트" />
            </div>
            <div className="modal-heart-text">
              <p>현재 좋아요 수 - </p>
              <p style={{ marginLeft: 5 }}>{likesCount[selectedWord] || 0}</p>
              <p>개</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TagCloud;
