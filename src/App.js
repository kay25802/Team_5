import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MakeName from "./pages/MakeName";
import MakeNameRecommend from "./pages/MakeNameRecommend";
import MakeNameDone from "./pages/MakeNameDone";
import RandomName from "./pages/RandomName";
import RandomNameRecommend from "./pages/RandomNameRecommend";
import TagCloud from "./pages/TagCloud";
import About from "./pages/About";
import Loading from "./pages/Loading";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />

          {/* 팀명 만들기 */}
          <Route exact path="/make" element={<MakeName />} />
          <Route exact path="/make/recommend" element={<MakeNameRecommend />} />
          <Route exact path="/make/done" element={<MakeNameDone />} />

          {/* 랜덤으로 팀명 추천받기 */}
          <Route exact path="/random" element={<RandomName />} />
          <Route exact path="/random/recommend" element={<RandomNameRecommend />} />

          {/* 태그 클라우드 */}
          <Route exact path="/tagcloud" element={<TagCloud />} />

          {/* Teaming 소개 */}
          <Route exact path="/about" element={<About />} />

          {/* 로딩 페이지 */}
          <Route exact path="/loading" element={<Loading />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
