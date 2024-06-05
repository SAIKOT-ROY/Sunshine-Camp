import TopClass from "../../Components/TopClass/TopClass";
// import Instructor from "../../Components/Instructor/Instructor";
// import ExtraSection from "../ExtraSection/ExtraSection";
// import LittleSlide from "../../Components/LittleSlide/LittleSlide";
import Accordin from "../../Components/Accordin/Accordin";
// import ContactUs from "../../Components/ContactUs/ContactUs";
import useTitle from "../../Hooks/useTitle";
import Carasoul from "../../Components/Carasoul/carasoul";
import NewService from "../../Components/NewService/NewService";

const Home = () => {
  useTitle("Sunshine Camp");
  return (
    <>
      <div className="bg-gradient-to-r from-black via-slate-900 to-cyan-950 border-t-2 border-white border-opacity-5 pb-20">
      <Carasoul />
      </div>
      <div className=" flex items-center justify-center">
        <div className="mx-auto w-[1700px]">
          <NewService />
          {/* <Banner /> */}
          {/* <ContactUs /> */}
          {/* <Instructor /> */}
          <TopClass />
          {/* <LittleSlide /> */}
          <Accordin />
          {/* <ExtraSection /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
