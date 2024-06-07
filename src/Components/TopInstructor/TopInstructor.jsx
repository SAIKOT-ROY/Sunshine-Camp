import { FaStar } from "react-icons/fa";

const TopInstructor = ({ instructor, isInstructorLoading}) => {


  if (!isInstructorLoading) {
    <div className="max-w-sm w-full mx-auto">
      <div className="border border-gray-200 shadow p-4 w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className=" bg-gray-200 h-28 w-full"></div>
        </div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>;
  }

  return (
    <div className="group">
      <div className="font-space-grotesk duration-100 group-hover:scale-105 w-[70vw] md:w-[30vw] xl:w-[16vw] pb-4 shadow-lg">
        <figure className="flex justify-center items-center">
          <img
            src={instructor?.instructor_img}
            alt="Shoes"
            className="xl:w-[15vw] md:w-[28vw] sm:h-[40vh] md:h-[20vh] w-[60vw] rounded-br-[7vw] group-hover:rounded-none group-hover:scale-95 duration-200 transition-all ease-linear translate-x-0 border object-cover object-center h-[28vh]"
          />
        </figure>
        <div className="px-3 pt-3">
          <h1 className="font-extrabold">
            Instructor: {instructor?.instructor_name}
          </h1>
          <p className="text-xs">{instructor?.class_name} Coach</p>
          <div className="flex justify-end gap-1 text-sm">
            <FaStar className="text-yellow-300" />
            <h1>{instructor.popularity}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInstructor;
