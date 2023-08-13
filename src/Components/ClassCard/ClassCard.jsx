import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axiosSecure from "../../Hooks/useAxioxSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import useAxioxSecure from "../../Hooks/useAxioxSecure";

const ClassCard = ({ cData }) => {
  const { user } = useContext(AuthContext);
  const { class_name, price, available_seats, img, instructor, _id } = cData;
  // const [axiosSecure] = useAxioxSecure()

  const notify = () => toast.error("Login To Select Class");

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
          const { errorMessage } = error.message;
          console.error("Error selecting class:", errorMessage);
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: { errorMessage },
          });
        });
    }
  };

  return (
    <div>
      <div
        className={`card card-compact w-96 border-2 border-[#3c688d] ${
          available_seats === 0 ? "bg-red-500" : "bg-[#3c688d]"
        } shadow-xl`}
      >
        <figure>
          <img className="w-full h-[272px]" src={cData?.img} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-row justify-between">
          <div className="text-slate-200 font-sans">
            <h2 className="card-title">{cData?.class_name}</h2>
            <p className="font-semibold text-lg">
              Instructor : <span>{cData?.instructor}</span>
            </p>
            <p className="font-semibold text-lg">
              Available Seats : <span>{cData?.available_seats}</span>
            </p>
            <p className="font-semibold text-lg">
              Price : <span>{cData?.price}</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            {user ? (
              <button
                onClick={() => handleSelectClass(cData)}
                className="btn bg-slate-800 text-white btn-ghost"
              >
                Select
              </button>
            ) : (
              <button onClick={notify} className="btn font-bold bg-white">
                Select
              </button>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ClassCard;
