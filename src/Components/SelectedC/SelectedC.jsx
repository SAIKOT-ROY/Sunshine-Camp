import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import { FiTrash2 } from "react-icons/fi";
import { IoCard } from "react-icons/io5";

const SelectedC = () => {
  const { data: classesData = [] } = useQuery(["classData"], async () => {
    const res = await axiosSecure.get("/selectedClass");
    return res?.data;
  });

  return (
    <div>
      <p>HI amake select korse</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th className="font-extrabold">Class Name</th>
                <th>Price</th>
                <th>Instructor</th>
                <th>Available Seats</th>
                <th>Delete Class</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {
                classesData?.map((clData, index) => <tr key={clData?._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={clData?.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{clData?.class_name}</div>
                        </div>
                      </div>
                    </td>
                    <td>${clData?.price}</td>
                    <td>{clData?.instructor}</td>
                    <td>{clData?.available_seats}</td>
                    <th>
                      <button className="btn btn-ghost bg-red-600 text-white  btn-sm"><FiTrash2 className="w-6 h-6" /></button>
                    </th>
                    <th>
                      <button className="btn btn-ghost bg-gray-700 text-white btn-sm"><IoCard className="w-6 h-6"/></button>
                    </th>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectedC;
