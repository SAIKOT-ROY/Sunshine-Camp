import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const PaymentsHistory = () => {
  const { data: historyData = [] } = useQuery(["history"], async () => {
    const res = await axiosSecure.get("/dashboard/enrolled");
    return res.data;
  });

  return (
    <>
        <SectionTitle heading="Payment History"></SectionTitle>
      <div className="bg-white rounded">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Transaction Id</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((hData, index) => (
                <tr key={hData._id}>
                  <th>{index + 1}</th>
                  <td>{hData?.class_name}</td>
                  <td>{hData?.transactionId}</td>
                  <td>{hData?.price}</td>
                  <td>{hData?.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentsHistory;
