import { Parallax } from "react-parallax";
import ban from "../.././assets/close-up-athlete-running.jpg";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";


const ContactParallax = () => {
  return (
    <div className="py-20">
      <Parallax
        blur={{ min: -15, max: 20 }}
        bgImage={ban}
        bgImageAlt="the dog"
        strength={700}
        className=""
      >
        <div className="h-[35vh] md:[h-45vh] lg:h-[55vh]">
          <div className="flex justify-center gap-x-4 pt-16 md:pt-20 lg:py-20 lg:gap-52 items-center">
            <img className="md:w-[40vw] w-[50vw] xl:w-[30vw] border rounded-t-lg border-gradient" src={ban} alt="" />
            <div className="border-l md:border-l-2 pl-6 md:pl-20">
              <h1 className="text-white font-bold pb-10 md:leading-[3.5vw] text-[4vw] md:text-[2.5vw] w-[25vw] text-wrap">
                Make Your Summer Special With us
              </h1>
              <div className="text-white flex gap-6">
                <FaFacebook className="hover:text-slate-50/75 rounded-full cursor-pointer" size={30} />
                <RiWhatsappFill className="hover:text-slate-50/75 rounded-full cursor-pointer" size={30} />
                <FaTwitter className="hover:text-slate-50/75 rounded-full cursor-pointer" size={30} />
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ContactParallax;
