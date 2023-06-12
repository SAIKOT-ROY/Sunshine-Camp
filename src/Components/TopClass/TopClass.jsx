import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import RankClass from "../RankClass/RankClass";

const TopClass = () => {
  const { data, isLoading } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    // console.log(res.data);
    return res.data;
  });

  return (
    <div>
      <p className="text-4xl font-bold text-center my-10 font-serif">
        Popular Class Section
      </p>
      <div className="grid md:grid-cols-3 justify-items-center md:max-w-screen-2xl mx-auto gap-7 items-center">
        {data?.slice(0, 6)?.map((cl) => (
          <RankClass key={cl?._id} cl={cl} isLoading={isLoading}></RankClass>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
