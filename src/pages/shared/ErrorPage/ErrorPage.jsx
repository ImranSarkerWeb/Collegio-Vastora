import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Player
        className="w-96 lg:w-[550px]"
        autoplay
        loop
        src="/animation_lkftjiff.json"
      ></Player>
      <div className="text-center">
        <Link to="/" className="btn btn-success">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
