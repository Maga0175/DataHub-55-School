import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import UniversityCard from '../UniversityCard/UniversityCard';
import { universities } from '../../data/data';

const UniversityCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1.2}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      style={{ padding: '40px 0' }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {universities.map((item) => (
        <SwiperSlide key={item.id}>
          <UniversityCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default UniversityCarousel;
