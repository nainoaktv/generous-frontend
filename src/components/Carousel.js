import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';



function HomeCarousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 'auto', width: '100%',}}
          src={ require('../images/miniaussie.jpeg') }
          alt="First slide"
        />
        <Carousel.Caption className="carouselText">
          <h3>Welcome to Generous</h3>
          <p>Make the world a better place.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 'auto', width: '100%',}}
          src={ require('../images/donate.jpeg') }
          alt="Second slide"
        />

        <Carousel.Caption className="carouselText">
          <h3>Donate</h3>
          <p>Donate to a charity to your choice to help the cause.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 'auto', width: '100%',}}
          src={ require('../images/charity.jpg') }
          alt="Third slide"
        />

        <Carousel.Caption className="carouselText">
          <h3>Search for local Charities</h3>
          <p>
            Give a helping hand to a charity of your choice!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel; 