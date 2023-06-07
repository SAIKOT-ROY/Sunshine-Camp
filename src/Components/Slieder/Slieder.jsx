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
              className="h-96 max-w-fit"
              src="https://i.ibb.co/1qHVnTD/3b4b5bb3-8458-49e0-9f8b-a893066df075.jpg"
              alt=""
            />
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/DCmQHNt/Summer-Camp-for-Kids.jpg"
              alt=""
            />
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/5srxmct/Summer-Camp-Offerings-Summer-2020.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-5xl w-full text-white font-serif font-bold absolute top-48 md:top-52 start-[46rem] md:start-[50rem] mx-auto align-middle">
              Life Is Enjoy
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:max-w-full md:ml-6 relative">
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/7vsqXL5/i-Stock-1070887914-scaled.jpg"
              alt=""
            />
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/DCmQHNt/Summer-Camp-for-Kids.jpg"
              alt=""
            />
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/PjQyjRC/download.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-5xl w-full text-white font-serif font-bold absolute top-48 md:top-52 start-[46rem] md:start-[50rem] mx-auto align-middle">
              Life Is Enjoy
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:max-w-full md:ml-6 relative">
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/1qHVnTD/3b4b5bb3-8458-49e0-9f8b-a893066df075.jpg"
              alt=""
            />
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/DCmQHNt/Summer-Camp-for-Kids.jpg"
              alt=""
            />
            <img
              className="h-96 max-w-fit"
              src="https://i.ibb.co/5srxmct/Summer-Camp-Offerings-Summer-2020.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-5xl w-full text-white font-serif font-bold absolute top-48 md:top-52 start-[46rem] md:start-[50rem] mx-auto align-middle">
              Life Is Enjoy
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slieder;
