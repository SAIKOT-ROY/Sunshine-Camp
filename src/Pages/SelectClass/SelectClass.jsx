import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../Components/ClassCard/ClassCard";

const SelectClass = () => {
  const { data: classesData = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res?.data;
  });

  return (
    <div>
      <h2 className="text-center font-bold text-4xl font-serif mt-14">Booked Class</h2>
      <div className="grid md:grid-cols-3 mx-auto mb-24 mt-10 gap-y-16 w-3/4">
        {classesData?.map((cData) => (
          <ClassCard key={cData?._id} cData={cData}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default SelectClass;
