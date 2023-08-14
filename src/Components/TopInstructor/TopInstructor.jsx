import React from "react";
import { motion } from "framer-motion";

const TopInstructor = ({ instructor }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      viewport={{ once: true }}
    >
      <div className="card h-96 w-96 font-serif shadow-xl border-2 border-[#3c688d]">
        <figure className="">
          <img
            src={instructor?.instructor_img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="flex gap-3 items-center">
            {" "}
            <img
              className="w-5"
              src="https://i.ibb.co/LhFbnVs/presentation-7469005.png"
              alt=""
            />{" "}
            {instructor?.class_name}
          </h2>
          <p className="flex gap-3 items-center">
            {" "}
            <img
              className="w-10 h-5"
              src="https://i.ibb.co/2jSj7KK/left-align-5634431.png"
              alt=""
            />
            {instructor?.description}
          </p>
          <p className="flex gap-2 items-center">
            <img
              className="w-5"
              src="https://i.ibb.co/hMkYgCy/graduate-3307345.png"
              alt=""
            />{" "}
            Students :<span>{instructor?.number_of_students}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TopInstructor;
