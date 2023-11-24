// import Header from "../components/Header";
import Animation from "../components/Animation";
import "../styles/Loading.css";

function Loading() {
  return (
    <div>
      {/* <Header /> */}
      <div className="loading-page">
        <div className="load-text">
          <b>티밍</b>
          <p>이 이름을 생각하고 있어요</p>
        </div>
        <div className="load-img">
          <Animation />
        </div>
      </div>
    </div>
  );
}

export default Loading;
