import React from "react";

const Curve = () => {
  return (
    <div className="w-full text-black md:w-[1900px]">
      <div className="relative w-4/5 mx-auto top-[24rem] md:top-[35rem]">
       <div className="flex md:w-3/4 justify-between mx-auto">
       <p className="font-bold w-1/4 md:text-3xl">
          With The Right Decision <br /> Great things Can happen
        </p>
        <p className="font-serif font-medium md:text-xl text-sm w-1/2">
          At our Sunshine Camp, we believe that learning should be a lifelong
          journey. Whether you are a working professional seeking to upskill, a
          student eager to explore new subjects, or an individual passionate
          about personal development, we have something for everyone.
        </p>
       </div>
      </div>
      <div className="static h-96 md:h-[600px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          width="md:2100"
          height="md:500"
          preserveAspectRatio="none"
          viewBox="0 0 2100 500"
        >
          <g mask='url("#SvgjsMask1019")' fill="none">
            <path
              d="M 0,369 C 105,339.6 315,235.8 525,222 C 735,208.2 840,296.4 1050,300 C 1260,303.6 1365,241.6 1575,240 C 1785,238.4 1995,281.6 2100,292L2100 500L0 500z"
              fill="rgba(127, 153, 189, 1)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1019">
              <rect className="w-full md:w-[2100px] h-[500px]" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Curve;
