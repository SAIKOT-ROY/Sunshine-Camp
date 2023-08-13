import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Slieder = () => {
  return (
    <div className="border-slate-400">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="flex md:max-w-full relative">
            <img
              className="w-full"
              src="https://i.ibb.co/QNNpSC9/sssfsaf.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:max-w-full relative">
            <img
              className="w-full"
              src="https://i.ibb.co/G58dCqt/27829606-7365891.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:max-w-full relative">
            <img
              className="w-full"
              src="https://i.ibb.co/HGYmFg9/25811648-7144018.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slieder;
