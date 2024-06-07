import stud from "../../assets/group-males_43666 1.svg";
import perks from "../../assets/premium-service_4375265 1.svg";

const RankClass = ({ cl }) => {
  return (
    <div>
      <div className="flex xl:w-[30vw] w-[90vw] md:w-[45vw] group lg:h-[30vh] font-space-grotesk rounded bg-gray-200/25 rounded-s-lg">
        <div>
          <img
            className="h-[24vh] lg:h-[30vh] transition-transform duration-400 ease-linear group-hover:scale-95 group-hover:w-[48vw] md:group-hover:w-[48vw] md:w-[40vw] w-[45vw] rounded-s-lg object-cover bg-center"
            src={cl?.img}
            alt="Shoes"
          />
        </div>
        <div className="md:pl-7 pl-3 pt-4 md:pt-2 lg:pt-4 w-[40vw]">
          <p className="font-bold text-[3.6vw] md:text-[2vw]">
            {cl?.class_name}
          </p>
          <p className="flex items-center text-[2.5vw] md:text-sm gap-1 font-bold">
            <img className="w-[2.5vw] md:w-[1.5vw]" src={perks} alt="" />
            Perks
          </p>
          <p className="line-clamp-2 leading-tight text-[2vw] md:text-sm md:w-full text-sm font-bold pt-2 md:pt-6">
            {cl?.description}
          </p>
          <div className="flex flex-col w-full gap-2 md:gap-y-2 md:pt-7 pt-2">
            <p className="flex items-center w-[2vw] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] gap-1 font-bold">
              <img className="w-5" src={stud} alt="" />
              Enrolled: <span>{cl?.number_of_students}</span>
            </p>
            <p
              className="text-white p-1 w-[16vw] md:w-20 lg:w-[7vw] xl:w-[160] text-[2.5vw] md:text-[1vw] font-semibold bg-black 
             transition-transform duration-200 ease-linear group-hover:rounded-xl"
            >
              Price : <span>{cl?.price}$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankClass;
