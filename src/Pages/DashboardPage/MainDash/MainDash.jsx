import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MainDash = () => {
  return (
    <div className="font-bold flex-col gap-3 text-4xl flex justify-center items-center mt-20 md:mt-60">
      <div className="text-center mb-3">
        <h2>CLICK OPTIONS</h2>
        <h2>TO</h2>
        <h2>GET STARTED</h2>
      </div>
      <div>
        <Link to="/" className="btn bg-black text-white">
          <AiOutlineArrowLeft /> HOME
        </Link>
      </div>
    </div>
  );
};

export default MainDash;
