import { Link } from "react-router-dom";
import "../styles/Header.css";

import Teaming from "../img/Teaming.png";

function Header() {
  return (
    <div className="Header">
      <div className="Hd">
        <div className="Hd-logo">
          <Link to="/">
            <img src={Teaming} alt="로고" />
          </Link>
        </div>
        <div className="Hd-link">
          <ul className="Hd-links">
            <li>
              <Link to="/make">Make Name</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
            <li>
              <Link to="/tagcloud">Tag Cloud</Link>
            </li>
            <li>
              <Link to="/about">About Teaming</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
