import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import lottie from "../../assets/lottieAnimation/6734-404-error-glitch-2.json"

const ErrrorPage = () => {
  return (
    <Player
      autoplay
      loop
      src={lottie}
      style={{ height: "300px", width: "300px" }}
    >
      <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  );
};

export default ErrrorPage;
