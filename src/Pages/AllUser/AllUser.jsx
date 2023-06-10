import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import { becomeAdmin, becomeInstructor } from "../../Api/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllUser = () => {
  const { role } = useContext(AuthContext);
  console.log(role);
  const { data: userData = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res?.data;
  });

  const makeAdmin = (email) => {
    if (role !== "admin") {
      becomeAdmin(email, refetch);
      toast.success("You are now Admin");
    }
   
  };

  const makeInstructor = (email) => {
    if (role !== "instructor") {
      becomeInstructor(email, refetch);
      toast.success("You are now Instructor");
    }
  };

  return (
    <div>
      <h2>Hello Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>email</th>
              <th>Make admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((userD, index) => (
              <tr key={userD?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={userD?.userPhoto}
                          alt="Avatar Tailwind CSS Component avatar"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{userD?.name}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{userD?.email}</div>
                  </div>
                </td>
                <th>
                  <button
                    onClick={() => makeAdmin(userD?.email)}
                    disabled={userD?.role === "admin"}
                    className="btn btn-ghost bg-red-400 btn-xs"
                  >
                    Admin
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => makeInstructor(userD?.email)}
                    disabled={userD?.role === "instructor"}
                    className="btn btn-ghost bg-green-300 btn-xs"
                  >
                    instructor
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AllUser;
