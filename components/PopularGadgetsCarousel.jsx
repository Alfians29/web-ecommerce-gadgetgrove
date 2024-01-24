'use client';

// import components
import Gadget from './Gadget';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const PopularGadgetsCarousel = ({ gadgets }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='popular-gadget-slider mb-8'
    >
      {gadgets.map((gadget) => {
        return (
          <SwiperSlide key={gadget._id}>
            <Gadget gadget={gadget} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularGadgetsCarousel;
