import TopClass from "../../Components/TopClass/TopClass";
import Instructor from "../../Components/Instructor/Instructor";
import useTitle from "../../Hooks/useTitle";
import Carasoul from "../../Components/Carasoul/carasoul";
import NewService from "../../Components/NewService/NewService";
import BackgroundVideo from "../../Components/BackgroundVideo/BackgroundVideo";
// import StaffSlider from "../../Components/StaffSlider/StaffSlider";
import ContactParallax from "../../Components/ContactParallax/ContactParallax";
// import Faq from "../../Components/Faq/Faq";

const Home = () => {
  useTitle("Xtreme Camp");
  return (
    <>
      <div className="bg-gradient-to-r from-black via-slate-900 to-cyan-950 border-t-2 border-white border-opacity-5 pb-20">
        <Carasoul />
      </div>
      <NewService />
      <TopClass />
      <BackgroundVideo />
      <Instructor />
      <ContactParallax />
      {/* <Faq /> */}
      {/* <StaffSlider /> */}
    </>
  );
};

export default Home;
