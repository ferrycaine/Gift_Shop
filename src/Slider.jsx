import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './App.css'

const Slider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-progressbar",
          type: "progressbar",
        }}
        className="progress-slide-carousel relative"
      >
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 1
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 2
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 3
            </span>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Progressbar container */}
      <div className="swiper-pagination custom-progressbar !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
    </div>
  );
};

export default Slider;
