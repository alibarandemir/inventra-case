import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import '../../index.css'

export default function CarouselComponent({
  children,
  autoplay = false,
  slidesPerView = 1,
  spaceBetween = 200,
  loop = true,
  isSingleSlide = false,
 
  
}) {
  return (
    <Swiper
       spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      
      loop={loop}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        //ekran boyutlarına göre her slaytta ne kadar item gösterilecek
        1024: {
          slidesPerView: isSingleSlide ? 1 : slidesPerView||3, 
          
        },
        768: {
          slidesPerView: isSingleSlide ? 1 : 1,
          
        },
        480: {
          slidesPerView: isSingleSlide ? 1 : 1, // Küçük ekranlarda her zaman 1 slide
          
        },
      }}
      
      className="flex justify-center"
    >
      {children.map((child, index) => (
        <SwiperSlide className='flex justify-center' key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
