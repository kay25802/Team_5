import Lottie from "react-lottie-player";
import loadingImg from "../img/Teaming.png"; // ../img/?.json

function Animation() {
  return <Lottie loop animationData={loadingImg} play />;
}

export default Animation;
