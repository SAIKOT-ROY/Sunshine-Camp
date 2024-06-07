import 'swiper/css';
import 'swiper/css/effect-cards';
import { SwiperSlide, Swiper } from 'swiper/react';

// import './styles.css';

// import required modules
// import { EffectCards } from 'swiper/modules';

// const swiper = new Swiper('.swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation, Pagination],
//     ...
//   });

const StaffSlider = () => {
  return (
    <div className='bg-red-100'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        // modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StaffSlider;
