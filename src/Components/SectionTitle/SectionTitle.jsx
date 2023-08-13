import React from "react";
// import { FcCollect } from "react-icons/fc";


const SectionTitle = ({ heading }) => {
  return (
    <div>
      <div className="flex my-6 mx-auto gap-4 justify-center items-center">
        <div className="w-12">
          <img src="https://i.ibb.co/tqyv7mz/camping-4792277.png" alt="" />
        </div>
        <div>
          <p className="text-4xl font-semibold uppercase font-mono py-4">{heading}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
