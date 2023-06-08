import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import lottie from "../../assets/lottieAnimation/6734-404-error-glitch-2.json";
import { Link } from "react-router-dom";

const ErrrorPage = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={lottie}
        style={{ height: "700px", width: "700px" }}
      ></Player>
      <Link className="w-40 flex mx-auto btn btn-outline bg-slate-950 text-white" to="/">Back To Home</Link>
    </div>
  );
};

export default ErrrorPage;
