import { useEffect, useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Carasoul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef();

  const slides = [
    {
      url: "https://i.ibb.co/4ggKgfX/image.png",
    },
    {
      url: "https://i.ibb.co/7pZMXWZ/close-up-athlete-running.jpg",
    },
    {
      url: "https://i.ibb.co/zF9FChB/basketball-player-uniform-jumping-high-make-slam-dunk-basket-generative-ai.jpg",
    },
    {
      url: "https://i.ibb.co/HdRjqBx/full-shot-fit-woman-training-studio.jpg",
    },
    {
      url: "https://i.ibb.co/NTgkTPd/fire-tracks-young-caucasian-basketball-player-red-team-action.jpg",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useGSAP(
    () => {
      gsap.from(".textAnime > *", {
        x: -120,
        opacity: 0,
        duration: 1.8,
        ease: "power.out",
        stagger: {
          each: 0.2,
          from: "bottom",
          ease: "power3.in",
        },
      });
    },
    { scope: container }
  );

  return (
    // <div className="max-w-[1850px] h-[800px] w-full m-auto px-2 py-8 relative group">
    <div
      ref={container}
      className="h-[60vh] max-w-[1800px] px-4 py-8 md:h-[90vh] w-full m-auto relative group"
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 0, 0.5), rgba(200, 100, 0, 0.3)), 
          url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full bg-cover rounded-2xl translate-x-0 object-contain duration-500"
      >
        <div className="flex textAnime font-sans md:leading-tight flex-col md:justify-end pl-10 md:pl-0 md:pr-24 pt-40 items-start md:items-end">
          <h1 className="md:text-[3vw] text-[7vw] font-bold text-white pt-4">
            Join Our Class
          </h1>
          <h1 className="md:text-[3vw] text-[4vw] font-bold text-white">Today</h1>
          <h1 className="text-[5.5vw] font-bold text-white">
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              GET {" "}
            </span>
            50
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              %
            </span>
          </h1>
          <h1 className="text-[4vw] font-bold text-white bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Off
          </h1>
        </div>
      </div>
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:bg-slate-200/10 cursor-pointer"
      >
        <BsChevronCompactLeft />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            onClick={() => goSlide(slideIndex)}
            className="text-2xl cursor-pointer text-blue-400/35 hover:text-blue-600/85"
            key={slideIndex}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carasoul;
