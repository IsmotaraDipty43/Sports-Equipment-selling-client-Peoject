import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({theme}) => {
  const slides = [slider1, slider2, slider3];

  return (
    <div className={`relative p-5 mx-auto mt-10 mb-10 md:mt-20 md:mb-20 ${theme === 'light' ? 'bg-white' : "bg-gray-900" }`}>
      <h1 className={`mb-10  text-black font-bold text-center md:text-3xl text-2xl lg:text-4xl ${theme === 'light' ? 'text-gray-800' : "text-white " }`}>
      Discover Top-Quality Sports Equipment for Every Athlete
      </h1>
      <div className="mx-auto w-full max-w-[1000px]"> {/* Set fixed width */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
