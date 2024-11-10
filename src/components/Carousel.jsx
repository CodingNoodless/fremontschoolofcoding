import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Year4 from '../assets/photo2024.jpg';
import Year3 from '../assets/photo2023.jpeg';

const Carousal = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img className='carousel-img' src={Year4} />
        <Carousel.Caption className='text-carousel'>
          <h3>Centerville Program 2024</h3>
          <p>Our fourth year at Centerville, and first official year as a nonprofit!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img' src={Year3} />
        <Carousel.Caption className='text-carousel'>
          <h3>Centerville Program 2023</h3>
          <p>Our third year at centerville</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousal