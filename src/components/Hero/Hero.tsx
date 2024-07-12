// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';
// import { Carousel } from 'antd';
// import mKeyboard1 from '../../assets/keyboard-1.jpg';
// import mKeyboard2 from '../../assets/keyboard-2.jpg';
// import mKeyboard3 from '../../assets/keyboard-3.jpg';
// import mKeyboard4 from '../../assets/keyboard-4.jpg';

// const contentStyle: React.CSSProperties = {
//   height: '600px',
//   color: '#fff',
//   lineHeight: '300px',
//   textAlign: 'center',
//   background: '#364d79',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   borderRadius: '10px',
//   border: '2px solid #fff',
// };

// const imgStyle: React.CSSProperties = {
//   height: '100%',
//   width: '100%',
//   objectFit: 'contain',
//   borderRadius: '10px',
// };

// const carouselItems = [
//   { id: 1, src: mKeyboard1, alt: 'Slide 1' },
//   { id: 2, src: mKeyboard2, alt: 'Slide 2' },
//   { id: 3, src: mKeyboard3, alt: 'Slide 3' },
//   { id: 4, src: mKeyboard4, alt: 'Slide 4' },
// ];

// const Hero = () => {
//   return (
//     <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
//       <Carousel autoplay>
//         {carouselItems.map(item => (
//           <div key={item.id}>
//             <div style={{ ...contentStyle, backgroundImage: `url(${item.src})` }}>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Hero;


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import mKeyboard1 from '../../assets/keyboard-1.jpg';
import mKeyboard2 from '../../assets/keyboard-2.jpg';
import mKeyboard3 from '../../assets/keyboard-3.jpg';
import mKeyboard4 from '../../assets/keyboard-4.jpg';

const images = [mKeyboard1, mKeyboard2, mKeyboard3, mKeyboard4];

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Keyboard ${index + 1}`} className="w-full h-10 object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Hero;