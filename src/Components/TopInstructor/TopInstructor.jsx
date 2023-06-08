import React from "react";

const TopInstructor = ({instructor}) => {
  return (
    <div className="card h-96 w-96 shadow-xl border border-green-600 bg-[#379683] text-white">
      <figure className="">
        <img
          src={instructor?.instructor_img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{instructor?.class_name}</h2>
        <p>{instructor?.description}</p>
        <p>Students :<span>{instructor?.number_of_students}</span></p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default TopInstructor;
