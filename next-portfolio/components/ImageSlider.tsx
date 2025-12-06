'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

const images = [
  {
    id: 'tomtecha',
    src: '/tomtecha.png',
    width: '500',
    height: '500',
    alt: 'TomTecha small business website',
  },
  {
    id: 'meta',
    src: '/meta_portfolio.png',
    width: '500',
    height: '500',
    alt: 'Meta React certification course final project',
  },
  {
    id: 'reminders',
    src: '/reminders.png',
    width: '500',
    height: '500',
    alt: 'Small web app that uses Firebase auth and db',
  },
  {
    id: 'creature',
    src: '/creature_search.png',
    width: '500',
    height: '500',
    alt: 'An RPG creature search app (freeCodeCamp)',
  },
  {
    id: 'python',
    src: '/python.png',
    width: '500',
    height: '500',
    alt: 'Python documentation webpage',
  },
  {
    id: 'cash_register',
    src: '/cash.png',
    width: '500',
    height: '500',
    alt: 'Cash register project (freeCodeCamp)',
  }
];

export default function ImageSlider() {
  return (
    <Swiper
      className='w-9/10 h-85 my-7 rounded-2xl ml-0!'
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <div className='relative'>
        {images.map(img => (
          <SwiperSlide
            className='flex justify-center items-center'
            key={img.id}
          >
            <Image {...img} className='block size-full object-fill' />
          </SwiperSlide>
        ))}
      </div>
      <div className="splide__progress">
        <div className="splide__progress__bar" />
      </div>
    </Swiper>
  );
}
