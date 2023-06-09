import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const ClassCard = ({ cData }) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[272px]" src={cData?.img} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-row justify-between">
          <div>
            <h2 className="card-title">{cData?.class_name}</h2>
            <p>
              Instructor : <span>{cData?.instructor}</span>
            </p>
            <p>
              Available Seats : <span>{cData?.available_seats}</span>
            </p>
            <p>
              Price : <span>{cData?.price}</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            {user ? (
              <button className="btn bg-slate-400">Select</button>
            ) : (
              <button className="btn bg-slate-400" disabled>Select</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
