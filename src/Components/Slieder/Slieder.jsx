import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Slieder = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="flex md:max-w-full md:ml-6 relative">
            <img
              className="md:h-[750px] w-full"
              src="https://i.ibb.co/sCxmX4T/playdough-art-with-seal-underwater-1.jpg"
              alt=""
            />
          </div>
          <div>
            <p
              className="text-5xl w-1/2 text-left text-white
             font-serif font-bold absolute top-48 md:top-50 
             start-[40rem] md:start-[10rem] mx-auto align-middle"
            >
              Sports are essential because they keep us physically fit, improve
              our mental well-being, teach us valuable life skills, and promote
              social connections.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:max-w-full md:ml-6 relative">
            <img
              className="md:h-[750px] w-full"
              src="https://i.ibb.co/gVwssmN/colorful-galaxy-pattern-background-illustration-cute-watercolor-style.jpg"
              alt=""
            />
          </div>
          <div>
            <p
              className="text-5xl w-1/2 text-left text-blue-900
             font-serif font-bold absolute top-48 md:top-50 
             start-[40rem] md:start-[10rem] mx-auto align-middle"
            >
              Sports are vital for our well-being as they promote physical
              health, enhance mental resilience, instill important life lessons,
              and foster social interactions
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:max-w-full md:ml-6 relative">
            <img
              className="md:h-[750px] w-full"
              src="https://i.ibb.co/NxPB4pS/space-rocket-textured-background-blue-plasticine-clay-craft-kids.jpg"
              alt=""
            />
          </div>
          <div>
            <p
              className="text-5xl w-1/2 text-left text-white
             font-serif font-bold absolute top-48 md:top-50 
             start-[40rem] md:start-[10rem] mx-auto align-middle"
            >
              Sports are a necessity in our lives as they empower us
              physically, sharpen our mental focus, cultivate valuable life
              skills, and create lasting bonds with others.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slieder;
