import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

const images = {
  {
    src: 'https://raw.githubusercontent.com/f1ssure/f1ssure.github.io/refs/heads/NextSteps/photos/tomtecha.png',
    alt: 'TomTecha small business website',
  },
  {
    src: 'https://github.com/f1ssure/f1ssure.github.io/blob/NextSteps/photos/flappy.png?raw=true',
    alt: 'Flappy Bird game',
  },
};

export default function ImageSlider() {
  return (
    <Splide aria-label='My Personal Project Showcase'>
      {images.map(img => (
        <SplideSlide>
          <Image src={img.src} alt={img.alt} />
        </SplideSlide>
      )}
    </Splide>
  );
}
