import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <div className="text-center">
      <Player
        className="w-60 "
        autoplay
        loop
        src="https://lottie.host/223d1ee9-3780-46e2-8924-291255492a7c/Ahd3Vsemng.json"
      ></Player>
    </div>
  );
};

export default Loader;
