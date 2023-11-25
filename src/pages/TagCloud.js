import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "../styles/TagCloud.css";
import anychart from "anychart";

import heartNone from "../img/heart_none.png";
import heartFill from "../img/heart_fill.png";

function TagCloud() {
  const [word, setWord] = useState(null);
  const [wordData, setWordData] = useState([]);
  const [likesCount, setLikesCount] = useState({});
  const [isLikeButtonDisabled, setIsLikeButtonDisabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchDataAndDrawChart = async () => {
      try {
        const response = await axios.get("https://teaming5.shop/api/wordcloud/");
        const data = response.data;
        setWordData(data);

        const likedWordsFromStorage = {};
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith("liked_")) {
            const word = key.replace("liked_", "");
            likedWordsFromStorage[word] = true;
          }
        });

        setLikesCount(likedWordsFromStorage);

        const chartData = data.map((item) => ({
          x: item.word,
          value: item.likes || 0,
        }));

        if (window.wordCloudChart) {
          window.wordCloudChart.dispose();
        }

        const chart = anychart.tagCloud(chartData);
        chart.container("tag-cloud");
        chart.angles([0, 90]);

        chart.listen("pointClick", async (e) => {
          const word = e.point.get("x");
          const likesResponse = await axios.get(`https://teaming5.shop/api/wordcloud/${word}`);
          const likesData = likesResponse.data;

          setWord(word);
          setLikesCount({ [word]: likesData.likes || 0 });
        });

        chart.draw();

        window.wordCloudChart = chart;
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchDataAndDrawChart();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleHeart = async () => {
    try {
      if (!word) {
        console.error("선택된 단어가 없습니다.");
        return;
      }

      // Like 버튼 비활성화
      setIsLikeButtonDisabled(true);

      // API 호출 시간을 모방하기 위한 지연 시간
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 좋아요 개수를 무한히 증가
      const newLikesCount = { ...likesCount, [word]: (likesCount[word] || 0) + 1 };
      localStorage.setItem(`liked_${word}`, true);

      // UI에서 좋아요 개수 업데이트
      setLikesCount(newLikesCount);

      // PATCH 요청을 실제로 서버에 전송
      const response = await axios.patch(`https://teaming5.shop/api/wordcloud/${word}`);

      if (response.status === 200) {
        console.log("좋아요가 성공적으로 적용되었습니다.");
      } else {
        console.error("좋아요 적용 중 오류 발생:", response.status, response.statusText);
      }

      // 좋아요 버튼 활성화 (잠시 후)
      setTimeout(() => {
        setIsLikeButtonDisabled(false);
      }, 1000); // 필요한 경우 지연 시간을 조절하세요
    } catch (error) {
      console.error("좋아요 증가 중 오류 발생:", error);
      setIsLikeButtonDisabled(false);
    }
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

      {word && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setWord(null)}>
              &times;
            </span>
            <div className="modal-text">
              <p>{word}</p>
            </div>
            <div className="modal-heart" onClick={toggleHeart} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={isHovered || likesCount[word] ? heartFill : heartNone} alt="하트" />
            </div>
            <div className="modal-heart-text">
              <p>현재 좋아요 수 - </p>
              <p style={{ marginLeft: 5 }}>{likesCount[word] || 0}</p>
              <p>개</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TagCloud;
