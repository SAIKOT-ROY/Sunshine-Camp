import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import TopInstructor from "../TopInstructor/TopInstructor";
import { useQuery } from "@tanstack/react-query";

const Instructor = () => {
  const { data: instructors, isLoading: isInstructorLoading } = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get("/classes");
      console.log(res.data);
      return res.data;
    }
  );
  return (
    <div>
      <p className="text-4xl font-bold text-center">Instructor Section</p>
      <div className="grid md:grid-cols-3 justify-items-center md:max-w-screen-2xl mx-auto gap-7 items-center">
        {instructors?.slice(0, 6)?.map((instructor) => (
          <TopInstructor
            key={instructor?._id}
            instructor={instructor}
            isInstructorLoading={isInstructorLoading}
          ></TopInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructor;