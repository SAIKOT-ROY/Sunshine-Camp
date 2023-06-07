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
            <img
             className="h-1/3"
             src="https://i.ibb.co/1qHVnTD/3b4b5bb3-8458-49e0-9f8b-a893066df075.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/DCmQHNt/Summer-Camp-for-Kids.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/5srxmct/Summer-Camp-Offerings-Summer-2020.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slieder;
