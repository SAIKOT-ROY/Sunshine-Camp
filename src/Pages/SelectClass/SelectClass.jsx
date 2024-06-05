import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../Components/ClassCard/ClassCard";
import Anime from "react-anime";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const SelectClass = () => {
  const { data: classesData = [], isLoading } = useQuery(
    ["classes"],
    async () => {
      const res = await axiosSecure.get("/classes");
      return res?.data;
    }
  );

  // if (isLoading) {
  //   return <MoonLoader color="#080909" size={100} />;
  // }

  return (
    <>
      <SectionTitle heading="Booked Class"></SectionTitle>
      <p className="font-semibold text-center text-2xl ml-3">Please Select Classes That you Like</p>
      <div>
        <div>
          <Anime
            translateY="15px"
            opacity={[0, 1]}
            easing="easeOutQuad"
            duration={1000}
            delay={(el, index) => index * 200}
          ></Anime>
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto mb-24 mt-10 max-w-screen-2xl">
          {classesData?.map((cData) => (
            <ClassCard key={cData?._id} cData={cData}></ClassCard>
          ))}
        </div>
        <div className="text-center">
          {isLoading && (
            <span className="loading loading-bars loading-lg animate-bounce"></span>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectClass;
