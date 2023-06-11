import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";

const EnrolledClass = () => {
  const { data: enrolledData = []} = useQuery(
    ["classes"],
    async () => {
      const res = await axiosSecure.get("/dashboard/enrolled");
      return res?.data;
    }
  );

  return (
    <div>
      <h2>This is enrolled</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Teacher</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledData.map((en, index) => (
              <tr key={en?._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{en?.class_name}</td>
                <td>{en?.instructor}</td>
                <td>{en?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
