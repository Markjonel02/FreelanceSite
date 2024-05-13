import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ImgSlider = () => {
  const breakpoints = {
    spaceBetween: 20,

    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.4,
    },
    1024: {
      slidesPerView: 3.8,
    },
    1280: {
      slidesPerView: 3.2,
    },
    1440: {
      slidesPerView: 3.8,
    },
    1600: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 4,
    },
  };
  return (
    <>
      <Swiper breakpoints={breakpoints} modules={[Autoplay]}>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImgSlider;
