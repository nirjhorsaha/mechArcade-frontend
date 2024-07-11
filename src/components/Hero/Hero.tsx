/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Carousel } from 'antd';
import mKeyboard1 from '../../assets/keyboard-1.jpg';
import mKeyboard2 from '../../assets/keyboard-2.jpg';
import mKeyboard3 from '../../assets/keyboard-3.jpg';
import mKeyboard4 from '../../assets/keyboard-4.jpg';

const contentStyle: React.CSSProperties = {
  height: '600px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '10px', 
  border: '2px solid #fff', 
};

const imgStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  borderRadius: '10px',
};

const carouselItems = [
  { id: 1, src: mKeyboard1, alt: 'Slide 1' },
  { id: 2, src: mKeyboard2, alt: 'Slide 2' },
  { id: 3, src: mKeyboard3, alt: 'Slide 3' },
  { id: 4, src: mKeyboard4, alt: 'Slide 4' },
];

const Hero = () => {
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Carousel autoplay>
        {carouselItems.map(item => (
          <div key={item.id}>
            <div style={{ ...contentStyle, backgroundImage: `url(${item.src})` }}>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
