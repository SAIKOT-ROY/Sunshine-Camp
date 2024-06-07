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
    <div className="my-28 mx-auto">
      <h1 className="xl:text-[2.8vw] text-[7vw] py-12 font-space-grotesk uppercase font-bold text-center">
        Programmes
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-5 md:gap-0 md:gap-y-10 justify-items-center mx-auto">
        {data?.slice(0, 6)?.map((cl) => (
          <RankClass key={cl?._id} cl={cl} isLoading={isLoading}></RankClass>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
