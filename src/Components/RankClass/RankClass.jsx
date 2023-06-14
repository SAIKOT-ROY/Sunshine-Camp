import React from "react";
import { motion } from "framer-motion"

const RankClass = ({ cl }) => {
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
      <div className="card w-96 bg-slate-200 shadow-xl">
        <div>
          <img className="rounded-xl" src={cl?.img} alt="Shoes" />
        </div>
        <div className="card-body">
          <p className="card-title">
            Class Name :<span>{cl?.class_name}</span>
          </p>
          <p>
            Students :<span>{cl?.number_of_students}</span>
          </p>
          <p>
            Price : <span>{cl?.price}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RankClass;
