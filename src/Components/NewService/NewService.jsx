import { useRef } from "react";
import guide from "../../assets/guide-book_6683484 1.svg";
import facilities from "../../assets/research-center_4084707 1.svg";
import teach from "../../assets/skills_11362261 1.svg";
import support from "../../assets/solidarity_4411215 1.svg";
// import { motion, useInView, useScroll } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";

const NewService = () => {
  const ref = useRef(null);

  const serviceData = [
    {
      title: "Guided Curriculum",
      icon: guide,
      description:
        "Structured learning paths designed to help students achieve their educational goals efficiently.",
    },
    {
      title: "Facilities",
      icon: facilities,
      description:
        "State-of-the-art facilities that provide an ideal environment for learning and research.",
    },
    {
      title: "Skilled Teachers",
      icon: teach,
      description:
        "Experienced educators dedicated to providing high-quality instruction and support.",
    },
    {
      title: "Support",
      icon: support,
      description:
        "Comprehensive support services to ensure students thrive academically and personally.",
    },
  ];
 
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  

  return (
    <div>
      <h1 className="xl:text-[2.8vw] text-[7vw] py-12 font-space-grotesk uppercase font-bold text-center">
        Services
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-8 w-full justify-center">
        {serviceData.map((data, index) => (
          <motion.div
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            key={index}
            className="py-5 border border-slate-200 border-opacity-50 lg:w-[18vw] shadow-md rounded-xl translate-x-1 ease-linear"
          >
            <div>
              <img
                className="w-8 lg:w-14 xl:w-16 mx-auto lg:py-4"
                src={data.icon}
                alt=""
              />
              <h1 className="font-bold text-center">{data.title}</h1>
              <p className="text-center pt-5 px-3 font-space-grotesk font-thin">
                {data.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewService;
