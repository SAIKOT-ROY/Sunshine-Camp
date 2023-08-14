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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="card w-96 shadow-xl border-2 font-serif border-[#3c688d] bg-gray-50">
        <div>
          <img className="rounded-xl" src={cl?.img} alt="Shoes" />
        </div>
        <div className="card-body">
          <p className="flex items-center gap-2">
           <img className="w-5" src="https://i.ibb.co/MC6M9Zd/whiteboard-4540258.png" alt="" /> Class Name :<span>{cl?.class_name}</span>
          </p>
          <p className="flex items-center gap-2">
           <img className="w-5" src="https://i.ibb.co/wCbBFSb/pupil-5402890.png" alt="" /> Students : <span>{cl?.number_of_students}</span>
          </p>
          <p className="flex items-center gap-2">
           <img className="w-5" src="https://i.ibb.co/fdPrNnS/money-7304865.png" alt="" /> Price : <span>{cl?.price}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RankClass;
