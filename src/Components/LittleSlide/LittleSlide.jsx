import React from "react";
import SwiperCore, { FreeMode, Pagination } from "swiper/core"; // Change this import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([FreeMode, Pagination]);

const LittleSlide = () => {
  return (
    <div className="mx-auto md:pl-16 py-14 mb-10 bg-blue-100">
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <img
            className="md:w-1/2"
            src="https://i.ibb.co/c8m64mw/chesspiece-2736322.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:w-1/2"
            src="https://i.ibb.co/W5cmcz7/volleyball-6277123.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="md:w-1/2"
            src="https://i.ibb.co/cJzxp1c/american-football-2700012.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="md:w-1/2"
            src="https://i.ibb.co/k37Wm8w/tennis-5250490.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:w-1/2"
            src="https://i.ibb.co/TrmqdL3/bow-3763801.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:w-1/2"
            src="https://i.ibb.co/Krpgtk2/baseball-player-2862562.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-1/2"
            src="https://i.ibb.co/n7tPN7M/hockey-3268304.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-1/2"
            src="https://i.ibb.co/whPndTc/cricket-606011.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-1/2"
            src="https://i.ibb.co/cydnsJ7/badminton-8979729.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LittleSlide;
