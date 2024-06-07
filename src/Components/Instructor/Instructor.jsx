import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import TopInstructor from "../TopInstructor/TopInstructor";
import { useQuery } from "@tanstack/react-query";

const Instructor = () => {
  const { data: instructors, isLoading } = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  );

  return (
    <div className="mb-20 mx-auto">
      <h1 className="xl:text-[2.8vw] pb-16 text-[7vw] font-space-grotesk uppercase font-bold text-center">
        Instructors
      </h1>
      <div className="grid md:grid-cols-2 md:w-[76vw] xl:grid-cols-4 md:justify-items-center justify-center xl:w-[70vw] 2xl:w-auto 2xl:grid-cols-5 mx-auto gap-10 items-center">
        {instructors?.slice(0, 10)?.map((instructor) => (
          <TopInstructor
            key={instructor?._id}
            instructor={instructor}
            isInstructorLoading={isLoading}
          ></TopInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
