import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";

const MyClass = () => {
  const { data: myClasses = [] } = useQuery(["myClass"], async () => {
    const response = await axiosSecure.get("/dashboard/addClass");
    console.log(response.data);
    return response.data;
  });

  return (
    <div>
      <h2 className="text-center font-bold text-4xl mb-5">My class</h2>
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Seats Available</th>
              <th>Price</th>
              <th>feedback</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((myCls, index) => (
              <tr key={myCls._id}>
                <th>{index + 1}</th>
                <th>
                  <img
                    className="w-12 h-12 rounded-xl"
                    src={myCls?.img}
                    alt=""
                  />
                </th>
                <td>{myCls?.instructor}</td>
                <td>{myCls?.class_name}</td>
                <td>{myCls?.instructor_email}</td>
                <td>
                  <p>{myCls?.number_of_students}</p>
                </td>
                <td>
                  <p>{myCls?.price}</p>
                </td>
                <td>
                  <p>
                    {myCls?.feedback ? myCls.feedback : "No FeedBack is given"}
                  </p>
                </td>
                <td>
                  <div className="flex">
                    <div>
                      <p className="btn btn-xs font-semibold shadow font-serif text-white bg-green-500">
                        {myCls?.status}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <p className="btn btn-xs font-semibold shadow font-serif text-white bg-red-400">
                      update
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
