import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Main.css";

import logo from "../img/main_logo.png";

function Main() {
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <div className="main-logo">
          <img src={logo} alt="메인 로고" />
        </div>

        <div className="main-title">
          <p>⬤⠀⠀ 티밍을 거쳐간 이름들⠀⠀ ⬤</p>
        </div>

        <div className="teaming-names">
          <div className="teaming-name">
            <p>5랜밤 5랜밤</p>
            <p>24시간이 모자라</p>
            <p>남색 몽블랑</p>
            <p>A+받고싶어</p>
            <p>학생회입니다</p>
            <p>Teaming</p>
          </div>

          <div className="teaming-name">
            <p>Savior</p>
            <p>삼시세끼</p>
            <p>마치된것같아손오공</p>
            <p>잠을 깨자!</p>
            <p>점메추해줘</p>
            <p>안도</p>
          </div>

          <div className="teaming-name">
            <p>보915</p>
            <p>최강컴공과</p>
            <p>멋4</p>
            <p>경상도</p>
            <p>에프싫어싫어</p>
            <p>수고하조</p>
            <p>Dukgle</p>
          </div>
        </div>

        <div className="main-btn-title">
          <p>조 이름 짓기가 어렵다면?</p>
        </div>
        <div className="main-btn-btn">
          <Link to="/make">
            <div className="main-btn">
              <p>티밍 사용해보기</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
