import "../styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="FT-CopyRight">
        <p>Copyright 2023. Teaming All rights reserved.</p>
      </div>
      <div className="developers">
        <div className="dv">
          <b>PM&Design</b>
          <p>송지연</p>
        </div>
        <div className="dv">
          <b style={{ marginLeft: 15 }}>Front-End</b>
          <p>김서윤 김아영</p>
        </div>
        <div className="dv">
          <b style={{ marginLeft: 15 }}>Back-End</b>
          <p>박나현 박수영 유예지 음상훈</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
