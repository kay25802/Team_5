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

        <div className="teaming-names"></div>

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
