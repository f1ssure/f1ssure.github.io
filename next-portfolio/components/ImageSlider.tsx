'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

const images = [
  {
    id: 'tomtecha',
    src: 'https://github.com/f1ssure/f1ssure.github.io/blob/main/photos/tomtecha.png?raw=true',
    width: '500',
    height: '500',
    alt: 'TomTecha small business website',
  },
  {
    id: 'flappy',
    src: 'https://github.com/f1ssure/f1ssure.github.io/blob/main/photos/flappy.png?raw=true',
    width: '500',
    height: '500',
    alt: 'Flappy Bird game',
  }
];

export default function ImageSlider() {
  return (
    <Splide aria-label='My Personal Project Showcase'>
      {images.map(img => (
        <SplideSlide>
          <Image {...img} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
