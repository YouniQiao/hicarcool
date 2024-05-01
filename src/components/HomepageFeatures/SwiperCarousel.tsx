import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// NOTE: These screenshots were generated with a window of size 1214x649.
// (You can see the size when you resize if you have the dev tools open)
// The shadow + blur is from macOS's screenshot tool.
const data = [
  // Sleek (Elementary) - Homepage
  {
    cover: require('@site/static/img/swiper/1.jpg').default,
    title: 'Preview 1',
  },
  // Sleek (Wealthy) - Homepage
  {
    cover: require('@site/static/img/swiper/2.png').default,
    title: 'Preview 2',
  },
  // Nord theme, new UI - Homepage
  {
    cover: require('@site/static/img/swiper/3.png').default,
    title: 'Preview 3',
  },
  {
    cover: require('@site/static/img/swiper/4.png').default,
    title: 'Preview 3',
  },
  {
    cover: require('@site/static/img/swiper/5.png').default,
    title: 'Preview 3',
  },
];

export default () => {
  const slides = data.map((item, index) => (
    <SwiperSlide key={item.title}>
      <img src={item.cover} alt={item.title} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, EffectCoverflow, Autoplay]}
      spaceBetween={-200}
      slidesPerView={3}
      navigation
      loop
      simulateTouch
      centeredSlides
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={centeredSlide() => console.log('slide change')}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        700: {
          spaceBetween: -100,
          slidesPerView: 3,
        },
        500: {
          spaceBetween: -100,
          slidesPerView: 2,
        },
        300: {
          spaceBetween: -100,
          slidesPerView: 1,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};
