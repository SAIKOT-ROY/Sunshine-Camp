import React, { useState } from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import { useQuery } from "@tanstack/react-query";
import { approveClass, denyClass } from "../../Api/auth";
// import { useForm } from "react-hook-form";

const ManageClass = () => {
  // const { register, handleSubmit, reset } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: manageClass = [], refetch: statusFetch } = useQuery(
    ["manageClass"],
    async () => {
      const response = await axiosSecure.get("/dashboard/addClass");
      // console.log(response.data);
      return response.data;
    }
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const handleFeedBackSubmit = (event, id) => {
    console.log("aga", id)
    event.preventDefault()
    const form = event.target;
    const feedback = form.feedback.value;
    denyClass(id, statusFetch, feedback)
  };

  const givingApprove = (id, status) => {
    console.log(id);
    if (status !== "approve") {
      approveClass(id, statusFetch);
      console.log("ami approve korlam");
    }
  };

  const givingDenied = (id, status) => {
    console.log(id);
    if (status !== "denied") {
      denyClass(id, statusFetch);
      console.log("deny kore dilem na");
    }
  };

  return (
    <div>
      <h2 className="text-center font-bold text-4xl mt-5">This is manage</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class name</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manageClass.map((mngC, index) => (
              <tr key={mngC?._id}>
                <th>{index + 1}</th>
                <td>{mngC?.class_name}</td>
                <td>
                  <img
                    className="w-12 h-12 rounded-2xl"
                    src={mngC?.img}
                    alt=""
                  />
                </td>
                <td>{mngC?.instructor}</td>
                <td>{mngC?.instructor_email}</td>
                <td>{mngC?.number_of_students}</td>
                <td>{mngC?.price}</td>
                <td>
                  <div className={`btn btn-xs text-white ${mngC.status === 'approve' ? 'bg-green-500' : 'bg-red-500'} text-black`}>
                    {mngC?.status}
                  </div>
                </td>
                <td className="flex gap-4 justify-center items-center mt-3">
                  <div
                    onClick={() => givingApprove(mngC?._id, mngC.status)}
                    className="btn btn-xs bg-green-500"
                  >
                    Approve
                  </div>
                  <div
                    onClick={() => givingDenied(mngC?._id, mngC.status)}
                    className="btn btn-xs text-white bg-red-500"
                  >
                    Deny
                  </div>
                  {/* Open the modal using ID.showModal() method */}
                  <button
                    className="btn btn-xs" onClick={openModal}
                  >
                    FEEDBACK
                  </button>
                  <dialog  id="my_modal_2" className="modal" open={isModalOpen}>
                    <form
                      onSubmit={(event)=>handleFeedBackSubmit(event, mngC?._id)}
                      method="dialog"
                      className="modal-box"
                    >
                      <h3 className="font-bold text-lg mb-2">Hello!</h3>
                      <div className="mb-4 h-10 ">
                        <input
                          className="border-2 border-yellow-500 w-full h-10 rounded-lg"
                          type="text"
                          id=""
                          name="feedback"
                        />
                      </div>
                      <div className="flex justify-end">
                        <input
                          className="btn btn-sm bg-black text-yellow-400"
                          type="submit"
                        />
                      </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                    <button onClick={closeModal}>close</button>
                    </form>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
