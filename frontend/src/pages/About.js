import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

import TeamingLogo from "../img/about_Teaming_logo.png";
import aboutPhone from "../img/about_phone.png";
import arrow from "../img/polygon.png";
import aboutWordCloud from "../img/about_wordcloud.png";
import aboutWave from "../img/about_wave.png";

function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="about-1">
          <div className="about-1-text">
            <div className="about-1-text-b">
              <p>팀 이름 짓는 게 어려울 때,</p>
              <b>티밍하자!</b>
            </div>
            <div className="about-1-text-p">
              <p>AI가 정해주는 우리의 팀 이름.</p>
              <p>키워드를 입력하면 키워드와 관련된 팀 이름을 추천해줍니다.</p>
            </div>
          </div>
          <div className="about-1-logo">
            <img src={TeamingLogo} alt="about 티밍 로고" />
          </div>
        </div>

        <div className="about-2">
          <div className="about-2-img">
            <img src={aboutPhone} alt="핸드폰 화면" />
          </div>
          <div className="about-2-text">
            <div className="about-2-title">
              <p>AI 이름 생성 이용하기</p>
            </div>
            <div className="about-2-content">
              <p>팀과 관련된 키워드를 최소 한 개 ~ 최대 5개 입력해주세요.</p>
              <img src={arrow} alt="화살표" />
              <p>티밍이 이름을 지어주기를 잠시만 기다려주세요!</p>
              <img src={arrow} alt="화살표" />
              <p>티밍이 추천해주는 5개의 이름 중 원하는 걸 선택하면 끝!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-3">
        <div className="about-3-text">
          <div className="about-3-title">
            <p>티밍의 워드 클라우드</p>
          </div>
          <div className="about-3-content">
            <p>각종 팀명을 수집하여 워드클라우드로 제공합니다.</p>
            <p>좋아요를 눌러 마음에 드는 팀명을 강조할 수 있습니다.</p>
          </div>
        </div>
        <div className="about-3-img">
          <img src={aboutWordCloud} alt="워드클라우드" />
        </div>
      </div>

      <div className="about-4">
        <div className="about-4-text">
          <div className="about-4-title">
            <p>두근 두근 랜덤 팀명</p>
          </div>
          <div className="about-4-content">
            <p>팀을 대표할 단어가 마땅히 생각나지 않으시나요?</p>
            <p>랜덤으로 팀명을 돌려보세요</p>
          </div>

          <div className="about-4-teamBox">
            <div className="about-4-teamNames">
              <p>만능이조</p>
              <p>비정상회담</p>
              <p>팀명없음</p>
              <p>예선통과시켜조</p>
              <p>레드벨벳</p>
            </div>
          </div>
        </div>

        <div className="about-4-img">
          <img src={aboutWave} alt="wave" />
        </div>
      </div>

      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
