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
      <div className="card h-96 w-96 shadow-xl border border-[#3c688d]">
        <figure className="">
          <img
            src={instructor?.instructor_img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{instructor?.class_name}</h2>
          <p>{instructor?.description}</p>
          <p>
            Students :<span>{instructor?.number_of_students}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TopInstructor;
