import React from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../Components/ClassCard/ClassCard";
import Anime from "react-anime";


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
    <div>
      <div>
        <Anime
          translateY="15px"
          opacity={[0, 1]}
          easing="easeOutQuad"
          duration={1000}
          delay={(el, index) => index * 200}
        >
          <h2 className="text-center font-bold text-4xl font-serif mt-14">
            Booked Class
          </h2>
        </Anime>
      </div>
      <div className="grid md:grid-cols-3 mx-auto mb-24 mt-10 gap-y-16 w-3/4">
        {classesData?.map((cData) => (
          <ClassCard key={cData?._id} cData={cData}></ClassCard>
        ))}
      </div>
      <div className="text-center">
        {isLoading && <span className="loading loading-bars loading-lg animate-bounce"></span>}
      </div>
    </div>
  );
};

export default SelectClass;
