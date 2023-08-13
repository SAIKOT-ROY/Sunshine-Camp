import React from "react";


const ExtraSection = () => {
  return (
    <div className="md:flex justify-center items-center max-w-6xl mx-auto shadow-lg rounded-lg">
      <div>
        <img src="https://i.ibb.co/gZGVF1R/30138134-4089.jpg" alt="" />
      </div>
      <div className="mr-10">
        <h2 className="font-bold text-3xl text-left md:text-5xl md:text-right mb-5">
          Sports do not build character. They reveal it
        </h2>
        <p className="font-semibold md:text-right">
          In our summer school programs, sports are given priority to ensure a
          well-rounded education. Incorporating sports activities into the
          curriculum helps break the monotony of academic learning and provides
          a healthy balance. It allows students to stay active during the summer
          months, preventing sedentary behavior and promoting an active
          lifestyle.
        </p>
      </div>
    </div>
  );
};

export default ExtraSection;
