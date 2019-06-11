import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/css/style.css';

function MyCarousel() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
        className='d-block w-100'
        src={require("../assets/images/44843.jpg")}
        alt=""
        />
        <Carousel.Caption>
          <h2 className='mb-5'>Continued to take personal inventory and when we were wrong promptly admitted it.</h2>
          <p>Step Ten</p>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='d-block w-100'
        src={require("../assets/images/44840.jpg")}
        alt=""
        />
        <Carousel.Caption>
          <h2 className='mb-5'>Reserve a daily time with God for self-examination, Bible reading, and prayer in order to know God and His will for my life and to gain the power to follow His will.</h2>
          <p>Principle Eight</p>
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel;
