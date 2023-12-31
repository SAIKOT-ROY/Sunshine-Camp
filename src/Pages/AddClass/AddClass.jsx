import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import axiosSecure from "../../Hooks/useAxioxSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {
      class_name,
      img,
      instructor_email,
      number_of_students,
      price,
      instructor,
    } = data;

    const newAddedClass = {
      class_name,
      instructor,
      img,
      instructor_email,
      available_seats: parseFloat(number_of_students),
      price: parseFloat(price),
      status: "pending",
      activeRole: "requested",
    };

    axiosSecure
      .post("/dashboard/addClass", newAddedClass)
      .then((res) => {
        const addNewClassData = res.data;
        const insertedId = addNewClassData.insertedId;
        console.log(addNewClassData);
        if (insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Class is saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    reset();
  };

  return (
    <div>
      <div className="bg-[#fffefe] shadow-md mx-auto md:w-1/2 font-bold p-10 rounded-lg">
        <h2 className="text-center mb-5 font-bold font-serif text-4xl">
          Add Classes
        </h2>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full md:w-[400px]">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              {...register("class_name", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full md:w-[400px]"
            />
          </div>
          <div className="form-control w-full md:w-[400px]">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              {...register("img", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full md:w-[400px]"
            />
          </div>
          <div className="form-control w-full md:w-[400px]">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              {...register("instructor_email", { required: true })}
              type="text"
              value={user.email}
              placeholder="Type here"
              className="input input-bordered w-full md:w-[400px]"
            />
          </div>
          <div className="form-control w-full md:w-[400px]">
            <label className="label">
              <span className="label-text">Seats</span>
            </label>
            <input
              {...register("number_of_students", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full md:w-[400px]"
            />
          </div>
          <div className="form-control w-full md:w-[400px]">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full md:w-[400px]"
            />
          </div>
          <div className="form-control w-full md:w-[400px]">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              {...register("instructor", { required: true })}
              type="text"
              value={user?.displayName}
              placeholder="Type here"
              className="input input-bordered w-full md:w-[400px]"
            />
          </div>
          <div className="text-center mt-5">
            <input
              className="btn btn-md text-white bg-black"
              type="submit"
              name="Add Here"
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
