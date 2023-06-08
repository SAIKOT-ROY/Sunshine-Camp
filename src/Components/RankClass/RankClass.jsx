import React from "react";

const RankClass = ({ cl }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div>
        <img className="rounded-xl" src={cl?.img} alt="Shoes" />
      </div>
      <div className="card-body">
        <p className="card-title">
          Class Name :<span>{cl?.class_name}</span>
        </p>
        <p>
          Students :<span>{cl?.number_of_students}</span>
        </p>
        <p>
          Price : <span>{cl?.price}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default RankClass;
