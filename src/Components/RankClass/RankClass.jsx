import { motion } from "framer-motion";
import stud from "../../assets/group-males_43666 1.svg";
import perks from "../../assets/premium-service_4375265 1.svg";

const RankClass = ({ cl }) => {
  return (
    <motion.div>
      <div className="flex md:w-[28vw] group md:h-[30vh] font-space-grotesk rounded bg-gray-200/25
      rounded-s-lg">
        <div>
          <img
            className="h-[30vh] ease-linear duration-200 transition-all  group-hover:scale-105 group-hover:w-[14vw] md:w-[13vw] rounded-s-lg object-cover bg-center"
            src={cl?.img}
            alt="Shoes"
          />
        </div>
        <div className="pl-7 pt-8">
          <p className="font-bold text-[1.6vw]">{cl?.class_name}</p>
          <p className="flex items-center gap-1 font-bold">
            <img className="w-5" src={perks} alt="" />
            Perks
          </p>
          <p className="line-clamp-3 leading-tight w-[10vw] text-sm font-bold pt-6">{cl?.description}</p>
          <div className="flex gap-4 pt-7">
            <p className="flex items-center gap-1 font-bold">
              <img className="w-5" src={stud} alt="" />
              Enrolled: <span>{cl?.number_of_students}</span>
            </p>
            <p className="text-white p-3 font-semibold bg-black group-hover:p-2 group-hover:text-sm group-hover:w-[5vw] ease-in-out duration-200 translate-x-1 group-hover:rounded-xl w-[6vw]">
              Price : <span>{cl?.price}$</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RankClass;
