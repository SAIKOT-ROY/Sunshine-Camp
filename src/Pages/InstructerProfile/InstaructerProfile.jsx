import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";

const InstaructerProfile = () => {
  const { data: instructorData } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    console.log(res.data);
    return res?.data;
  });



  return (
    <div className="md:overflow-x-auto my-20 border">
      <table className="md:table table-xs">
        {/* head */}
        <thead className="bg-green-700">
          <tr className="text-white font-semibold text-lg">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Classes</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-slate-200 font-semibold">
          {
            instructorData.map((iData, index) =>  <tr
            key={iData._id}>
                <th>
                    {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={iData?.instructor_img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{iData?.instructor}</div>
                    </div>
                  </div>
                </td>
                <td>{iData?.instructor_email}</td>
                <td>{iData.class_name}</td>
                <th>
                  <button className="btn btn-ghost shadow-md bg-green-500 text-white btn-xs">details</button>
                </th>
              </tr>)
          }
         
        </tbody>
      </table>
    </div>
  );
};

export default InstaructerProfile;
