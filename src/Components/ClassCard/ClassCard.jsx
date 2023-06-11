import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axiosSecure from "../../Hooks/useAxioxSecure";
import Swal from "sweetalert2";

const ClassCard = ({ cData }) => {
  const { user } = useContext(AuthContext);
  const { class_name, price, available_seats, img, instructor, _id } = cData;

  const handleSelectClass = (cData) => {
    console.log(cData);
    const selectedClasses = {
      class_name,
      price,
      img,
      instructor,
      available_seats,
    };
    if (user) {
      axiosSecure
        .put(`/selectedClass/${_id}`, selectedClasses)
        .then((res) => {
          console.log(res);
          const upsertedCount = res.data.result.upsertedCount;
          const modifiedCount = res.data.result.modifiedCount;
          const matchedCount = res.data.result.matchedCount;
          const insertedId = res.data.result.insertedId;
          // console.log(insertId);
          if (upsertedCount || modifiedCount || insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Class is Saved",
              showConfirmButton: false,
              timer: 1500,
            });
          } else if (matchedCount >= 1) {
            // console.log("Data already exists");
            Swal.fire({
              icon: "error",
              title: "Oops",
              text: "You Are Data Already Exists",
            });
          }
        })
        .catch((error) => {
          const {errorMessage} = error.message
          console.error("Error selecting class:",errorMessage);
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: {errorMessage},
          });
        });
    }
  };

  return (
    <div>
      <div
        className={`card card-compact w-96 ${
          available_seats === 0 ? "bg-red-500" : "bg-[#E3B448]"
        } shadow-xl`}
      >
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
              <button
                onClick={() => handleSelectClass(cData)}
                className="btn bg-black text-white btn-ghost"
              >
                Select
              </button>
            ) : (
              <button className="btn bg-slate-400" disabled>
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
