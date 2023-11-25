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

  useEffect(() => {
    const fetchDataAndDrawChart = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/wordcloud/");
        const data = response.data;
        setWordData(data);

        const chartData = data.map((item) => ({
          x: item.word,
          value: item.likes || 0, // 만약 likes가 undefined이면 0으로 설정
        }));

        // 확인을 위해 chartData를 출력
        console.log("ChartData:", chartData);

        // Dispose existing chart, if any
        if (window.wordCloudChart) {
          window.wordCloudChart.dispose();
        }

        const chart = anychart.tagCloud(chartData);
        chart.container("tag-cloud");
        chart.angles([0, 90]);

        chart.listen("pointClick", async (e) => {
          const word = e.point.get("x");
          const likesResponse = await axios.get(`http://localhost:8000/api/wordcloud/${word}`);
          const likesData = likesResponse.data;

          setWord(word);
          setLikesCount({ [word]: likesData.likes || 0 }); // 만약 likes가 undefined이면 0으로 설정
        });

        // Draw the chart
        chart.draw();

        // Store chart instance in window object
        window.wordCloudChart = chart;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndDrawChart();
  }, []);

  const toggleHeart = async () => {
    try {
      console.log("Before toggle - likesCount:", likesCount);

      if (!word) {
        console.error("No selected word.");
        return;
      }

      const response = await axios.patch(`http://localhost:8000/api/wordcloud/${word}`);

      if (response.status === 200) {
        const newLikesCount = { ...likesCount, [word]: (likesCount[word] || 0) + 1 };
        setLikesCount(newLikesCount);
        console.log("After toggle - likesCount:", newLikesCount);
      } else {
        console.error("Failed to toggle heart:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error toggling heart:", error);
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
            <div className="modal-heart" onClick={toggleHeart}>
              <img src={word in likesCount ? heartFill : heartNone} alt="하트" />
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
