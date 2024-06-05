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
    <div
      className={`text-nowrap flex font-space-grotesk border-2 border-[#3c688d] ${
        available_seats === 0 ? "bg-red-500" : "bg-zinc-50"
      } shadow-xl`}
    >
      <figure>
        <img
          className="w-[22vw] h-[30vh] bg-center object-cover"
          src={cData?.img}
          alt="Shoes"
        />
      </figure>
      <div className="pt-10 pl-7">
        <div className="flex flex-col gap-4">
          <h2 className="gap-2 flex items-center">
            <img
              className="w-6"
              src="https://i.ibb.co/MC6M9Zd/whiteboard-4540258.png"
              alt=""
            />{" "}
            {cData?.class_name}
          </h2>
          <p className="font-semibold gap-2 flex items-center">
            <img
              className="w-5"
              src="https://i.ibb.co/1GR7LpX/coach-517920.png"
              alt=""
            />{" "}
            Instructor : <span>{cData?.instructor}</span>
          </p>
          <p className="font-semibold flex gap-2 items-center">
            <img
              className="w-5"
              src="https://i.ibb.co/0hKk4nh/distance-6446417.png"
              alt=""
            />{" "}
            Available Seats : <span>{cData?.available_seats}</span>
          </p>
          <p className="font-semibold flex gap-2 items-center">
            <img
              className="w-5"
              src="https://i.ibb.co/fdPrNnS/money-7304865.png"
              alt=""
            />{" "}
            Price : <span>{cData?.price}</span>
          </p>
        </div>
        <div className="">
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
  );
};

export default ClassCard;
