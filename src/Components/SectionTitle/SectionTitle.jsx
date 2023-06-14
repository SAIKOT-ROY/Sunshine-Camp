import React from "react";
import { FcCollect } from "react-icons/fc";


const SectionTitle = ({ heading }) => {
  return (
    <div>
      <div className="flex my-6 mx-auto gap-4 justify-center items-center">
        <div>
          <FcCollect className="" size={40} />
        </div>
        <div>
          <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
        </div>
        <div>
          <FcCollect size={40} />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
